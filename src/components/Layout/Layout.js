import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import './Layout.css';
import { NavLink } from 'react-router-dom';

const Layout = props => {
    return (
        <>
            <header className='main-header'>
                <NavLink to='/'>
                    <div className='logo-box'>
                        <FontAwesomeIcon id='logo' icon={faPlayCircle} size='5x' />
                        <h2 className='logo-title'>Music App</h2>
                    </div>
                </NavLink>
            </header>
            {props.children}
        </>
    );
};

export default Layout;