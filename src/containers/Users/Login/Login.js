import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, usernameLoginValueOnChange, passwordLoginValueOnChange } from '../../../store/actions/userActions';
import './Login.css';

const Login = props => {
    const dispatch = useDispatch();
    const userNameValue = useSelector(state => state.user.userNameLoginValue);
    const passwordValue = useSelector(state => state.user.passwordLoginValue);

    const error = useSelector(state => state.user.error);

    useEffect(() => {

    }, [dispatch]);

    const userNameOnChange = event => {
        const value = event.target.value;
        dispatch(usernameLoginValueOnChange(value));
    };

    const passwordOnChange = event => {
        const value = event.target.value;
        dispatch(passwordLoginValueOnChange(value));
    };

    const loginSubmit = event => {
        event.preventDefault();
        const data = {
            username: userNameValue,
            password: passwordValue,
        };
        dispatch(login(data));
    };


    return (
        <div className='login-box user-sign-boxes'>
            <h2>Login</h2>
            {error ?
                <div>
                    {error.error}
                </div> : null}
            <form onSubmit={loginSubmit}>
                <input onChange={userNameOnChange} placeholder='Username' required value={userNameValue} />
                <input onChange={passwordOnChange} placeholder='Password' type='password' required value={passwordValue} />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;