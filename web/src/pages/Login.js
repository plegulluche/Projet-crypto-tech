import React, { Component } from 'react';
import "./styles/Login.css";
import GoogleButton from 'react-google-button'
import Alert from 'react-bootstrap/Alert';

class Login extends Component {
    constructor(props) {
        super(props);
        this.textLangage = [
            ["LOGIN", "Email adress :", "Password :", "Connect"],
            ["CONNEXION", "Adresse mail :", "Mot de passe :", "Connexion"],
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
        console.log(email);
        let password = document.getElementById("password").value;
        console.log(password);
        // if () {                                      //verif si le login s'est bien passé
        //     this.setState({ show: true });
        // }
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
                        <p className="email-text">{this.textLangage[this.props.language][1]}</p>
                        <input className="descr" type="email" name="email" id="email" />
                    </div>
                    <div className="password-input">
                        <p className="password-text">{this.textLangage[this.props.language][2]}</p>
                        <input className='descr' type="password" name="username" id="password" />
                    </div>
                    <button className="validate-button" type="button" name="button" id="test" onClick={this.buttonClick}>{this.textLangage[this.props.language][3]}</button>
                </div>
            </div>
        );
    }
}

export default Login;