import React, { useEffect, useMemo } from 'react';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
    console.log('Link', Link)
    console.log('children', useMemo)
    return (
        <>
            <Navigation />
            {children}
        </>
    )
}

export default Layout;
