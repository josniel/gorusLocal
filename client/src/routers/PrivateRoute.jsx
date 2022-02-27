import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

const PrivateRoute = ({hasRole: role, ...rest}) => {
    const location = useLocation()
    // console.log(location, 'location privateRoute')
    const { hasRole, isLogged } = useAuth()

    if (role && !hasRole(role)) return <Navigate to={routes.home} />

    if (!isLogged()) return <Navigate replace to={routes.login} state={{ from: location }} />

    return ( <Outlet {...rest} /> );
}

export default PrivateRoute;
