import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import SendDelete from '../../helpers/Services/SendDelete';
import { arSkill, SkillRange } from './SkillRange';

const SkillsCard = ({ id, skill, punctuation, userState }) => {
    
    const punctuationElement= arSkill();     
    const navigate = useNavigate();

    const params = { id };
    
    const Edit = () =>
        navigate({
            pathname: '/formSkill',
            search: `?${createSearchParams(params)}`,
        });
    const Delete = () =>
    {
        SendDelete('skills',id);
    };

    return (
        <div className="rows-skill">
            <h3 className="title-skill">{skill}</h3>
            <div className="knowledge">
                {
                    punctuationElement.map( (skill, index) =>{
                        const keys = index + skill; 
                        return (punctuation - 1 < index)?
                            <SkillRange key = { keys } id={punctuation} skillStyle='empty'/>
                            :<SkillRange key = { keys } id={punctuation} skillStyle={skill}/>;                       
                    })
                }
            </div>
            {userState ?
                <>
                    <button className="btn" onClick={Edit}>Editar</button>
                    <button className='btn btn-delete' onClick={Delete} >Delete</button>
                </>:''
            }
        </div>
    );
};

export default SkillsCard;