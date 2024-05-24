import React, { useState } from 'react'

export default function SortingElements({onChildvalue}) {
  const [category,setCategory] = useState('')
  const handleCategory = (newgenre) => {
    setCategory(newgenre);
    onChildvalue(newgenre);
  }
  return (
    <div className='flex flex-auto flex-wrap mx-10 my-5 justify-center'>
      <button

        className="relative inline-flex items-center justify-center p-3.5 mb-2 me-6 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-gray-600 to-gray-500 group-hover:from-gray-600 group-hover:to-gray-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-white-800 border border-white hover:border-gray-500"


        type="button"
        onClick={()=>handleCategory('Happy')}>
        Happy
      </button>
       
  

      <button

        className="relative inline-flex items-center justify-center p-3.5 mb-2 me-6 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-gray-600 to-gray-500 group-hover:from-gray-600 group-hover:to-gray-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-white-800 border border-white hover:border-gray-500"


        type="button"
        onClick={()=>handleCategory('Horror')}>
        
        Horror
      </button>

      <button

        className="relative inline-flex items-center justify-center p-3.5 mb-2 me-6 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-gray-600 to-gray-500 group-hover:from-gray-600 group-hover:to-gray-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-white-800 border border-white hover:border-gray-500"

        type="button"
        onClick={()=>handleCategory('Mystery')}>
        
          Mystery
      </button>

      <button

        className="relative inline-flex items-center justify-center p-3.5 mb-2 me-6 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-gray-600 to-gray-500 group-hover:from-gray-600 group-hover:to-gray-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-white-800 border border-white hover:border-gray-500"


        type="button"
        onClick={()=> handleCategory('Weird')}>
        Weird
      </button>

      <button
        className="relative inline-flex items-center justify-center p-3.5 mb-2 me-6 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-gray-600 to-gray-500 group-hover:from-gray-600 group-hover:to-gray-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-white-800 border border-white hover:border-gray-500"

        type="button"
        onClick={()=>handleCategory('Fantasy')}>
        
        Fantasy
      </button>

      {/* <button
        className="bg-[#b4b9b9ac] text-white px-5 py-2 rounded-full hover:bg-[#a0a7b4]"
        type="button"
        onClick={()=>handleCategory('Horror')}>
        
        Horror
      </button> */}






      <button
        className="relative inline-flex items-center justify-center p-3.5 mb-2 me-6 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-gray-600 to-gray-500 group-hover:from-gray-600 group-hover:to-gray-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-white-800 border border-white hover:border-gray-500"

        type="button"
        onClick={()=>handleCategory('Fear')}>
        
        Fear
      </button>
      <button

        className="relative inline-flex items-center justify-center p-3.5 mb-2 me-6 overflow-hidden text-sm font-medium text-white-900 rounded-lg group bg-gradient-to-br from-gray-600 to-gray-500 group-hover:from-gray-600 group-hover:to-gray-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-white-800 border border-white hover:border-gray-500"

        type="button"
        onClick={()=>handleCategory('')}>
        
        All
      </button>
    </div>
  )
}


