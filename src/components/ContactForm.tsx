import React from 'react';
import OptionItem from "./OptionItem";
import contactStyle from '../css/contact.module.css'

interface Props {
    planets:string[]
}
const ContactForm = ({planets}:Props) => {

    return (
        <div className="container">
            <form >
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planet">Planet</label>
                <select  name="planet">
                    {planets.map(item=><OptionItem key={item} itemTitle={item}/>)}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name='subject' placeholder='Write something'></textarea>
                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
};

export default ContactForm;