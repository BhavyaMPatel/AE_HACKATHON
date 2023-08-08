import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import RequestPage from './services/RequestPage';
function App() {

  return (
    <>
      <Router>
        <Routes>
                <Route exact path='/' element={<><Navbar/>< HomePage /></>}></Route>
                <Route exact path='/Login' element={< Login />}></Route>
                <Route exact path='/Requester' element={<><Navbar/>< RequestPage/></>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App


//Todo Left
//Use Cookie Identify User Type
//Store Identity