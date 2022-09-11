import './App.css'
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
import { Footer } from './Layouts/Footer/Index'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VacancyAdmin from './Pages/AdminPanel/Pages/VacancyAdmin';
import CompanyAdmin from './Pages/AdminPanel/Pages/CompanyAdmin';
import CategoryAdmin from './Pages/AdminPanel/Pages/CategoryAdmin';
import CategoryAdd from './Pages/AdminPanel/CRUD/CategoryAdd';
import CompanyAdd from './Pages/AdminPanel/CRUD/CompanyAdd';
import VacancyAdd from './Pages/AdminPanel/CRUD/VacancyAdd';


function App() {

  return (
    <div className="App">

      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          {/* User Panel Pages */}
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='job/:id' element={<Job />} />
          <Route path='job' element={<JobList />} />
          <Route path='postjob' element={<Post />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='reset' element={<Reset />} />
          <Route path='/*' element={<Error />} />

          {/* Admin Panel Pages */}
          <Route path='/admin' element={<Admin />} />
          <Route path='/companyAdmin' element={<CompanyAdmin />} />
          <Route path='/vacancyAdmin' element={<VacancyAdmin />} />
          <Route path='/categoryAdmin' element={<CategoryAdmin />} />

          {/* Admin Panel CRUD Pages */}
          <Route path='admin/categoryAdd' element={<CategoryAdd />} />
          <Route path='admin/companyAdd' element={<CompanyAdd />} />
          <Route path='admin/vacancyAdd' element={<VacancyAdd />} />









        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
