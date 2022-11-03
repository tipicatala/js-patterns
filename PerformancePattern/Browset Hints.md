**Prefetch** - Fetch and cache resources that may be requested some time soon.

*Implementation*
1. add to the head in `html`
```
  <link rel="prefetch" href="./about.bundle.js" />
```
2. use webpack magic comment
```
  const About = lazy(() => import(/* webpackPrefetch: true */ "./about"));
```

**Preload** - the resources will be fetched for sure, to be used immediately.Often used for fonts, images.

*Implementation*
1. add to the head in `html`
```
  <link rel="preload" href="./about.bundle.js" />
```
2. use webpack magic comment
```
  const About = lazy(() => import(/* webpackPreload: true */ "./about"));
```
