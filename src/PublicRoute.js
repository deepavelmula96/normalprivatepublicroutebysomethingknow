import React from 'react'
import { isLoggedIn } from './helper'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({Component:Component, ...rest}) => {
 if(isLoggedIn()){
    return <Navigate to="/dashboard"/>;
 }
 return <Component {...rest} />;
}

export default PublicRoute     