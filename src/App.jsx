import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./routes/home";
import { ThemeProvider } from '@mui/material';
import { DarkTheme } from './shared/theme';

function App() {

  return (
    <ThemeProvider theme={DarkTheme}>
      <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
