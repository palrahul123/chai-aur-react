import React from 'react'

export default function Square({value,handleClick}) {
  return (
    <button onClick={handleClick} className='border-dark   border rounded-md  items-center justify-center py-3 px-5 text-center text-base font-medium text-dark ' style={{cursor:'pointer',height:'50px',width:'50px'}}>{value}</button>
  )
}
