import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const PublicRoute = (props) => {
    const { isLogged } = useAuth()

    if (isLogged()) return <Navigate to={routes.projects} />

    return ( <Outlet {...props} /> );
}

export default PublicRoute;
