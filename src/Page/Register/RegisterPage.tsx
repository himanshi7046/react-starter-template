/* eslint-disable max-len */
import React from 'react';

export default function RegisterPage() {
  return (
    <div className='mx-auto flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10'>
      <div className='self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl'>
        Create a new account
      </div>
      <span className='justify-center text-sm text-center text-gray-500 flex-items-center'>
        Already have an account ?
        <a href='#' target='_blank' className='text-sm text-blue-500 underline hover:text-blue-700'>
          Sign in
        </a>
      </span>
      <div className='p-6 mt-8'>
        <form action='#'>
          <div className='flex flex-col mb-2'>
            <div className=' relative '>
              <input
                type='text'
                id='create-account-pseudo'
                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                name='pseudo'
                placeholder='Pseudo'
              />
            </div>
          </div>
          <div className='flex gap-4 mb-2'>
            <div className=' relative '>
              <input
                type='text'
                id='create-account-first-name'
                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                name='First name'
                placeholder='First name'
              />
            </div>
            <div className=' relative '>
              <input
                type='text'
                id='create-account-last-name'
                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                name='Last name'
                placeholder='Last name'
              />
            </div>
          </div>
          <div className='flex flex-col mb-2'>
            <div className=' relative '>
              <input
                type='text'
                id='create-account-email'
                className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                placeholder='Email'
              />
            </div>
          </div>
          <div className='flex w-full my-4'>
            <button
              type='submit'
              className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
              Login
            </button>
          </div>
        </form>
        <div className='flex items-center justify-center mt-6'>
          <div>
            <label className='flex items-center space-x-3 mb-3'>
              <input
                type='checkbox'
                name='checked-demo'
                className='form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none'
              />
              <span className='text-gray-700  font-normal'>Blue</span>
            </label>
            <label className='flex items-center space-x-3 mb-3'>
              <input
                type='checkbox'
                name='checked-demo'
                className='form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-pink-500 checked:border-transparent focus:outline-none'
              />
              <span className='text-gray-700 font-normal'>Pink</span>
            </label>
            <label className='flex items-center space-x-3 mb-3'>
              <input
                type='checkbox'
                name='checked-demo'
                className='form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none'
              />
              <span className='text-gray-700  font-normal'>Green</span>
            </label>
            <label className='flex items-center space-x-3 mb-3'>
              <input
                type='checkbox'
                name='checked-demo'
                className='form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none'
              />
              <span className='text-gray-700  font-normal'>Orange</span>
            </label>
            <label className='flex items-center space-x-3 mb-3'>
              <input
                type='checkbox'
                name='checked-demo'
                className='form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none'
              />
              <span className='text-gray-700  font-normal'>Purple</span>
            </label>
            <label className='flex items-center space-x-3 mb-3'>
              <input
                type='checkbox'
                name='checked-demo'
                className='form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-black checked:border-transparent focus:outline-none'
              />
              <span className='text-gray-700  font-normal'>Black</span>
            </label>
            <label className='flex items-center space-x-3 mb-3'>
              <input
                type='checkbox'
                name='checked-demo'
                className='form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-indigo-500 checked:border-transparent focus:outline-none'
              />
              <span className='text-gray-700  font-normal'>Indigo</span>
            </label>
            <label className='flex items-center space-x-3 mb-3'>
              <input
                type='checkbox'
                name='checked-demo'
                className='form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-red-500 checked:border-transparent focus:outline-none'
              />
              <span className='text-gray-700  font-normal'>Red</span>
            </label>
            <label className='flex items-center space-x-3 mb-3'>
              <input
                type='checkbox'
                name='checked-demo'
                className='form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-gray-500 checked:border-transparent focus:outline-none'
              />
              <span className='text-gray-700  font-normal'>Gray</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}