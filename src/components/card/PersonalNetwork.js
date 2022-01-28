import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const PersonalNetwork = ( { link, icon } ) => {
    return (
        <li>
            <a href={link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={ icon } />
            </a>
        </li>
    );
};

export default PersonalNetwork;
