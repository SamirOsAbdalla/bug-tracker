import React from 'react';
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Routes, Route, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
      </div>
      <Routes>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
