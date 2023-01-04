import React, { Component } from 'react';
import './styles/Register.css'
import GoogleButton from 'react-google-button'
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.textLangage = [
            ["REGISTER", "Email adress :", "Password :", "RePassword :", "Create Account"],
            ["S'INSCRIRE", "Adresse mail :", "Mot de passe :", "Re Mot de passe", "S'inscrire"],
        ];
        this.state = ({ show: false })
        this.buttonClick = this.buttonClick.bind(this)
        this.setShow = this.setShow.bind(this)
    }

    setShow(show){
        this.setState({show})
    }

    buttonClick() {
        let email = document.getElementById("email").value;
        let firstname = document.getElementById("firstname").value;
        let lastname = document.getElementById("lastname").value;
        let password = document.getElementById("password").value;
        let repassword = document.getElementById("repassword").value;
        if (password !== repassword) {
            this.setState({ show: true });
        }
        axios.post("http://localhost:4000/api/v1/users/signup", {
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password,
            "passwordConfirm": repassword
          }).then(function (response) {
            console.log(response.data.message)
            window.location = '/login';
          }).catch(function (error) {
            console.log(error.response.data.message)
          })
    };

    render() {
        return (
            <div className="registerform">
                <div className="top-form">
                    <h1 className="register-title">REGISTER</h1>
                    <div className="google-btn">
                        <GoogleButton
                            onClick={() => { console.log('Google button clicked') }}
                        />
                    </div>
                </div>
                {
                this.state.show === true
                    ?
                    <Alert variant="danger" onClose={this.setShow} dismissible>
                        <Alert.Heading>It seems your passwords are not identicals</Alert.Heading>
                    </Alert>
                    :
                    <p></p>
                }
                <div className="bottom-form">
                    <div className="email-input">
                        <p className="email-text">Email adress</p>
                        <input className="descr" type="email" name="email" id="email" />
                    </div>
                    <div className="password-input">
                        <p className="email-text">First Name</p>
                        <input className="descr" type="text" name="firstname" id="firstname" />
                    </div>
                    <div className="password-input">
                        <p className="email-text">Last Name</p>
                        <input className="descr" type="text" name="lastname" id="lastname" />
                    </div>
                    <div className="password-input">
                        <p className="password-text">Password</p>
                        <input className='descr' type="password" name="username" id="password" />
                        <p className="password-text">RePassword</p>
                        <input className='descr' type="password" name="username" id="repassword" />
                    </div>
                    <button className="validate-button" type="button" name="button" id="test" onClick={this.buttonClick}>Create Account</button>
                </div>
            </div>
        );
    }
};


export default Register;