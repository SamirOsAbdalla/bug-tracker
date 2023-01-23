import React from 'react';
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { LoginPage } from './components/LoginPage/LoginPage';
import { useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
function App() {

  const isLoggedIn = useAppSelector(state => state.loginStatus.isUserLoggedIn)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={
          isLoggedIn ?
            <>
              <Sidebar />
            </> :
            <Navigate to="/login" />
        } />
        <Route path="/" element={
          isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
        } />
        <Route path="login" element={<LoginPage formType='login' />} />
        <Route path="signup" element={<LoginPage formType='signup' />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
