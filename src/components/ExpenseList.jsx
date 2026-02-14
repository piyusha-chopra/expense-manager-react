import React from 'react'
import { Trash } from 'lucide-react'

const ExpenseList = () => {
  return (
    <div className='bg-white ml-10 mr-10 rounded-lg overflow-y-auto max-h-72.5'>
        <h3 className='mb-4 text-lg font-semibold ml-4 pt-2'>Expense List</h3>
        <div className='overflow-x-auto'>
            <table className='w-full table-fixed border-collapse'>
                <thead className='bg-gray-100'>        
                    <tr className='border-b border-gray-300'>
                        <th className='px-4 py-2 text-left'>Title</th>
                        <th className='px-4 py-2 text-left'>Amount</th>
                        <th className='px-4 py-2 text-left'>Category</th>
                        <th className='px-4 py-2 text-left'>Date</th>
                        <th className='px-4 py-2 text-left'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-gray-300'>
                        <td className='px-4 py-2 align-middle'>Groceries</td>
                        <td className='px-4 py-2 align-middle'>₹1500</td>
                        <td className='px-4 py-2 align-middle'>Food</td>
                        <td className='px-4 py-2 align-middle'>18-02-2026</td>
                        <td className='px-4 py-2 align-middle'><button className='bg-red-600 text-white px-4 py-1 rounded inline-flex gap-1 cursor-pointer'><Trash size={20}/>Delete</button></td>
                    </tr>
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default ExpenseList
