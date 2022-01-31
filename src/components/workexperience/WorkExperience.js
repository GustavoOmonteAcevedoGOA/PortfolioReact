import React, { useContext, useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';
import { LinkToJsonServer } from '../../Api/ConnectionToJsonServer';
import UserContext from '../../context/UserContext';
import WorkexpirienceCard from '../card/WorkExpirienceCard';
import './app.css';

const WorkExperience = () => {

    const [data,setData]= useState([]);
    const { user } = useContext(UserContext);
    let url=`${LinkToJsonServer}workExpirience`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(workExpi => {
                setData(workExpi);
            });
    }, []);

    return(
        (data)?(
            <section className="education" id="education">
                <h1 className="heading">
                    <i className="fas fa-university"></i> My <span>Work Experience   </span>
                    {user &&
                        <>
                            <NavLink to="/formWorkExpirience"><button className='btn btn-add'>Add</button></NavLink>
                        </>
                    }
                </h1>
                <div className="box-container">
                    {
                        data.map( expirience => {
                            return <WorkexpirienceCard 
                                key = { expirience.id }
                                id = { expirience.id }
                                title = { expirience.title }
                                post = { expirience.post }
                                description = { expirience.description }
                                date = { expirience.date }
                                userState = { user }
                            />;
                        })    
                    }
                </div>
            </section>
        ):(<span>Cargando</span>));
};

export default WorkExperience;