import React, { useState } from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Switch from "react-switch";
import axios from 'axios';

function NavbarOnline({ setTheme, language }) {

    const [checked, setChecked] = useState(false)
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")

    React.useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setChecked(true);
        } else {
            setChecked(false);
        }
        const token = localStorage.getItem("jwt");
        axios.get("http://localhost:4000/api/v1/users/me", { headers: { "Authorization": `Bearer ${token}` } })
            .then(function (response) {
                const userInfos = response.data.data.data;
                setFirstName(userInfos.firstname.charAt(0).toUpperCase() + userInfos.firstname.slice(1));
                setLastName(userInfos.lastname.charAt(0).toUpperCase() + userInfos.lastname.slice(1));
                console.log(userInfos)
            })
            .catch(function (error) {
                console.log(error)
                localStorage.setItem("logged", "");
                localStorage.setItem("jwt", "");
                window.location = '/';
            })
    }, []);

    const handleChange = () => {
        setChecked(checked);
        if (checked === false) {
            setTheme("dark");
            console.log("dark");
        } else {
            setTheme("light");
            console.log("light");
        }
    };

    const logout = () => {
        localStorage.setItem("logged", "");
        localStorage.setItem("jwt", "");
        window.location = '/';
    }

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
                            checked={checked}
                            onChange={() => handleChange()}
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
                        <Nav.Link style={{ color: "#e5e5e5" }} href="/preferences">{firstname} {lastname}</Nav.Link>
                        <Nav.Link style={{ color: "#e5e5e5" }} onClick={() => logout()}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarOnline;
