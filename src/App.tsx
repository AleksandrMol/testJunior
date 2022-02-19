import React from "react";
import { hot } from 'react-hot-loader/root';
import { Header } from './Header/Header';
import { Layout } from "./Layout";





function AppComponent () {
    return(
        <Layout />
    );
}

export const App = hot(AppComponent);