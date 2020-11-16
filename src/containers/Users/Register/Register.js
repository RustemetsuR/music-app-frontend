import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { passwordValueOnChange, register, userValueOnChange } from '../../../store/actions/userActions';
import './Register.css';
import '../Login/Login.css';

const Register = props => {
    const dispatch = useDispatch();
    const userNameValue = useSelector(state => state.user.userNameValue);
    const passwordValue = useSelector(state => state.user.passwordValue);
    const error = useSelector(state => state.user.error);

    useEffect(() => {

    }, [dispatch]);

     const userNameOnChange = event =>{
         const value = event.target.value;
         dispatch(userValueOnChange(value));
     };

     const passwordOnChange = event =>{
        const value = event.target.value;
        dispatch(passwordValueOnChange(value));
    };

    const registerSubmit = event =>{
       event.preventDefault();
        const data = {
            username: userNameValue,
            password: passwordValue,
        };
        dispatch(register(data));
        if(error != null){
            props.history.replace('/music');
        };
    };

    return (
        <div className='register-box user-sign-boxes'>
            <h2>Create your account</h2> 
            <div>
                <form onSubmit={registerSubmit}>
                    <input placeholder='Username' onChange={userNameOnChange} value={userNameValue} required/>
                    <input placeholder='Password' type='password' onChange={passwordOnChange} value={passwordValue} required/>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;