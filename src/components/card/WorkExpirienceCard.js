import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import SendDelete from '../../helpers/Services/SendDelete';

const WorkexpirienceCard = ( { id, title, post, description, date, userState }) => {

    const [ card, setCard ] = useState(false);
    const navigate = useNavigate();
    const params = { id };

    const Edit = () =>
        navigate({
            pathname: '/formWorkExpirience',
            search: `?${createSearchParams(params)}`,
        });

    const Delete = () =>
    {
        SendDelete('workExpirience',id);
        setCard(!card);
    };

    return (
        <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <h3>{title}</h3>
            <h4>{post}</h4>
            <p>{description}</p>
            <span>{date}</span>
            {userState ?
                <>
                    <button className="btn" onClick={Edit}>Editar</button>
                    <button className='btn btn-delete' onClick={Delete} >Delete</button>
                </>:''
            }
        </div>
    );
};

export default WorkexpirienceCard;
