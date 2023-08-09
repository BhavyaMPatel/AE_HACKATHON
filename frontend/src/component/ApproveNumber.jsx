import React, { useEffect, useState } from 'react'

export default function ApproveNumber() {

  const [approveNumber, setApproveNumber] = useState(0)

  useEffect(() =>{
    fetch(`http://localhost:4000/approvenumber`)
    .then(response => response.json())
    .then(data => {
    setApproveNumber(data);
    });
  },[])

return (
    <>
        <div className='justify-center items-center bg-green-300 w-1/6 rounded-md p-2'>
            <div className='font-Poppins flex justify-center items-center text-green-600'>
                Total Number Of Approved Requests
            </div>
            <div className='flex justify-start items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className='font-Poppins text-green-600'>{approveNumber.count}</span>
            </div>
        </div>
    </>
  )
}
