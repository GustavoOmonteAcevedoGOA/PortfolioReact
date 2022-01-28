import React, { useContext, useEffect, useState } from 'react';
import './app.css';
import SkillsCard from '../card/SkillsCard';
import UserContext from '../../context/UserContext';
import { NavLink } from 'react-router-dom';

const Skills = () => {
  
    const [data,setData]= useState([]);
    const { user } = useContext(UserContext);
    let url='http://localhost:5000/skills';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(skill => {
                setData(skill);
            });
    }, []);
    return (
        <section className="contact" id="contact">
            <h1 className="heading"><i className="fas fa-id-badge"></i>
                <span>Abilities    </span>
                {
                    user &&
                        <NavLink to="/formSkill">
                            <button className='btn btn-add'>Add</button>
                        </NavLink>
                }
            </h1>
            
            <div className="row">
                <div className="content">
                    <div className="info grid-skill">
                        {
                            (data)?data.map( (skills,index) => {
                                return <SkillsCard 
                                    key = { index }
                                    id = { skills.id } 
                                    skill = { skills.skill}
                                    punctuation = {skills.punctuation}
                                    userState = {user}
                                />;
                            }) : <span>Cargando</span>}
                    </div>
                </div>
            </div>
        </section>
    );
};
    
export default Skills;
