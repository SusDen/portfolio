import React from 'react';
import {routes} from "./store/routes/routes";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomeContainer from "./HomeContainer";

const router = createBrowserRouter(routes);

function App(): JSX.Element {
    return (
        <HomeContainer>
            <RouterProvider router={router}/>
        </HomeContainer>
    );
}

export default App;
