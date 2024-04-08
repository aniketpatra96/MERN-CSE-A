import React from 'react'
import ExpenseTransactionDetails from './ExpenseTransactionDetails'

const ExpenseTransaction = ({ expenses, deleteExpense }) => {
    const credits = expenses.filter( e => e.type === 'credit')
    const debits = expenses.filter( e => e.type === 'debit')
  return (
    <div>
      <div className="row g-2">
        <div className="col-md-6">
            {
                credits.map( credit => <ExpenseTransactionDetails key={credit.id} expense={credit} deleteExpense={deleteExpense} />)
            }
        </div>
        <div className="col-md-6">
            {
                debits.map( debit => <ExpenseTransactionDetails key={debit.id} expense={debit} deleteExpense={deleteExpense} />)
            }
        </div>
      </div>
    </div>
  )
}

export default ExpenseTransaction
