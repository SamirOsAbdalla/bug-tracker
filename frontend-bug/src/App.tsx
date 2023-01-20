import React from 'react';
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { LoginPage } from './components/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <Sidebar />
      </div> */}
      <Routes>
        <Route path="login" element={<LoginPage formType='login' />} />
        <Route path="signup" element={<LoginPage formType='signup' />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
