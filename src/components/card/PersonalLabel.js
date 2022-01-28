import React from 'react';

const PersonalLabel = ({label,value}) => {
    return (
        <h3>
            <span> {label} : </span> {value}
        </h3>
    );
};

export default PersonalLabel;
