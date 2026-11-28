import { createIs } from "typia";
import { getReactFiber } from "./utility.js";

type DataRecord = Record<string, unknown>;

const ROOT_FIBER_INDEX = -1;
const isRecord = createIs<DataRecord>();

const asRecord = (value: unknown): DataRecord | null => (isRecord(value) ? value : null);

const getFiberBranch = (start: unknown): DataRecord[] => {
    const branch: DataRecord[] = [];
    let fiber = start;

    while (isRecord(fiber)) {
        branch.push(fiber);
        fiber = fiber["return"];
    }

    return branch;
};

const findMountedBranch = (
    root: DataRecord,
    targets: ReadonlySet<DataRecord>,
    possibleAncestors: ReadonlySet<DataRecord>
): DataRecord[] | null => {
    if (targets.has(root)) return [root];

    let child = asRecord(root["child"]);
    while (child) {
        if (possibleAncestors.has(child)) {
            const branch = findMountedBranch(child, targets, possibleAncestors);
            if (branch) {
                branch.push(root);

                return branch;
            }
        }

        child = asRecord(child["sibling"]);
    }

    return null;
};

const getCommittedBranch = (fiber: DataRecord): DataRecord[] => {
    const branch = getFiberBranch(fiber);
    const root = branch.at(ROOT_FIBER_INDEX);
    const current = asRecord(asRecord(root?.["stateNode"])?.["current"]);
    if (!current) return branch;

    const alternate = asRecord(fiber["alternate"]);
    const targets = new Set(alternate ? [fiber, alternate] : [fiber]);
    const possibleAncestors = new Set([...branch, ...getFiberBranch(alternate)]);
    for (const node of possibleAncestors) {
        const counterpart = asRecord(node["alternate"]);
        if (counterpart) {
            possibleAncestors.add(counterpart);
        }
    }

    // A React bailout may keep return links to old parents. Walk the
    // committed child lists, restricting the search to the known ancestors.
    return findMountedBranch(current, targets, possibleAncestors) ?? [];
};

const getAncestorProps = (element: HTMLElement): DataRecord[] => {
    const fiber = asRecord(getReactFiber(element));
    if (!fiber) return [];

    return getCommittedBranch(fiber)
        .map((node) => asRecord(node["memoizedProps"]))
        .filter((props) => props !== null);
};

export { type DataRecord, asRecord, getAncestorProps };
