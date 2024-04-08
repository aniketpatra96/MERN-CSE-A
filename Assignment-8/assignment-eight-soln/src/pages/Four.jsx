import { useState } from 'react'
import ExpenseOverview from '../components/ExpenseOverview'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseTransaction from '../components/ExpenseTransaction'

const Four = () => {
    const [ expenses, setExpenses ] = useState([])

    function addExpense(newExpense) {
        setExpenses([newExpense, ...expenses])
    }

    function deleteExpense( eid ){
        console.log(eid);
        let newExpenses = expenses.filter (e => e.id !== eid)
        setExpenses(newExpenses)
    }

  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <h1 className='text-center my-2 display-4'>Expense Tracker</h1>
            <ExpenseOverview expenses={expenses} />
            <ExpenseForm addExpense={addExpense} />
            <ExpenseTransaction expenses={expenses} deleteExpense={deleteExpense} />
        </div>
    </div>
  )
}

export default Four
