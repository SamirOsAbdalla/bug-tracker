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
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
