import React from 'react'

export default function HomeCom({LoginFun}) {
  return (
   <>
    <div className='flex flex-wrap-reverse sm:mx-20 m-2 h-fit items-center sm:mt-5 md:mt-10'>
        <div className='w-full sm:w-1/2 sm:p-2 p-4 mt-5 h-[50vh] sm:h-[45vh] flex justify-center items-center'>
            <div className='text-[#183b56] text-3xl md:text-4xl lg:text-4xl font-Poppins text '>
                <div className='flex justify-start'> Welcome To Request Resolver </div>
                <div className="text-[#373b4e] mt-2 mb-2 flex justify-start text-base md:text-base lg:text-lg font-Poppins tracking-tighter">
                All In One Solution To Handle Request WorkFlow !</div>
                <div className="text-[#373b4e] mt-2 mb-2 flex justify-start text-base md:text-base lg:text-lg font-Poppins tracking-tighter">
                Getting Start Now !</div>
                
                <button onClick={()=>{LoginFun()}} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-white dark:hover:bg-slate-900 "><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>Login Now</button>
            </div>
        </div>
        <div className='w-full sm:w-1/2 sm:p-2 p-6 text-center flex justify-center items-center h-[62vh]'>
                <img className='h-4/5' src='/HomePage1.webp' alt='HomePage'/>
        </div>
    </div>

    <div className='flex flex-wrap sm:mx-20 m-2 h-fit items-center sm:mt-5 md:mt-7'>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 text-center flex justify-center items-center h-[67vh]'>
                <img className='h-4/5' src='/HomePage2.webp' alt='Navbackground'/>
        </div>
        <div className='w-full sm:w-1/2 sm:p-2 p-5 mt-5 h-[50vh] sm:h-[45vh] flex justify-center items-center'>
            <div className='text-[#183b56] text-3xl md:text-4xl lg:text-4xl font-Poppins text '>
                <div className='flex justify-start'> We Provides Solution That, </div>
                <div className="text-[#373b4e] mt-2 mb-2 flex justify-start text-base md:text-base lg:text-lg font-Poppins tracking-tighter">
                Easily Create Requests! <br/> Approve It <br/> Verify It <br/> In Simple Clicks </div>
            </div>
        </div>
    </div>

   </>
  )
}
