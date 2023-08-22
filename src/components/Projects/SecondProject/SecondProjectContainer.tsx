import React from 'react';
import Loader from "../../Loader/Loader";

const SecondProject = React.lazy(() => import("./SecondProject"))

const SecondProjectContainer = () => {
  return (
    <div>
      <React.Suspense fallback={<Loader/>}>
        <SecondProject/>
      </React.Suspense>
    </div>
  );
};

export default SecondProjectContainer;