import { isNonEmptyArray } from "@robot-inventor/ts-utils";

/**
 * Get React props from an element.
 * @param element The element to get React props from.
 * @returns The React props of the element.
 */
const getReactProps = (element: HTMLElement): object | null => {
    const properties = Object.getOwnPropertyNames(element);
    const reactPropsNames = properties.filter((name) => name.startsWith("__reactProps$")) as Array<keyof Element>;
    if (!isNonEmptyArray(reactPropsNames)) return null;

    return element[reactPropsNames[0]] as object;
};

export { getReactProps };
