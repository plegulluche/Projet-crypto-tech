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
import Dashboard from './pages/Dashboard';
import Articles from './pages/Articles';
import Preferences from './pages/Preferences';

function App() {
  // const [theme, setTheme] = useState('light');
  const [theme, setTheme] = useState(localStorage.getItem("theme"))
  const [isLogged, setIsLogged] = useState(false)
  const [language, setLanguage] = useState(localStorage.getItem("language"))

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("language", 1)
      setLanguage(1)
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("language", 0)
      setLanguage(0)
    }
  }, [theme]);

  return (
    <BrowserRouter>
      {isLogged ? <NavbarOnline setTheme={setTheme} language={language} /> : <NavbarOffline setTheme={setTheme} language={language} />}
      <Routes>
          <Route path='/' element={<Home language={language} />} />
          <Route path='/register' element={isLogged ? <Navigate to="/" /> : <Register language={language} />} />
          <Route path='/login' element={isLogged ? <Navigate to="/" /> : <Login language={language}/>} />
          <Route path="*" element={<NoPage language={language} />} />
          {/* Protected Routes starts from here */}
          <Route element={<ProtectedRoutes auth={isLogged}/>}>
            <Route path='/dashboard' element={<Dashboard language={language} />} />
            <Route path='/articles' element={<Articles language={language} />} />
            <Route path='/preferences' element={<Preferences language={language} />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
