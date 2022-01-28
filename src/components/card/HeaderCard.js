import React from 'react';
const HeaderCard = ({ name, occupation}) => {

    return (
        <div className="user">
            <img
                src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                alt="avatar"
            />
            <h3 className="name">{name}</h3>
            <p className="post">{occupation}</p>
        </div>
    );
};

export default HeaderCard;
