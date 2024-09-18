/**
 * Get the current color scheme of the page.
 * @returns The color scheme of the page. The possible values are "light", "darkblue", "black", and "unknown".
 */
const getColorScheme = (): "light" | "darkblue" | "black" | "unknown" => {
    const background = document.body.style.backgroundColor;
    switch (background) {
        case "rgb(255, 255, 255)":
            return "light";

        case "rgb(21, 32, 43)":
            return "darkblue";

        case "rgb(0, 0, 0)":
            return "black";

        default:
            return "unknown";
    }
};

export { getColorScheme };
