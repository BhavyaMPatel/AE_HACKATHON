import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import Navbar from '../component/Navbar';

export default function AdminPage() {
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
      if(user.type.localeCompare("Admin")!=0){ //Not An Admin Then
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
    <div>AdminPage</div>
    </>
  )
}
