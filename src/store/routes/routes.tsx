import {IRoute} from '../interfaces/IRoute.js';
import React from 'react';
import Home from "../../Home";
import FirstProjectContainer from "../../components/Projects/FirstProject/FirstProjectContainer";
import Loader from "../../components/Loader/Loader";


export const routes: IRoute[] = [
    {
        name: 'Main',
        path: '/',
        element: <Home/>,
    },
    {
        name: 'first',
        path: 'firstProject',
        element: <FirstProjectContainer/>
    }, {
        name: 'first',
        path: 'loader',
        element: <Loader/>
    },
];
