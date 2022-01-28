import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import ContactForm from '../Forms/Contact';
import ContactCard from '../card/ContactCard';
import './app.css';

const Contact = () => {

    const [data,setData]= useState([]);
    const { user } = useContext(UserContext);
    let url=`${process.env.REACT_APP_URL_API}contact`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(contact => {
                setData(contact);
            });
    }, []);
    
    return (
        <section className="contact" id="contact">
            <h1 className="heading"><i className="fas fa-id-badge"></i><span>contact</span> me</h1>
            <div className="row">
                {
                    (data)? data.map(cont=>{
                        return <ContactCard
                            key= {Date.now}
                            id = { cont.id }
                            location = { cont.location }
                            country = { cont.country }
                            email = { cont.email }
                            phone = { cont.phone }
                            userState = { user }
                        />;
                    }) : <span>Cargando</span>
                }
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;