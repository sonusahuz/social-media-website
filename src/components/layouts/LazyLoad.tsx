import React, { lazy, Suspense } from "react";
import Loading from "./Loading";
const withLazy = (importComponent: any) => {
  const LazyComponent = lazy(importComponent);

  return (props: any) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default withLazy;
