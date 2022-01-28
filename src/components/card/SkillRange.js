import React from 'react';

export const SkillRange = ( { skillStyle }) => {
    return (<span className = {`circle ${skillStyle}`}></span>);
};

export const arSkill = () => {
    return [
        'full','full','full','full','full',
    ];
};