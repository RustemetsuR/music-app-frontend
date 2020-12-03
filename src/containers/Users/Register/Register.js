import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../store/actions/userActions';
import './Register.css';
import '../Login/Login.css';
import FacebookLogin from '../../../components/FacebookLogin/FacebookLogin';

const Register = () => {
    const dispatch = useDispatch();

    const [registerData, setRegisterData] = useState({
        userName: '',
        password: '',
        image: '',
        displayName: '',
    });

    const userNameOnChange = event => {
        const value = event.target.value;
        const registerDataCopy = { ...registerData, userName: value }
        setRegisterData(registerDataCopy);
    };

    const dataOnChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        const data = {
            ...registerData,
            [name]: value,
        };
        console.log(registerData)
        setRegisterData(data);
    }

    const passwordOnChange = event => {
        const value = event.target.value;
        const registerDataCopy = { ...registerData, password: value }
        setRegisterData(registerDataCopy);
    };

    const registerSubmit = event => {
        event.preventDefault();
        let data;
        if (registerData.image === '') {
            data = {
                username: registerData.userName,
                password: registerData.password,
                displayName: registerData.displayName,
            };
        }else{
            data = {
                username: registerData.userName,
                password: registerData.password,
                displayName: registerData.displayName,
                image: registerData.image
            };
        }

        dispatch(register(data));
    };

    return (
        <div className='register-box user-sign-boxes'>
            <h2>Create your account</h2>
            <div>
                <form onSubmit={registerSubmit}>
                    <input placeholder='Username' name='userName' onChange={dataOnChange} value={registerData.userName} required />
                    <input placeholder='Password' name='password' type='password' onChange={dataOnChange} value={registerData.password} required />
                    <input placeholder='Image' name='image' onChange={dataOnChange} value={registerData.image} />
                    <input placeholder='Display Name' name='displayName' onChange={dataOnChange} value={registerData.displayName} />
                    <button type='submit'>Sign Up</button>
                </form>
                <FacebookLogin />
            </div>
        </div>
    );
};

export default Register;