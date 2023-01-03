import React, { Component } from 'react';
import "./styles/Login.css";
import GoogleButton from 'react-google-button'
import Alert from 'react-bootstrap/Alert';
import axios from 'axios'

function Login(props) {

    const buttonClick = () => {
        let email = document.getElementById("email").value;
        // console.log(email);
        let password = document.getElementById("password").value;
        // console.log(password);
        // if () {                                      //verif si le login s'est bien passé
        //     this.setState({ show: true });
        // }
        axios.post("http://localhost:4000/api/v1/users/login", {
            "email": email,
            "password": password,
        }).then(function (response) {
            console.log(response)
            localStorage.setItem("jwt", response.data.token)
            localStorage.setItem("logged", true)
            props.setIsLogged(true)
            window.location = '/';
        }).catch(function (error) {
            console.log(error)
        })
    };

    return (
        <div className="loginform">
            <div className="top-form">
                <h1 className="login-title">Login</h1>
                <div className="google-btn">
                    <GoogleButton
                        onClick={() => { console.log('Google button clicked') }}
                    />
                </div>
            </div>
            <div className="bottom-form">
                <div className="email-input">
                    <p className="email-text">Email Adress</p>
                    <input className="descr" type="email" name="email" id="email" />
                </div>
                <div className="password-input">
                    <p className="password-text">Password</p>
                    <input className='descr' type="password" name="username" id="password" />
                </div>
                <button className="validate-button" type="button" name="button" id="test" onClick={buttonClick}>Login</button>
            </div>
        </div>
    );
}

export default Login;