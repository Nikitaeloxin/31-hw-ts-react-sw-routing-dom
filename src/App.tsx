import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {base_url, defaultText, navItems} from "./utils/Constansts";
import {NavigationItem} from "./utils/types";
import navItem from "./components/NavItem";

const App =()=>{

        return (
            <div className="container-fluid">
                <Header />
                <Main/>
                <Footer/>
            </div>
        );

}

export default App;
