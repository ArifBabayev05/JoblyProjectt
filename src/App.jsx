import React from 'react';
import Home from './Pages/Home'
import About from './Pages/About'
import Job from "./Pages/Jobs";
import JobList from './Pages/JobList'
import Post from './Pages/PostJob'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Reset from './Pages/Reset'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Layouts/Header/Index'
import Error from './Pages/ErrorPage'
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
          

          
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
