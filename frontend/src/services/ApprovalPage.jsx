import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import Navbar from '../component/Navbar';

export default function ApprovalPage() {
  const [User,SetUser]=useState('Welcome');

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

  return (
    <>
    <Navbar User={User}/>
    <div className='p-2 flex flex-wrap font-Poppins justify-center items-center mt-20'>
        <div onClick={()=>{SetTicketValue()}} className='p-2 w-1/2 flex justify-center items-center font-Poppins border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 border-r-white'>
            Upcoming Request
        </div>
        <div onClick={()=>{UnSetTicket()}} className='p-2 w-1/2 flex justify-center items-center font-Poppins  border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 '>
            Past History
        </div>
    </div>


    </>
  )
}
