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
        className="bg-[#5ebbb490] text-white px-5 py-2 rounded-full hover:bg-[#a0a7b4] m-4"
        type="button"
        onClick={()=>handleCategory('Happy')}>
        Happy
      </button>

      <button
        className="bg-[#5ebbb490] text-white px-5 py-2 rounded-full hover:bg-[#a0a7b4]  m-4"
        type="button"
        onClick={()=>handleCategory('Horror')}>
        
        Horror
      </button>

      <button
        className="bg-[#5ebbb490] text-white px-5 py-2 rounded-full hover:bg-[#a0a7b4] m-4"
        type="button"
        onClick={()=>handleCategory('Mystery')}>
        
          Mystery
      </button>

      <button
        className="bg-[#5ebbb490] text-white px-5 py-2 rounded-full hover:bg-[#a0a7b4] m-4"
        type="button"
        onClick={()=> handleCategory('Weird')}>
        Weird
      </button>

      <button
        className="bg-[#5ebbb490] text-white px-5 py-2 rounded-full hover:bg-[#a0a7b4] m-4"
        type="button"
        onClick={()=>handleCategory('Fantasy')}>
        
        Fantasy
      </button>

      <button
        className="bg-[#5ebbb490] text-white px-5 py-2 rounded-full hover:bg-[#a0a7b4] m-4"
        type="button"
        onClick={()=>handleCategory('Fear')}>
        
        Fear
      </button>
      <button
        className="bg-[#5ebbb490] text-white px-5 py-2 rounded-full hover:bg-[#a0a7b4] m-4"
        type="button"
        onClick={()=>handleCategory('')}>
        
        All
      </button>
    </div>
  )
}
