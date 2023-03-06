import React from 'react';
import Navigation from "./Navigation";
import {NavigationItem} from "../utils/types";



const Header = () => {

    return (
        <header>
            <Navigation />
            <h1 className="text-center py-4">Luke Skywalker</h1>
        </header>
    );
};

export default Header;