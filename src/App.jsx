import React from 'react';
import Home from './Pages/UserPanel/Home'
import About from './Pages/UserPanel/About'
import Job from "./Pages/UserPanel/Jobs";
import JobList from './Pages/UserPanel/JobList'
import Post from './Pages/UserPanel/PostJob'
import Login from './Pages/UserPanel/Login'
import Register from './Pages/UserPanel/Register'
import Reset from './Pages/UserPanel/Reset'
import Admin from './Pages/AdminPanel/Admin'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Layouts/Header/Index'
import Error from './Pages/UserPanel/ErrorPage'
import './App.css'
// import Header from './Layouts/Header/Header'

import {Footer} from './Layouts/Footer/Index'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      
      <ToastContainer/>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='job/:id' element={<Job/>}/>
          <Route path='job' element={<JobList/>}/>
          <Route path='postjob' element={<Post/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='reset' element={<Reset/>}/>
          <Route path='/*' element={<Error/>}/>

          <Route path='/admin' element={<Admin/>}/>
         
          
        
        </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
