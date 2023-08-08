import React from 'react'
import HomeCom from '../component/HomeCom'
import Login from './Login'

export default function HomePage() {

function LoginFun(){
    LoginModel.showModal();
}
function CloseFun(){
    LoginModel.close();
}

return (
    <>
    <HomeCom LoginFun={LoginFun}/>
    <dialog id="LoginModel" className='rounded-sm'>
        <Login CloseFun={CloseFun}/>
    </dialog>
    </>
  )
}
