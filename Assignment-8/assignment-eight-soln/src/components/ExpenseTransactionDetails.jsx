import React from 'react'

const ExpenseTransactionDetails = ({ expense, deleteExpense }) => {
    const {id, description, type, amount, date} = expense
  return (
    <div className={`card rounded-0 mb-1 bg-${type==='credit'? 'danger' : 'success'}-subtle`}>
        <div className="card-body d-flex justify-content-between">
            <div>
            <p className='fw-semibold mb-0'>{description} - {amount}</p>
            <p>{date}</p>
            </div>
            <div>
                <h5 role='button' onClick={()=>deleteExpense(id)}>X</h5>
            </div>
        </div>
    </div>
  )
}

export default ExpenseTransactionDetails
