import React from 'react'
import ApproveNumber from './ApproveNumber'
import RejectNumber from './RejectNumber'

export default function DashBoard() {
  return (
    <>
    <div className='font-Poppins m-2'>DashBoard</div>
    <div className='flex justify-start m-2 space-x-2'>
        <ApproveNumber/>
        <RejectNumber/>
    </div>
    </>

  )
}
