import React from 'react'
export default function Navbar({User}) {

  async function Navigation(){
    const menu=document.querySelector("#menu");
    menu.classList.toggle('hidden');
  }

  function LogoutFun(){
    localStorage.removeItem('token');
    window.location.reload();
  }

  return (
    <>
    <nav className="shadow-md border-gray-100 border-b-2 flex flex-wrap justify-start items-center md:justify-end  w-full py-4 md:p-2  text-gray-700  fixed z-0 opacity-90 bg-slate-50 top-0">
        <button onClick={Navigation}>     
            <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="justify-start m-2 h-6 w-6 cursor-pointer md:hidden block"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        <div className="hidden w-full md:flex md:items-center md:w-auto font-thin" id="menu">
            <ul className=" m-3 pt-4 text-xl gap-0 text-black md:flex md:justify-between md:pt-0 md:m-0 ">
                <li>
                    <a className="md:p-4 py-2 block font-Inter text-blue-500 font-thin " href="/">{User}</a>
                </li>
                <li>
                    <a onClick={LogoutFun} className="md:p-4 py-2 block hover:text-blue-400 text-blue-500 font-Inter font-thin" href="#">Logout</a>
                </li>
            </ul>
        </div>

    </nav>
    </>
  )
}
