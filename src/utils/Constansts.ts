import friend1 from "../img/friend1.jpg";
import friend2 from "../img/friend2.jpg";
import friend3 from "../img/friend3.jpg";
import friend4 from "../img/friend4.jpg";
import friend5 from "../img/friend5.jpg";
import friend6 from "../img/friend6.jpg";
import friend7 from "../img/friend7.jpg";
import friend8 from "../img/friend8.jpg";
import friend9 from "../img/friend9.jpg";
import {CharacterItem, NavigationItem} from "./types";


export const navItems:NavigationItem[] = [{title:'Home', route:'home'},{title:'About me', route:'about_me'}
    ,{title:'Star Wars',route:'star_wars'},{title:'Contact',route:'contact'}];

export const charItems:CharacterItem[] = [{title:'luke', route:1},{title:'r2d2', route:3},{title:'c3po', route:2}
    ,{title:'leia',route:5},{title:'chewbacca',route:13},{title:'yoda',route:0},{title:'han_solo',route:14}
    ,{title:'obi_wan',route:10},{title:'ewok',route:30},{title:'falcon',route:10}]

export const base_url ='https://sw-info-api.herokuapp.com/';

export const friends = [friend1,friend2,friend3,friend4,friend5,friend6,friend7,friend8,friend9]

export const period_month = 30 * 24 * 60 * 60 * 1000;


export const defaultText ='It is a period of civil war.\n' +
    '            Rebel spaceships, striking\n' +
    '            from a hidden base, have won\n' +
    '            their first victory against\n' +
    '            the evil Galactic Empire.\n' +
    '\n' +
    '            During the battle, Rebel\n' +
    '            spies managed to steal secret\n' +
    '            plans to the Empire\'s\n' +
    '            ultimate weapon, the DEATH\n' +
    '            STAR, an armored space\n' +
    '            station with enough power\n' +
    '            to destroy an entire planet.\n' +
    '\n' +
    '            Pursued by the Empire\'s\n' +
    '            sinister agents, Princess\n' +
    '            Leia races home aboard her\n' +
    '            starship, custodian of the\n' +
    '            stolen plans that can save her\n' +
    '            people and restore\n' +
    '            freedom to the galaxy....'