import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<HomePage/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
