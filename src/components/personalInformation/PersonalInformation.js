import React, { useContext, useEffect, useState } from 'react';
import { LinkToJsonServer } from '../../Api/ConnectionToJsonServer';
import UserContext from '../../context/UserContext';
import PersonalCard from '../card/PersonalCard';
import './app.css';
const PersonalInformation = () => {
    
    const [data,setData]= useState([]);
    const { user } = useContext(UserContext);
    let url=`${LinkToJsonServer}personalInformation`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(personal => {
                setData(personal);
            });
    }, []);
    
    return (
        <section className="home" id="home">
            {data.map( personal => {
                return <PersonalCard 
                    key = { Date.now }
                    id = { personal.id }
                    name = { personal.name}
                    description = {personal.description}
                    occupation = {personal.occupation}
                    hobby = {personal.hobby}
                    language = {personal.language}
                    userState = { user }
                />;
            })}
        
        </section>
    );
};

export default PersonalInformation;
