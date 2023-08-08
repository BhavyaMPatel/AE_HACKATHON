import React, { useEffect, useState } from 'react'

export default function CheckTicketStatus({UserId}) {

  const [Data, SetData] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend database
    fetch(`http://localhost:4000/uploadquery/${UserId}`)
        .then(response => response.json())
        .then(data => {
        // Update the options state
        SetData(data);
        });
  }, []);


  return (
    <>
    <div className='m-2 font-Poppins'>Check Your Request Status</div>

    <div className='m-2'>
      {Array.isArray(Data.Post)?Data.Post.map(item => (
        <div key={item._id} className='font-Poppins text-xl border-2 border-solid border-blue-200 rounded-md p-2 hover:p-3 bg-blue-50'>
          <div className=''>{item._id}</div>
          <div className=''>{item.description}</div>
          {item.status=="active" ? <div className='font-Poppins text-orange-400'>{item.status}</div>:<div className='font-Poppins text-green-400'>{item.status}</div>}
        </div>
            )):<div className='font-Poppins text-xl text-green-400'>No Active Request !</div>}
    </div>

    </>
  )
}
