import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import Navbar from '../component/Navbar';
import CreateTicket from '../component/CreateTicket';
import CheckTicketStatus from '../component/CheckTicketStatus';

export default function RequestPage() {

  const [User,SetUser]=useState('Welcome');
  const [Ticket,SetTicket]=useState(true);
  
  useEffect(() => {
    const token =localStorage.getItem('token');
    if(token){
      const user =jwtDecode(token)
      SetUser(user.userid);
      if(!user){
        localStorage.removeItem('token')
        window.location.href='/'
      }
      if(user.type.localeCompare("Requester")!=0){ //Not An Requester
        localStorage.removeItem('token')
        window.location.href='/'
      }
    }else{
      window.location.href='/'
    }
  },[]);

  function SetTicketValue(){
    SetTicket(true);
  }

  function UnSetTicket(){
    SetTicket(false);
  }

  return (
    <>
    <Navbar User={User} />
    <div className='mt-20 font-Poppins text-xl ml-2'>WelCome Back {User}</div>

    <div className='p-2 flex flex-wrap font-Poppins justify-center items-center '>
        <div onClick={()=>{SetTicketValue()}} className='p-2 w-1/2 flex justify-center items-center font-Poppins border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 border-r-white'>
          Create Ticket
        </div>
        <div onClick={()=>{UnSetTicket()}} className='p-2 w-1/2 flex justify-center items-center font-Poppins  border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 '>
          Check Status
        </div>
    </div>
    {Ticket ? <CreateTicket UserId={User}/> : <CheckTicketStatus UserId={User}/>}
    </>
  ) 
}
