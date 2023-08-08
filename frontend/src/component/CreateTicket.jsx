import React, { useEffect, useState } from 'react'

export default function CreateTicket({UserId}) {
    const [options, setOptions] = useState([]);
    const [Description,SetDescription] = useState('');
    const [Src,SetSrc]=useState('');
    const [Category,SelectCategory] = useState('reimbursement');
    var formData = new FormData();

    useEffect(() => {
        // Fetch the data from the backend database
        fetch('http://localhost:4000/workflow')
            .then(response => response.json())
            .then(data => {
            // Update the options state
            setOptions(data);
            });
    }, []);

    async function Send(e){
        e.preventDefault();
        
        formData.append("UserId",UserId);
        formData.append("Category",Category);
        formData.append("Description",Description);
        formData.append("image",Src);
        console.log(formData);
        const response = await fetch('http://localhost:4000/uploadquery',{
        method: 'POST',
        body: formData
        })
        const data = await response.json();
        console.log(data);
        if(data.status){
            alert('Success');
            window.location.reload();
        }
        if(data.error){
            alert('Error To Upload Try Again');
            window.location.reload();
        }
    }

return (
    <>
    <div className='font-Poppins text-xl m-2'>Enter This Details</div>
    <form className='w-full' onSubmit={Send}>
        <div className="ml-2 sm:w-full w-60 max-w-[55rem] max-h-fit bg-white border border-gray-200 rounded-lg shadow-lg ">
        
        <div className="m-2 ">
            <label htmlFor="Attachment" className="block mb-2 text-sm font-Poppins text-gray-900">Upload Attachment</label>
            <input required type='file' onChange={(e)=>SetSrc(e.target.files[0])} className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 dark:text-neutral-200 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none" accept="image/*" id="image" name='image'/>
        </div>     

        <label htmlFor="work_flow" className="m-2 block mb-2 text-sm font-Poppins text-gray-900 dark:text-white">Select an Category</label>
    
        <select value={Category} onChange={(e)=>SelectCategory(e.target.value)}  id="work_flow" required className="m-2 overflow-hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5">
            {Array.isArray(options.Flow)?options.Flow.map(item => (
                <option key={item._id} value={item.name}>
                {item.name}
                </option>
            )):null}
        </select>

        <label htmlFor="message" className="m-2 block mb-2 text-sm font-Poppins text-gray-900 dark:text-white">Discription</label>
        <textarea value={Description} required onChange={(e)=>SetDescription(e.target.value)} id="message" rows="4" maxLength="100" className="m-2  p-2.5 w-48 sm:w-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your request here..."></textarea>
        
        <div className="flex flex-wrap items-center justify-between gap-2 m-2">
            <input type='submit' className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
        </div>
        </div>
    </form>


    </>
    
  )
}
