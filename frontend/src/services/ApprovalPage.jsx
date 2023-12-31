import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import Navbar from '../component/Navbar';
import Approve from '../component/Approve';
import ApproveHistory from '../component/ApproveHistory';

export default function ApprovalPage() {
  const [User,SetUser]=useState('Welcome');
  const [Request,SetRequest]=useState(true);

  useEffect(() => {
    const token =localStorage.getItem('token');
    if(token){
      const user =jwtDecode(token)
      SetUser(user.userid);
      if(!user){
        localStorage.removeItem('token')
        window.location.href='/'
      }
      if(user.type.localeCompare("Approver")!=0){ //Not An Approver
        localStorage.removeItem('token')
        window.location.href='/'
      }
    }else{
      window.location.href='/'
    }
  },[]);

  function SetRequestValue(){
    SetRequest(true);
  }

  function UnSetRequest(){
    SetRequest(false);
  }

  return (

    <>
    <Navbar User={User}/>
    <div className='p-2 flex flex-wrap font-Poppins justify-center items-center mt-20'>
        <div onClick={()=>{SetRequestValue()}} className='p-2 w-1/2 flex justify-center items-center font-Poppins border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 border-r-white'>
            Upcoming Request
        </div>
        <div onClick={()=>{UnSetRequest()}} className='p-2 w-1/2 flex justify-center items-center font-Poppins  border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 '>
            Past History
        </div>
    </div>

    {Request ? <Approve/> : <ApproveHistory/>}


    </>
  )
}
