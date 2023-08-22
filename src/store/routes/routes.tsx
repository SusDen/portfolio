import {IRoute} from '../interfaces/IRoute.js';
import React from 'react';
import Home from "../../Home";
import FirstProjectContainer from "../../components/Projects/FirstProject/FirstProjectContainer";
import SecondProjectContainer from "../../components/Projects/SecondProject/SecondProjectContainer";


export const routes: IRoute[] = [
  {
    name: 'Main',
    path: '/',
    element: <Home/>,
  },
  {
    name: 'firstProject',
    path: 'firstProject',
    element: <FirstProjectContainer/>
  },
  {
    name: 'secondProject',
    path: 'secondProject',
    element: <SecondProjectContainer/>
  }
];
