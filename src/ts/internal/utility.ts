import type { InitialState } from "../../types/initialState.js";
import { isNonEmptyArray } from "@robot-inventor/ts-utils";
import { json } from "typia";

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

/**
 * Get the initial state of the page.
 * @returns The initial state of the page.
 */
const getInitialState = (): InitialState => {
    const scriptElements = document.querySelectorAll("body > script:not([src])");
    const initialStateScript = [...scriptElements].find((script) =>
        script.textContent?.trim().startsWith("window.__INITIAL_STATE__")
    );
    if (!initialStateScript) throw new Error("[twi-ext] Failed to find initial state.");

    const initialStateText = initialStateScript.textContent
        ?.trim()
        .replace(/^window\.__INITIAL_STATE__=/u, "")
        .split(";window.__META_DATA__")[0];
    if (!initialStateText) throw new Error("[twi-ext] Failed to extract initial state.");

    const initialState = json.isParse<InitialState>(initialStateText);
    if (!initialState) throw new Error("[twi-ext] Failed to parse initial state.");

    return initialState;
};

export { getReactProps, getInitialState };
