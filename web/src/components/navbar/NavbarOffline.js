import React, { Component } from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Switch from "react-switch";

class NavbarOffline extends Component {
    constructor() {
        super();
        if (localStorage.getItem("theme") === "dark") {
            this.state = { checked: true };
        } else {
            this.state = { checked: false };
        }
        this.textLangage = [
            ["Home", "Login", "Register"],
            ["Accueil", "Connection", "S'inscrire"],
        ];
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
        if (this.state.checked === false) {
            this.props.setTheme("dark");
            console.log("dark");
        } else {
            this.props.setTheme("light");
            console.log("light");
        }
    };


    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="nav">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={require('./logo_small.png')}
                            width="200"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{ color: "#e5e5e5" }} href="/">Home</Nav.Link>
                            <Nav.Link style={{ color: "#e5e5e5" }} href="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link style={{ color: "#e5e5e5" }} href="/articles">Articles</Nav.Link>
                        </Nav>
                        <Nav>
                            <Switch
                                checked={this.state.checked}
                                onChange={this.handleChange}
                                onColor="#152538"
                                onHandleColor="#1C3C65"
                                handleDiameter={30}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={48}
                                className="switch"
                                id="material-switch"
                            />
                            <Nav.Link style={{ color: "#e5e5e5" }} href="/login">Login</Nav.Link>
                            <Nav.Link style={{ color: "#e5e5e5" }} href="/register">Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarOffline;
