import React, { useState, useEffect } from 'react';
import "./styles/Login.css";
import GoogleButton from 'react-google-button'

const Login = () => {

    const testInput = () => {
        let email = document.getElementById("email" ).value;
        console.log(email);
        let password = document.getElementById("password").value;
        console.log(password);
    };

    return (
        <div className="loginform">
            <div className="top-form">
                <h1 className="login-title">LOGIN</h1>
            <div className="google-btn">
            <GoogleButton
                onClick={() => { console.log('Google button clicked') }}
            />
            </div>
           </div>
            <div className="bottom-form">
                <div className="email-input">
                    <p className="email-text">Email adress :</p>
                    <input className="descr" type="email" name="email" id="email"/>
                </div>

                <div className="password-input">
                    <p className="password-text">Password :</p>
                    <input className='descr' type="password" name="username" id="password"/>
                </div>
                <button className="test-button" type="button" name="button" id="test" onClick={() => testInput()}>Connect</button>
            </div>
        </div>
    );
};

export default Login;