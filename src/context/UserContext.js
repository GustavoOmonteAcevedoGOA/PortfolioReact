import React from 'react';
import { createContext, useState } from 'react';
const UserContext = createContext();
const isLogInLocal = localStorage.getItem('isLogIn');
const InitialUser=(isLogInLocal=='true')?true:null;

const UserProvider = ({children}) => {
    const [user, setUser ] = useState(InitialUser);
    const login = ()=>{
        setUser(true);
    };
    const logout = ()=>{
        setUser(null);
    };
    const data = {user, login, logout};
    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>);
};

export {UserProvider};
export default UserContext;