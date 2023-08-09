import React, { useEffect, useState } from 'react'
import ImageCom from './ImageCom';
export default function Approve({UserId}) {
const [Data,SetData] = useState([]);
const [userid,Setuserid] = useState('');
const [name,Setname] = useState('');
useEffect(()=>{
    fetch('http://localhost:4000/querydata')
    .then(response => response.json())
    .then(data => {
    // Update the options state
    SetData(data);
    });
},[]);

function setfun(userid,name){
    console.log(userid)
    Setuserid(userid);
    Setname(name);
    image.showModal();
}

async function Approve(userid){
    const responce = await fetch('http://localhost:4000/approve',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userid,
        }),
    })
    const data=await responce.json()
    console.log(data)
}

async function Reject(userid){
    const responce = await fetch('http://localhost:4000/reject',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userid,
        }),
    })
    const data=await responce.json()
    console.log(data)
}

return (
    <>
    <div className='font-Poppins text-xl m-2'>Upcoming Requests</div>
    <div>
        {Array.isArray(Data.Post)?Data.Post.map(item => (
            item.status=="active" ?
                    <>
                    <div key={item._id} className='m-2 font-Poppins text-base border-2 border-solid border-blue-200 rounded-md p-2 hover:shadow-slate-100 hover:shadow-xl bg-blue-50'>
                        Name - {item.userid}<br/>
                        Reason - {item.description}
                        <br/> <button className='' onClick={()=>{setfun(item.userid,item.name)}} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg></button>
                    </div>
                    <button onClick={()=>{Approve(item.userid)}} className='m-2 bg-green-500 font-Poppins text-white p-2 rounded-md hover:bg-green-600'>Approve</button>
                    <button onClick={()=>{Reject(item.userid)}} className='m-2 bg-red-500 font-Poppins text-white p-2 rounded-md hover:bg-red-600'>Reject</button>
                    </>:null
                )):null}
    </div>

    <dialog id="image">
        <div className='flex justify-end m-2'>
                <button onClick={()=>{image.close()}} className='transition-all delay-1000 duration-150'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
        </div>
        <ImageCom userid={userid} name={name}/>
    </dialog>


    </>
  )
}
