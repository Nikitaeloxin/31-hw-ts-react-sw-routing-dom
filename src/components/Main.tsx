import React, {useContext} from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import Home from "./Home";
import {navItems} from "../utils/Constansts";
import AboutMe from "./About me";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {Route, Routes} from "react-router-dom";



const Main = () => {
    return (<Routes>
        {[navItems[1].route,`${navItems[1].route}/:heroId`].map(p=><Route key={p} path={p} element={<AboutMe/>}/>)}
        <Route path={navItems[1].route} element={<AboutMe/>}/>
        <Route path={navItems[2].route} element={<StarWars/>}/>
        <Route path={navItems[3].route} element={<Contact/>}/>
        {['/',navItems[0].route].map(p=><Route key={p} path={p} element={<Home/>}/>)}

    </Routes>)


};

export default Main;