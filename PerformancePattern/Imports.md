**Static Imports**
  1. Staticly imported modules are instantly available to user.
  2. Can be analized and tree-shaken.

**Dynamic Imports** *using <Suspence/>*
```
const Card3 = lazy(() =>
import(/*webpackChunkName: "card3" */ './components Card3')
...

return (
  <Suspense fallback={<p id="loading">Loading...</p>}>
    <Card3/>
  </Suspense>
)
```

 1. Reduces bundle size, faster initial load

**Import on Visibility**
Can be implemented using `useInView` from `react-intersection-observer`

```
import { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
const Listing = lazy(() => import("./components/Listing"));

function ListingCard(props) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref}>
      <Suspense fallback={<div />}>{inView && <Listing />}</Suspense>
    </div>
  );
}

```
