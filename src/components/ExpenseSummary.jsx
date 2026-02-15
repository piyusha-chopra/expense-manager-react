import React, { useState } from 'react'

const ExpenseSummary = ({totalExpense}) => {
  
  const [income,setIncome]=useState(0)
  
  return (
    <div className='bg-blue-100 w-1/2 h-fit px-4 py-3 m-2 rounded-lg'>
      <h3 className='mb-4 text-lg font-semibold'>Expense Summary</h3>
      <hr className='border-gray-300'/>
      <div className='flex justify-center items-center gap-2 mt-4'>
        <p>Enter Income:</p>
        <input 
        value={income}
        onChange={(e)=>{
          setIncome(e.target.value)
        }}
         type='number' 
         placeholder='Enter your income'
         className='border border-gray-400 rounded px-2 py-1'/>
      </div>
      <div className='flex justify-center items-center mt-5 gap-4 mb-4'>
        <p className='bg-green-600 text-white px-6 py-1 text-lg rounded'>Income: <span className='text-xl font-semibold'>₹{income}</span></p>
        <p className='bg-red-600 text-white px-6 py-1 text-lg rounded'>Expense: <span className='text-xl font-semibold'>₹{totalExpense}</span></p>
      </div>
      <p className=' text-center mt-3 gap-1 text-lg font-semibold'>Remaining Balance: <span className='text-xl font-bold'>₹{income-totalExpense}</span></p>
    </div>
  )
}

export default ExpenseSummary
