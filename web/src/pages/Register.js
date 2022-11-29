import React, { Component } from 'react';
import './styles/Register.css'
import GoogleButton from 'react-google-button'

class Register extends Component {
    constructor() {
        super();
        this.textLangage = [
            ["REGISTER", "Email adress :", "Password :", "RePassword :" ,"Create Account"],
            ["S'INSCRIRE", "Adresse mail :", "Mot de passe :", "Re Mot de passe", "S'inscrire"],
        ];
        this.state = { verif: 0 }
    }

    buttonClick(){
        let email = document.getElementById("email").value;
        console.log(email);
        let password = document.getElementById("password").value;
        console.log(password);
        let repassword = document.getElementById("repassword").value;
        console.log(repassword);
        if (password !== repassword) {
            this.setState({ verif: 1 });
        } else {
            this.setState({ verif: 0 });
        }
    };

    render() {
        return (
            <div className="registerform">
                <div className="top-form">
                    <h1 className="register-title">{this.textLangage[this.props.language][0]}</h1>
                    <div className="google-btn">
                        <GoogleButton
                            onClick={() => { console.log('Google button clicked') }}
                        />
                    </div>
                </div>
                <div className="bottom-form">
                    <div className="email-input">
                        <p className="email-text">{this.textLangage[this.props.language][1]}</p>
                        <input className="descr" type="email" name="email" id="email" />
                    </div>

                    <div className="password-input">
                        <p className="password-text">{this.textLangage[this.props.language][2]}</p>
                        <input className='descr' type="password" name="username" id="password" />
                        <p className="password-text">{this.textLangage[this.props.language][3]}</p>
                        <input className='descr' type="password" name="username" id="repassword" />
                    </div>
                    <button className="validate-button" type="button" name="button" id="test" onClick={this.testInput}>{this.textLangage[this.props.language][4]}</button>
                </div>
            </div>
        );
    }
};


export default Register;