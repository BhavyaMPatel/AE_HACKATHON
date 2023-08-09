import React, { useEffect, useState } from 'react'

export default function RejectNumber() {
    const [RejectNumber, SetRejectNumber] = useState(0)

    useEffect(() =>{
      fetch(`http://localhost:4000/rejectnumber`)
      .then(response => response.json())
      .then(data => {
      SetRejectNumber(data);
      });
    },[])
    

return (
    <>
        <div className='justify-center items-center bg-red-300 w-1/6 rounded-md p-2'>
            <div className='font-Poppins flex justify-center items-center text-red-600'>
                Total Number Of Rejected Requests
            </div>
            <div className='flex justify-start items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className='font-Poppins text-red-600'>{RejectNumber.count}</span>
            </div>
        </div>
    </>
  )
}
