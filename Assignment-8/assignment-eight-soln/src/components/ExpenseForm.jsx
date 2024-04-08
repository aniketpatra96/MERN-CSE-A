import { useRef } from 'react'

const ExpenseForm = ({ addExpense }) => {
    const descriptionRef = useRef(null)
    const amountRef = useRef(null)
    const dateRef = useRef(null)
    const typeRef = useRef(null)

    function submitHandler(e){
        e.preventDefault()
        const newExpense = {
            id: new Date().getTime(),
            description: descriptionRef.current.value,
            amount: amountRef.current.value,
            date: dateRef.current.value,
            type: typeRef.current.value,
        }
        console.log(newExpense);
        addExpense(newExpense)
        descriptionRef.current.value = ""
        amountRef.current.value = ""
        typeRef.current.value = ""
        dateRef.current.value = ""
    }

    return (
        <form action="" method="post" onSubmit={submitHandler}>
            <div className="row g-2 my-2">
                <div className="col-md-6">
                    <input
                        ref={descriptionRef}
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <input
                        ref={amountRef}
                        type="text"
                        className="form-control"
                        placeholder="Amount"
                        required
                    />
                </div>
                <div className="col-md-4">
                    <input
                        ref={dateRef}
                        type="date"
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-4">
                    <select ref={typeRef} className='form-control' required>
                        <option value="debit">Debit</option>
                        <option value="credit">Credit</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type='submit'
                        value="ADD"
                        className="btn btn-primary w-100"
                    />
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
