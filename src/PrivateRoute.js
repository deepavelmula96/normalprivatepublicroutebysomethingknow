import React from 'react'
import { isLoggedIn } from './helper'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({Component:Component, ...rest}) => {
 if(isLoggedIn()){
    return <Component {...rest}/>;
 }
 return <Navigate to="/signin"/>;
}

export default PrivateRoute     