import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import PorfolioCard from '../card/PortfoliCard';
import { NavLink } from 'react-router-dom';
import './app.css';

const Portfolio = () => {

    const [data,setData]= useState([]);
    const { user } = useContext(UserContext);
    let url='http://localhost:5000/portfolio';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(portfolio => {
                setData(portfolio);
            });
    }, []);

    return (
        <section className="portfolio" id="portfolio">
            <h1 className="heading"><i className="fas fa-briefcase"></i>
                My <span>Projects     </span>
                {
                    user &&
                        <NavLink to="/formWorkExpirience">
                            <button className='btn btn-add'>Add</button>
                        </NavLink>
                }
            </h1>
            <div className="box-container">
                {
                    (data)?data.map(
                        portfolio =>{
                            return <PorfolioCard 
                                key={portfolio.id}
                                id = { portfolio.id }
                                title = {portfolio.title}
                                link = {portfolio.link}
                                imagen = {portfolio.imagen}
                                userState={user} 
                            />;
                        }):
                        <span>Cargando</span>
                }
            </div>
        </section>
    );
};

export default Portfolio;
