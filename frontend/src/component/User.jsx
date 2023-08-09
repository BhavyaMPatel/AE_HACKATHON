import React, { useEffect, useState } from 'react'

export default function User() {
    const [Data,SetData]=useState([])

    useEffect(() =>{
        fetch(`http://localhost:4000/users`)
        .then(response => response.json())
        .then(data => {
        SetData(data);
        });
    },[])

return (
    <>
        <div className='m-2 font-Poppins'>Users Information</div>
            <div>
            {Array.isArray(Data.User)?Data.User.map(item => (
                <div key={item._id} className='bg-blue-100 m-2 p-2 rounded-md font-Poppins text-blue-500 hover:bg-blue-200'>
                UserId - {item.userid}<br/>
                Type   - {item.type}
                </div>
            )):null}
        </div>
    </>
    )
}
