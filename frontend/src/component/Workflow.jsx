import React, { useEffect, useState } from 'react'

export default function Workflow() {

const [Description,SetDescription] = useState('');

var formData = new FormData();

async function AddWork(e){

    e.preventDefault();

    formData.append("Description",Description);

    console.log(Description);

    const response = await fetch('http://localhost:4000/addworkflow',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({
            Description,
            
        }),
    })

    const data = await response.json();
    console.log(data);
    if(data.status){
        alert('Success');
        window.location.reload();
    }
    if(data.error){
        alert('Error To Update Try Again');
        window.location.reload();
    }
}

return (
    <>
    
    <div className='font-Poppins text-xl m-2'></div>
    <form className='w-full' onSubmit={AddWork}>
        <div className="ml-2 sm:w-full w-60 max-w-[55rem] max-h-fit bg-white border border-gray-200 rounded-lg shadow-lg ">
        <label htmlFor="work_flow" className="m-2 block mb-2 text-sm font-Poppins text-gray-900 dark:text-white">Select an Category</label>
        <select  id="work_flow" required className="m-2 overflow-hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5">
                <option value="Anyone" >
                    Anyone Can Approve
                </option>
                <option value="Atleast" disabled>
                    At least two should approve.
                </option>
                <option value="Everyone" disabled>
                    Everyone should approve.
                </option>
        </select>

        <label htmlFor="message" className="m-2 block mb-2 text-sm font-Poppins text-gray-900 dark:text-white">Discription MaxWord <span className='text-blue-500'>25</span></label>
        <textarea required value={Description}  onChange={(e)=>SetDescription(e.target.value)} id="message" rows="2" maxLength="25" className="m-2  p-2.5 w-48 sm:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Ex. Expense Request ..."></textarea>
        
        <div className="flex flex-wrap items-center justify-between gap-2 m-2">
            <input type='submit' className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
        </div>
        </div>
    </form>
    
    
    </>
  )
}
