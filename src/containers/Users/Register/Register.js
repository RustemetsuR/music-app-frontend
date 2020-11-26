import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../store/actions/userActions';
import './Register.css';
import '../Login/Login.css';

const Register = () => {
    const dispatch = useDispatch();

    const [registerData, setRegisterData] = useState({
        userName: '',
        password: '',
    });

     const userNameOnChange = event =>{
         const value = event.target.value;
         const registerDataCopy = {...registerData, userName: value}
         setRegisterData(registerDataCopy);
     };

     const passwordOnChange = event =>{
        const value = event.target.value;
        const registerDataCopy = {...registerData, password: value}
        setRegisterData(registerDataCopy);
    };

    const registerSubmit = event =>{
       event.preventDefault();
        const data = {
            username: registerData.userName,
            password: registerData.password,
        };
        dispatch(register(data));
    };

    return (
        <div className='register-box user-sign-boxes'>
            <h2>Create your account</h2> 
            <div>
                <form onSubmit={registerSubmit}>
                    <input placeholder='Username' onChange={userNameOnChange} value={registerData.userName} required/>
                    <input placeholder='Password' type='password' onChange={passwordOnChange} value={registerData.password} required/>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Register;