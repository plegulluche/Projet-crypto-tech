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
  const [isLogged, setIsLogged] = useState(true)

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);

  return (
    <BrowserRouter>
      {isLogged ? <NavbarOnline setTheme={setTheme} /> : <NavbarOffline setTheme={setTheme} />}
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={isLogged ? <Navigate to="/" /> : <Register />} />
          <Route path='/login' element={isLogged ? <Navigate to="/" /> : <Login />} />
          <Route path="*" element={<NoPage />} />
          {/* Protected Routes starts from here */}
          <Route element={<ProtectedRoutes auth={isLogged}/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/preferences' element={<Preferences />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
