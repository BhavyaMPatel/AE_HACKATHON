import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import Navbar from '../component/Navbar';

export default function RequestPage() {

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
      if(user.type.localeCompare("Requester")!=0){ //Not An Requester
        localStorage.removeItem('token')
        window.location.href='/'
      }
    }else{
      window.location.href='/'
    }
  },[]);

  return (
    <>
    <Navbar User={User} />
    <div className='mt-20 font-Poppins'>requester come</div>
    </>
  ) 
}
