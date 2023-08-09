import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import Navbar from '../component/Navbar';
import Workflow from '../component/Workflow';
import ApproveHistory from '../component/ApproveHistory';
import DashBoardC from '../component/DashBoard';
export default function AdminPage() {
  const [User,SetUser]=useState('Welcome');
  const [WorkFlow,SetWorkFlow]=useState(true);
  const [DashBoard,SetDashBoard]=useState(false);
  const [History,SetHistory]=useState(false);
  
  useEffect(() => {
    const token =localStorage.getItem('token');
    if(token){
      const user =jwtDecode(token)
      SetUser(user.userid);
      if(!user){
        localStorage.removeItem('token')
        window.location.href='/'
      }
      if(user.type.localeCompare("Admin")!=0){ //Not An Admin Then
        localStorage.removeItem('token')
        window.location.href='/'
      }
    }else{
      window.location.href='/'
    }
  },[]);

  function SetWork(){
    SetWorkFlow(true);
    SetDashBoard(false);
    SetHistory(false);
  }
  function SetDash(){
    SetWorkFlow(false);
    SetDashBoard(true);
    SetHistory(false);
  }
  function SetHist(){
    SetWorkFlow(false);
    SetDashBoard(false);
    SetHistory(true);
  }

  return (
    <>
    <Navbar User={User}/>
    <div className='mt-20 m-2 font-Poppins'></div>
    <div className='p-2 flex flex-wrap font-Poppins justify-center items-center '>
        <div onClick={()=>{SetWork()}} className='p-2 w-1/3 flex justify-center items-center font-Poppins border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 border-r-white'>
          Create New WorkFlow
        </div>
        <div onClick={()=>{SetDash()}} className='p-2 w-1/3 flex justify-center items-center font-Poppins  border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 border-r-white'>
          View History
        </div>
        <div onClick={()=>{SetHist()}} className='p-2 w-1/3 flex justify-center items-center font-Poppins  border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 '>
          DashBoard
        </div>
    </div>

     {WorkFlow ? <Workflow/> : null}
     {DashBoard ? <ApproveHistory/> : null}
     {History ? <DashBoardC/> : null} 
    
    </>
  )
}
