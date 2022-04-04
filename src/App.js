import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import React from 'react';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
