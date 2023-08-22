import React from 'react';
import {routes} from "./store/routes/routes";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Loader from "./components/Loader/Loader";

const router = createBrowserRouter(routes);
const HomeContainer = React.lazy(() => import("./HomeContainer"))

function App(): JSX.Element {
  return (
    <React.Suspense fallback={<Loader/>}>
      <HomeContainer>
        <RouterProvider router={router}/>
      </HomeContainer>
    </React.Suspense>
  );
}

export default App;
