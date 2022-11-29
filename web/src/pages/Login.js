import React, { Component } from 'react';
import "./styles/Login.css";
import GoogleButton from 'react-google-button'

class Login extends Component {
    constructor(props) {
        super(props);
        this.textLangage = [
            ["LOGIN", "Email adress :", "Password :", "Connect"],
            ["CONNEXION", "Adresse mail :", "Mot de passe :", "Connexion"],
        ];
    }

    buttonClick() {
        let email = document.getElementById("email" ).value;
        console.log(email);
        let password = document.getElementById("password").value;
        console.log(password);
    };

    render() { 
        return (
            <div className="loginform">
                <div className="top-form">
                    <h1 className="login-title">{this.textLangage[this.props.language][0]}</h1>
                <div className="google-btn">
                <GoogleButton
                    onClick={() => { console.log('Google button clicked') }}
                />
                </div>
               </div>
                <div className="bottom-form">
                    <div className="email-input">
                        <p className="email-text">{this.textLangage[this.props.language][1]}</p>
                        <input className="descr" type="email" name="email" id="email"/>
                    </div>
                    <div className="password-input">
                        <p className="password-text">{this.textLangage[this.props.language][2]}</p>
                        <input className='descr' type="password" name="username" id="password"/>
                    </div>
                    <button className="validate-button" type="button" name="button" id="test" onClick={this.buttonClick}>{this.textLangage[this.props.language][3]}</button>
                </div>
            </div>
        );
    }
}
 
export default Login;