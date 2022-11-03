**Client side rendering**
1. Client requests HTML from server.
2. Server replies with barebones HTML.
3. Browser parses and renders HTML.
4. Client requests and downloads JS.
5. Browser renders downloaded content.

> *TTFB*: The Time To First Byte can be fast, since the initial HTML does not contain large components.
> *FCP*: The First Contentful Paint can occur once the JavaScript bundle has downloaded, parsed, and executed its contents.
> *TTI*: The Time To Interactive can occur once the JavaScript bundle has downloaded, parsed, and executed its contents to bind the event handlers to the components.
> *LCP*: The Largest Contentful Paint can occur at the same time as the First Contentful Paint, provided there aren't any large components such as large images or videos.

**Static Rendering**
1. Client requests HTML from server.
2. Server replies with full HTML.
3. Browser parses and renders HTML.
4. Client requests and downloads JS.
5. Browser hydrates elements (react attaches listeners and takes over rendering).

> *TTFB*: The Time To First Byte can be fast, since the initial HTML does not contain large components.
> *FCP*: The First Contentful Paint can occur once the JavaScript bundle has downloaded, parsed, and executed its contents.
> *TTI*: The Time To Interactive can occur once the JavaScript bundle has downloaded, parsed, and executed its contents to bind the event handlers to the components.
> *LCP*: The Largest Contentful Paint can occur at the same time as the First Contentful Paint, provided there aren't any large components such as large images or videos.