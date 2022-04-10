import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import AdvanceSearch from './Pages/AdvanceSearch'
import About from './Pages/About'
import LoginPage from './Pages/LoginPage';



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/Search/Advance' element = {<AdvanceSearch/>}/>
        <Route path='/AboutMe' element = {<About/>}/>
        <Route path='/User/Login' element = {<LoginPage/>}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
