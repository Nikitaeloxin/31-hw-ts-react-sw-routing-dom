import React, {useEffect, useState} from 'react';
import OptionItem from "./OptionItem";
import {base_url, period_month} from "../utils/Constansts";
import ContactForm from "./ContactForm";


const Contact= ()=> {

    const [planets,setPlanets] = useState<string[]>([])

    useEffect(()=>{
        const planetsArr = localStorage.getItem('planetsArr');
        const date =  localStorage.getItem('planetExpDate')
        // @ts-ignore
        if (planetsArr && ((Date.now() - date) < period_month)) {
            setPlanets(planetsArr.split(','))
        } else {
            fetch(`${base_url}/v1/planets`)
                .then(response => response.json())
                .then((data:{name:string}[] ) => {
                    const planetsArr1 =[...data.map(e => e.name)]
                    setPlanets(planetsArr1)
                    localStorage.setItem('planetsArr', planetsArr1.toString()  )
                    localStorage.setItem('planetExpDate', Date.now().toString());
                })
                .catch(error => {
                    console.error(error);

                })
        }
    },[])


        return (
            <ContactForm planets={planets}/>
        );



};

export default Contact;