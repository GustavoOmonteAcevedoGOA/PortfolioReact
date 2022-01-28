import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import SendDelete from '../../helpers/Services/SendDelete';
const PorfolioCard = ({id,title, link, imagen, userState}) => {

    const navigate = useNavigate();
    const params = { id };
    const Edit = () =>
        navigate({
            pathname: '/formPorfolio',
            search: `?${createSearchParams(params)}`,
        });
    const Delete = () =>
    {
        SendDelete('portfolio',id);
    };
    return (
        <div className='box-content'>
            <h3 className='title-project'>{title}</h3>
            <div className="box">
                
                <a href={link} target="_BLANK" rel="noreferrer">
                    <img src={imagen} alt="" />
                </a>

            </div>
            {   userState ?
                <>
                    <button className="btn" onClick={Edit}>Editar</button>
                    <button className='btn btn-delete' onClick={Delete} >Delete</button>
                </>:''
            }
        </div>
    );
};

export default PorfolioCard;
