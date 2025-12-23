import { isProfileReactPropsData, type UserProps } from "../../types/reactProps.js";
import type { InitialState } from "../../types/initialState.js";
import { json } from "typia";

interface ReactFiber {
    pendingProps?: unknown;
    memoizedProps?: unknown;
}

/**
 * Get React props from an element.
 * @param element The element to get React props from.
 * @returns The React props of the element.
 */
const getReactProps = (element: HTMLElement): object | null => {
    const properties = Object.getOwnPropertyNames(element);
    const reactPropsNames = properties.find((name) => name.startsWith("__reactProps$"));
    if (!reactPropsNames) return null;

    return element[reactPropsNames as keyof Element] as object;
};

/**
 * Get React fiber node from an element.
 * @param element Target element.
 * @returns React fiber of the element.
 */
const getReactFiber = (element: HTMLElement): ReactFiber | null => {
    const properties = Object.getOwnPropertyNames(element);
    const fiberPropName = properties.find((name) => name.startsWith("__reactFiber$"));
    if (!fiberPropName) return null;

    return element[fiberPropName as keyof Element] as ReactFiber;
};

/**
 * Traverse a fiber tree to find the latest UserProps.
 * @param profileElement The profile element.
 * @returns The latest UserProps found in the fiber tree, or null if not found.
 */
const getUserPropsFromFiberTree = (profileElement: HTMLElement): UserProps | null => {
    const fiber = getReactFiber(profileElement);
    if (!fiber) return null;

    const fiberProps = fiber.pendingProps ?? fiber.memoizedProps;
    if (!isProfileReactPropsData(fiberProps)) return null;

    return fiberProps.children[0].props.children[1].props.user;
};

/**
 * Get the initial state of the page.
 * @returns The initial state of the page.
 */
const getInitialState = (): InitialState => {
    const scriptElements = document.querySelectorAll("body > script:not([src])");
    const initialStateScript = [...scriptElements].find((script) =>
        script.textContent.trim().startsWith("window.__INITIAL_STATE__")
    );
    if (!initialStateScript) throw new Error("[twi-ext] Failed to find initial state.");

    const [initialStateText] = initialStateScript.textContent
        .trim()
        .replace(/^window\.__INITIAL_STATE__=/u, "")
        .split(";window.__META_DATA__");
    if (!initialStateText) throw new Error("[twi-ext] Failed to extract initial state.");

    const initialState = json.isParse<InitialState>(initialStateText);
    if (!initialState) throw new Error("[twi-ext] Failed to parse initial state.");

    return initialState;
};

export { getReactProps, getInitialState, getUserPropsFromFiberTree };
