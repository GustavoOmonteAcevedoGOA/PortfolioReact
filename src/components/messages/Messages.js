import React, { useEffect, useState } from 'react';
import MessageCard from '../card/MessageCard';
import './app.css';

const Messages = () => {

    const [data, setData]= useState([]);   

    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_API}emails`)
            .then(res => res.json())
            .then(contact => {
                setData(contact);
            });
    }, []);

    return (
        <section className="contact" id="contact">
            <h1 className="heading"><i className="fas fa-id-badge"></i>
                <span>Messages</span>
            </h1>
            
            <div className="row">
                <div className="content">
                    <div className="message messages-grid">
                        {
                            (data) && data.map( message => {
                                return (
                                    <MessageCard
                                        key = { message.id }
                                        subject = { message.subject }
                                        email = { message.email }
                                        content = { message.content }
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
    
export default Messages;
