import React, { use, useState } from 'react'

const ExpenseForm = () => {
    const categories = [
        "Food",
        "Transport",
        "Shopping",
        "Groceries",
        "Rent",
        "Utilities",
        "Medical",
        "Education",
        "Entertainment",
        "Personal Care",
        "Travel",
        "Other"
    ];

    const [expenses,setExpenses]=useState([])
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [category,setCategory]=useState('')
    const [date,setDate]=useState('')

    const handleClick=()=>{
        const newExpense={
            id:Date.now(),
            title:title,
            amount:amount,
            category:category,
            date:date
        }
        setExpenses[[...expenses,newExpense]]
        setTitle('')
        setAmount('')
        setCategory('')
        setDate('')   
        }

  return (
    <div className='bg-white w-1/2 px-4 py-3 m-2 rounded-lg'>
      <form 
      className='flex flex-col gap-4'
      onSubmit={(e)=>{
        e.preventDefault()
      }}>
        <h3 className='mb-4 text-lg font-semibold'>Add Expense</h3>
        <div className='grid grid-cols-[80px_1fr] gap-2 items-center  '>
            <label>Title</label>
            <input 
             type='text'
             placeholder='Enter title' 
             className='w-full border border-gray-400 rounded px-2 py-1'
             value={title} 
             onChange={(e)=>{
                setTitle(e.target.value)
             }}/>
        </div> 
        <div className='grid grid-cols-[80px_1fr] gap-2 items-center '>
            <label>Amount</label>
            <input 
              type='number'
              placeholder='Enter amount' 
              className='w-full border border-gray-400 rounded px-2 py-1'
              value={amount}
              onChange={(e)=>{
                setAmount(e.target.value)
             }}/>
        </div>
        <div className='grid grid-cols-[80px_1fr] gap-2 items-center'>
            <label>Category</label>
            <select
            value={category} 
            className='w-full border border-gray-400 rounded px-2 py-1'
            onChange={(e=>{
                setCategory(e.target.value)
            })}>
                <option value=''>Select category</option>
                {categories.map((category,idx)=>(
                    <option key={idx} value={category}>{category}</option>
                ))}
            </select>
        </div>
        <div className='grid grid-cols-[80px_1fr] gap-2 items-center'>
            <label>Date</label>
            <input 
              type='date'
              className='w-full border border-gray-400 rounded px-2 py-1'
              value={date}
              onChange={(e)=>{
                setDate(e.target.value)
              }}/>
        </div>
        <div className='flex items-center justify-center'>
            <button 
             className='px-8 py-1 bg-green-600 rounded text-white cursor-pointer'
             onClick={handleClick}>
                Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
