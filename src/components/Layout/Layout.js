import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import './Layout.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Layout = props => {
    const user = useSelector(state => state.user.user);
    return (
        <>
            <header className='main-header'>
                <div className='header-content'>
                    <NavLink to='/music'>
                        <div className='logo-box'>
                            <FontAwesomeIcon id='logo' icon={faPlayCircle} size='5x' />
                            <h2 className='logo-title'>Music App</h2>
                        </div>
                    </NavLink>
                    <div className='users-menu'>
                        {user == null ?
                            <>
                                <NavLink to='/user/register'>Sign Up</NavLink>
                                <NavLink to='/user/login'>Sign In</NavLink>
                            </> :
                            <>
                                <NavLink to='/trackHistory'>Track History</NavLink>
                            </>}

                    </div>
                </div>



            </header>
            {props.children}
        </>
    );
};

export default withRouter(Layout);