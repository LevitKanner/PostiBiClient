import React from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useJwt} from "react-jwt";

const Protected = ({children}) => {
    const accessToken = localStorage.getItem("access");
    const {isExpired} = useJwt(accessToken);
    const location = useLocation();

    if (!accessToken || isExpired) {
        return <Navigate to="login" state={{from: location}} replace/>
    }
    return <Outlet/>
};

export default Protected;