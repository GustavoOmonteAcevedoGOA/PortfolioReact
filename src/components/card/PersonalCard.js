import React from 'react';
import { 
    faGithub,
    faFacebook,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import PersonalLabel from './PersonalLabel';
import PersonalNetwork from './PersonalNetwork';
import { createSearchParams, useNavigate } from 'react-router-dom';

const PersonalCard = ( { id, name, description, occupation, hobby, language, userState } ) => {
    
    const navigate = useNavigate();
    const params = { id };

    const Edit = () =>
        navigate({
            pathname: '/formPersonaInformation',
            search: `?${createSearchParams(params)}`,
        });

    return (
        <>
            <h3>
                Hi my name is <span>{ name }</span>!
            </h3>
            <h1>
                I&apos;M <span>{ description }</span>
            </h1>
            <div className="about" id="about">
                <div className="row">
                    <div className="info">
                        <PersonalLabel label="name" value={name}/>
                        <PersonalLabel label="hobby" value={hobby}/>
                        <PersonalLabel label="post" value={occupation}/>
                        <PersonalLabel label="language" value={language}/>
                        <ul className='social-media'>
                            <PersonalNetwork link="https://www.github.com/" icon={faGithub}/>
                            <PersonalNetwork link="https://www.facebook.com//" icon={faFacebook}/>
                            <PersonalNetwork link="https://www.instagram.com/" icon={faInstagram}/>
                            <PersonalNetwork link="https://www.youtube.com/" icon={faYoutube}/>
                        </ul>
                    </div>
                    {
                        userState && <button className="btn" onClick={Edit}>Editar</button>
                    }
                </div>
            </div>
        </>
    );
};

export default PersonalCard;