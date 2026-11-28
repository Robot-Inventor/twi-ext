const XWEB_ENTRY = 'script[src^="https://abs.twimg.com/x-web/x-web/entry-client"]';
const RWEB_ENTRY = [
    'script[src^="https://abs.twimg.com/responsive-web/client-web/main."]',
    'script[src^="https://abs.twimg.com/responsive-web/client-web-legacy/main."]'
].join(", ");

const WEB_ENTRY = `${XWEB_ENTRY}, ${RWEB_ENTRY}`;

let client: "rweb" | "xweb" | null = null;

const getWebClient = (): typeof client => {
    if (!client) {
        if (document.querySelector(XWEB_ENTRY)) {
            client = "xweb";
        } else if (document.querySelector(RWEB_ENTRY)) {
            client = "rweb";
        }
    }

    return client;
};

export { WEB_ENTRY, getWebClient };
