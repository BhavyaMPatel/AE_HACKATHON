import React from 'react'

export default function Login({CloseFun}) {
  return (
    <>
    <section class="bg-gray-50 md:p-10 p-2">
    <div className='flex justify-end m-2'>
            <button onClick={()=>{CloseFun()}} className='transition-all delay-1000 duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </button>
    </div>

    <div class="flex flex-col items-center justify-center md:px-6 md:py-8 md:mx-10 lg:py-0 font-Poppins mb-10 h-full">
        <a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-90">
            Request Resolver
        </a>
        <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tighter text-gray-900 md:text-xl">
                    WelCome Back
                </h1>
                <form class="space-y-4 md:space-y-6">
                    <div>
                        <label for="userid" class="block mb-2 text-sm font-medium text-gray-900 ]">UserId</label>
                        <input type="text" name="userid" id="userid" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="UserId" />
                        <div id="useriderror" class="text-red-600"></div>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                        <div id="passworderror" class="text-red-600" ></div>
                    </div>
                    <button type="submit" class="w-full text-red-50 bg-indigo-600  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login Now</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Dont have an account? <a href="/SignUp" class="font-medium text-primary-600 hover:underline dark:text-primary-500">SignUp Here</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
</section>
</>
  )
}
