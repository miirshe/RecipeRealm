import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About, Contact, EditProfile, Footer, Header, Home, Login, Recipe, Register } from './config.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <ToastContainer/>
      <Header/>
      <Routes>
        {/* public routes */}
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/recipe' element = {<Recipe/>}/>

        {/* private routes */}
        <Route path='/editProfile' element = {<EditProfile/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
