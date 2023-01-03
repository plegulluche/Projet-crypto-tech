import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarOffline from './components/navbar/NavbarOffline';
import NavbarOnline from './components/navbar/NavbarOnline';
import Home from './pages/Home.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import NoPage from './pages/NoPage.js'
import ProtectedRoutes from './components/routes/ProtectedRoutes.js';
import Index from './pages/dashboard';
import Articles from './pages/Articles';
import Preferences from './pages/Preferences';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme")) //faire une verification si user connecté pour recup dans localstorage ou la db
    const [isLogged, setIsLogged] = useState(localStorage.getItem("logged")) //appeler le back pour vérifier si connecté
    const [language, setLanguage] = useState(localStorage.getItem("language"));
    if (document.documentElement.getAttribute("data-theme") === null) {
        localStorage.setItem("language", 0)
    }
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("language", 1)
            localStorage.setItem("theme", "dark")
            setLanguage(1)
        } else {
            localStorage.setItem("theme", "light")
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("language", 0)
            setLanguage(0)
        }
    }, [theme]);

    return (
        <BrowserRouter>
            {isLogged === "true" ? <NavbarOnline setTheme={setTheme} language={language} /> : <NavbarOffline setTheme={setTheme} language={language} />}
            <Routes>
                <Route path='/' element={<Home language={language} isLogged={isLogged} />} />
                <Route path='/register' element={isLogged === "true" ? <Navigate to="/" /> : <Register language={language} />} />
                <Route path='/login' element={isLogged === "true" ? <Navigate to="/" /> : <Login setIsLogged={setIsLogged} isLogged={isLogged} />} />
                <Route path='/dashboard' element={<Index language={language} isLogged={isLogged} />} />
                <Route path='/articles' element={<Articles language={language} isLogged={isLogged} />} />
                <Route path="*" element={<NoPage language={language} />} />
                {/* Protected Routes starts from here */}
                <Route element={<ProtectedRoutes auth={isLogged} />}>
                    <Route path='/preferences' element={<Preferences language={language} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
