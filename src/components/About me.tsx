import React, {useEffect, useState} from 'react';
import {base_url, charItems, period_month} from "../utils/Constansts";
import HeroInfo from "./HeroInfo";
import {CharacterItem, Hero} from "../utils/types";
import {useParams} from "react-router-dom";
import TransportInfo from "./TransportInfo";

const AboutMe = () => {
    const [hero, setHero] = useState<Hero>({});
    const {heroId} = useParams();


    useEffect(() => {
        // const hero = JSON.parse(localStorage.getItem('hero')!);
        // const date = localStorage.getItem('heroExpDate');

        // if (hero1 && ((Date.now() - date) < period_month)) {
        //     setHero(hero1)
        // } else {
        let id = charItems[0].route;
        if (heroId && charItems.find(e=>e.title===heroId)){
            id = charItems.find(e=>e.title===heroId)!.route;
        }
        if (heroId === 'falcon' ){
            fetch(`${base_url}/v1/transports/${id}`)
                .then(response => response.json())
                .then(data => {
                    const hero =
                        {
                            "imgUrl": `${base_url}/${data.image}`,
                            "name": data.name,
                            "cargo_capacity": data.cargo_capacity,
                            "passengers": data.passengers,
                            "crew": data.crew,
                            "length": data.length,
                            "model": data.model
                        };
                    setHero(hero)
                    // localStorage.setItem('hero', JSON.stringify(hero))
                    // localStorage.setItem('heroExpDate', Date.now().toString());
                })

        } else {
            fetch(`${base_url}/v1/peoples/${id}`)
                .then(response => response.json())
                .then(data => {
                    const hero =
                        {
                            "imgUrl": `${base_url}/${data.image}`,
                            "name": data.name,
                            "birthYear": data.birth_year,
                            "eye_color": data.eye_color,
                            "gender": data.gender,
                            "hair_color": data.hair_color,
                            "height": data.height,
                            "mass": data.mass
                        };
                    setHero(hero)
                    // localStorage.setItem('hero', JSON.stringify(hero))
                    // localStorage.setItem('heroExpDate', Date.now().toString());
                })
        }


        return () => console.log('About me unmounted')
    }, [])

   if (heroId === 'falcon' ){
       return <TransportInfo hero={hero}/>
   } else {
       return <HeroInfo hero={hero}/>

   }



};

export default AboutMe;