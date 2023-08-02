import {IRoute} from '../interfaces/IRoute.js';
import React from 'react';
import Home from "../../Home";
import FirstProject from "../../components/Projects/FirstProject/FirstProject";

export const routes: IRoute[] = [
    {
        name: 'Main',
        path: '/',
        element: <Home/>,
    },
    {
        name: 'first',
        path: '/firstProject',
        element: <FirstProject/>,
    },
];
