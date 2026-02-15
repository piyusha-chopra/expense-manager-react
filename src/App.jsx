import {React,useState,useEffect} from 'react'

import ExpenseForm from './components/ExpenseForm.jsx'
import ExpenseSummary from './components/ExpenseSummary.jsx'
import ExpenseList from './components/ExpenseList.jsx'


const App = () => {
  const [expenses,setExpenses]=useState([])
  const totalExpense=expenses.reduce((total,exp)=>{
    return total+Number(exp.amount)
  },0)
 
  return (
    <>
      <div>
        <nav className='bg-blue-950 py-2 px-6 text-white font-semibold text-2xl'>Expense Manager</nav>
      </div>
      <div className='mt-5 ml-10 mr-10 mb-4 flex gap-10'>
        <ExpenseForm expenses={expenses} setExpenses={setExpenses}/>
        <ExpenseSummary totalExpense={totalExpense}/>
      </div>
        <ExpenseList expenses={expenses} setExpenses={setExpenses}/> 
    </>
  )
}

export default App
