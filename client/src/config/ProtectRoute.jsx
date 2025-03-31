import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ admin = false, isAuth, children, redirect = "/" }) => {
    if(admin && isAuth){
        return children?children:<Outlet/>
    }
    if(!isAuth){
        return <Navigate to={redirect}/>
    }
    if(isAuth && !admin){
        return children?children:<Outlet/>
    }
}

export default ProtectRoute;
