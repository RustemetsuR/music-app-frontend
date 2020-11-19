import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './Layout.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions/userActions';


const Layout = props => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const logout = () =>{
        dispatch(logoutUser());
    };
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
                        {user.length === 0 ?
                            <>
                                <NavLink to='/user/register'>Sign Up</NavLink>
                                <NavLink to='/user/login'>Sign In</NavLink>
                            </> :
                            <>
                                <h4><FontAwesomeIcon icon={faUser} />Hello , {user.username}!</h4>
                                <NavLink to='/trackHistory'>Track History</NavLink>
                                <NavLink to='/music' onClick={logout}>Log Out</NavLink>
                            </>}

                    </div>
                </div>



            </header>
            {props.children}
        </>
    );
};

export default withRouter(Layout);