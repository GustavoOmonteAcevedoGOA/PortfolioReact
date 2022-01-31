import React, { useContext, useEffect, useState } from 'react';
import { LinkToJsonServer } from '../../Api/ConnectionToJsonServer';
import UserContext from '../../context/UserContext';
import './app.css';

const Administrator = () => {
    const [data,setData]= useState([]);
    const [nameInput,setNameInput]= useState('');
    const [passwordInput,setPasswordInput]= useState('');
    const { user,login,logout } = useContext(UserContext);
    function handleChangeName(e) {
        setNameInput(e.target.value);
    }
    function handleChangePassword(e) {
        setPasswordInput(e.target.value);
    }
    let url=`${LinkToJsonServer}admin`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(admin => {
                setData(admin);
            });
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (data) {
            if (nameInput === data.user && passwordInput === data.password) {
                login();
                localStorage.setItem('isLogIn', 'true');
            }
            else{
                logout();
                localStorage.setItem('isLogIn', 'false');
            }
        }else{
            console.log('User information not found ');
        }
    }
    
    return (
        <section className="contact" id="contact">
            <h1 className="heading">
                <i className="fas fa-id-badge"></i>
                <span>I am a </span>
                Administrator
            </h1>
            <div className="row">
                <div className="content">
                    <h3 className="title">Login</h3>
                    <div className="info">
                        <h3> <i className="fas fa-map-marker-alt"></i></h3>
                        <h3> <i className="bx bx-mail-send"></i></h3>
                        <h3> <i className="bx bxl-whatsapp"></i></h3>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="name"
                        className="box"
                        name="name"
                        onChange={ handleChangeName }/>
                    <input type="password"
                        placeholder="password"
                        className="box"
                        name="password"
                        onChange={ handleChangePassword }/>
                    {user?
                        <button type="submit" className="btn" name="enviar">
                        Logout<i className="fas fa-paper-plane"></i>
                        </button>:
                        <button type="submit" className="btn" name="enviar">
                        Login<i className="fas fa-paper-plane"></i>
                        </button>}
                </form>
            </div>
        </section>
    );
};

export default Administrator;
