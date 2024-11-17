import { isNonEmptyArray } from "@robot-inventor/ts-utils";

/**
 * Get React props from an element.
 * @param element The element to get React props from.
 * @returns The React props of the element.
 */
const getReactProps = (element: HTMLElement): object | null => {
    const properties = Object.getOwnPropertyNames(element) as Array<keyof typeof element>;
    const reactPropsNames: Array<keyof HTMLElement> = properties.filter((name) => name.startsWith("__reactProps$"));
    if (!isNonEmptyArray(reactPropsNames)) return null;

    return element[reactPropsNames[0]] as object;
};

export { getReactProps };
