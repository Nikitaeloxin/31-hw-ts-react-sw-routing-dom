import React from 'react';
import {Hero} from "../utils/types";

interface Props{
    hero:Hero
}

const TransportInfo = ({hero}:Props) => {
    return (
        <div>
            <img src={hero.imgUrl} className="img-thumbnail" alt='sw hero'  />
            <h1>Name:{hero.name}</h1>
            <h2>Cargo_capacity:{hero.cargo_capacity}</h2>
            <h2>Passengers:{hero.passengers}</h2>
            <h2>Crew:{hero.crew}</h2>
            <h2>Length:{hero.length}</h2>
            <h2>Model:{hero.model}</h2>
        </div>
    );
};

export default TransportInfo;