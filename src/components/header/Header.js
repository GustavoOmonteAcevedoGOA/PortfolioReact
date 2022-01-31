import React, { useContext, useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome,faBriefcase,faGraduationCap ,faIdCard ,faFolderOpen} from '@fortawesome/free-solid-svg-icons';
import { faGithub,faFacebook,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons';

import './app.css';
import HeaderCard from '../card/HeaderCard';
import { LinkToJsonServer } from '../../Api/ConnectionToJsonServer';
const Header = () => {
    const [data,setData]= useState([]);
    const { user } = useContext(UserContext);
    let url=`${LinkToJsonServer}header`;
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(heads => {
                setData(heads);
            });
    }, []);

    return (
        <header>
            {(data)?data.map( personal => {
                return <HeaderCard 
                    key = { personal.id }
                    name = { personal.name}
                    occupation = {personal.occupation}
                />;
            }) : <span>Cargando</span>}

            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink to="/"><FontAwesomeIcon icon={ faHome } />  Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Administrator"><FontAwesomeIcon icon={ faIdCard } />
                                    Admin
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/workexperience"><FontAwesomeIcon icon={ faBriefcase } />
                            Work Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio"><FontAwesomeIcon icon={ faFolderOpen } />
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills"><FontAwesomeIcon icon={ faGraduationCap } />
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><FontAwesomeIcon icon={ faIdCard } />
                            Contact
                        </NavLink>
                    </li>
                    {
                        user && <li>
                            <NavLink to="/messages"><FontAwesomeIcon icon={ faIdCard } />
                                Messages
                            </NavLink>
                        </li>
                    }
                </ul>
            </nav>
            <div className='footer-social-media'>
                <ul className='header-social-media'>
                    <li>
                        <a href="https://www.github.com/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faGithub } />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faFacebook } />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faInstagram } />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={ faYoutube } />
                        </a>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </header>
    );
};

export default Header;
