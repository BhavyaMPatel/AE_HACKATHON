import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Login from './pages/Login';
function App() {

  return (
    <>
      <Router>
        <Routes>
                <Route exact path='/' element={<><Navbar/>< HomePage /></>}></Route>
                <Route exact path='/Login' element={< Login />}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
