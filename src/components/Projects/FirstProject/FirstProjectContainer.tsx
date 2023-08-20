import React from 'react';
import Loader from "../../Loader/Loader";

const FirstProjectLazy = React.lazy(() => import('./FirstProject'))
const FirstProjectContainer = (): JSX.Element => {
    return (
        <div>
            <React.Suspense fallback={<Loader/>}>
                <FirstProjectLazy/>
            </React.Suspense>
        </div>
    );
};

export default FirstProjectContainer;