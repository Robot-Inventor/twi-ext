const getReactProps = (element: HTMLElement): unknown | undefined => {
    const reactPropsName = Object.getOwnPropertyNames(element).filter((name) =>
        name.startsWith("__reactProps$")
    )[0] as keyof HTMLElement;
    if (!reactPropsName) return undefined;

    const props = element[reactPropsName];
    return props;
};

export { getReactProps };
