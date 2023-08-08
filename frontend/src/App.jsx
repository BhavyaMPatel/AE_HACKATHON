import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/Navbar'
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import RequestPage from './services/RequestPage';
import AdminPage from './services/AdminPage';
import ApprovalPage from './services/ApprovalPage';
function App() {

  return (
    <>
      <Router>
        <Routes>
                <Route exact path='/' element={<><Navbar User={"WelCome"}/>< HomePage /></>}></Route>
                <Route exact path='/Login' element={< Login />}></Route>
                <Route exact path='/Requester' element={<>< RequestPage/></>}></Route>
                <Route exact path='/Admin' element={<>< AdminPage/></>}></Route>
                <Route exact path='/Approval' element={<><ApprovalPage/></>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App


//Todo Left
//Use Cookie Identify User Type
//Store Identity