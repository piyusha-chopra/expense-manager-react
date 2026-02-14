import React from 'react'

const ExpenseSummary = () => {
  return (
    <div className='bg-blue-100 w-1/2 h-fit px-4 py-3 m-2 rounded-lg'>
      <h3 className='mb-4 text-lg font-semibold'>Expense Summary</h3>
      <hr className='border-gray-300'/>
      <p className=' text-center mt-4 gap-1 text-lg font-semibold'>Total Spending: <span className='text-xl font-bold'>₹12450</span></p>
      <div className='flex justify-center items-center mt-4 gap-4 mb-4'>
        <p className='bg-green-600 text-white px-6 py-1 text-lg rounded'>Income: <span className='text-xl font-semibold'>₹50000</span></p>
        <p className='bg-red-600 text-white px-6 py-1 text-lg rounded'>Expense: <span className='text-xl font-semibold'>₹32000</span></p>
      </div>
    </div>
  )
}

export default ExpenseSummary
