import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./routes/home";

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
