const XWEB_CONVERSATION_SELECTOR = '[role="dialog"] [id^="urt:conversation:"]';

const observeXwebConversations = (
    options: MutationObserverInit,
    onConversation: (conversation: Element) => void
): void => {
    const observed = new WeakSet<Element>();
    const observe = (conversation: Element): void => {
        if (observed.has(conversation)) return;

        observed.add(conversation);
        const update = (): void => {
            if (conversation.isConnected && conversation.matches(XWEB_CONVERSATION_SELECTOR)) {
                onConversation(conversation);
            }
        };

        new MutationObserver(update).observe(conversation, options);
        update();
    };

    // xweb mounts media dialogs outside the main timeline.
    const observer = new MutationObserver((records) => {
        for (const record of records) {
            for (const node of record.addedNodes) {
                if (node instanceof Element && node.isConnected) {
                    if (node.matches(XWEB_CONVERSATION_SELECTOR)) {
                        observe(node);
                    }

                    node.querySelectorAll(XWEB_CONVERSATION_SELECTOR).forEach(observe);
                }
            }
        }
    });

    observer.observe(document, options);

    document.querySelectorAll(XWEB_CONVERSATION_SELECTOR).forEach(observe);
};

export { XWEB_CONVERSATION_SELECTOR, observeXwebConversations };
