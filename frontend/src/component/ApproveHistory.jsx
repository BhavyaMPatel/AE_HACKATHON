import React, { useEffect, useState } from 'react'
import ImageCom from './ImageCom';

export default function ApproveHistory() {
    const [Data,SetData] = useState([]);
    const [Approve,SetApprove] = useState(true);

    useEffect(()=>{
        fetch('http://localhost:4000/querydata')
        .then(response => response.json())
        .then(data => {
        // Update the options state
        SetData(data);
        });
    },[]);

    function SetApproveValue(){
        SetApprove(true);
      }
    
      function UnSetValue(){
        SetApprove(false);
      }

return (
    <>
    <div className='m-2 font-Poppins text-lg'>History</div>

    <div className='p-2 flex flex-wrap font-Poppins justify-center items-center '>
        <div onClick={()=>{SetApproveValue()}} className='p-2 w-1/2 flex justify-center items-center font-Poppins border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 border-r-white'>
          Approved
        </div>
        <div onClick={()=>{UnSetValue()}} className='p-2 w-1/2 flex justify-center items-center font-Poppins  border-2 border-solid border-blue-400 rounded-sm active:bg-blue-50 '>
         Rejected
        </div>
    </div>

    {Approve ? <div>
        {Array.isArray(Data.Post)?Data.Post.map(item => (
            item.status=="approve" ? 
                    <>
                    <div key={item._id} className='m-2 font-Poppins text-base border-2 border-solid border-blue-200 rounded-md p-2 hover:shadow-slate-100 hover:shadow-xl bg-blue-50'>
                        Name - {item.userid}<br/>
                        Reason - {item.description}<br/>
                        Status - <p className='inline-block text-green-600'>Approved</p>
                    </div>
                    </> : null
                )):null}
    </div> :<div>
        {Array.isArray(Data.Post)?Data.Post.map(item => (
            item.status=="rejected" ? 
                    <>
                    <div key={item._id} className='m-2 font-Poppins text-base border-2 border-solid border-blue-200 rounded-md p-2 hover:shadow-slate-100 hover:shadow-xl bg-blue-50'>
                        Name - {item.userid}<br/>
                        Reason - {item.description}<br/>
                        Status - <p className='inline-block text-red-600'>Rejected</p>
                    </div>
                    </> : null
                )):null}
    </div> }
    

    {/* <ImageCom userid={userid} name={name}/> */}

    </>
  )
}
