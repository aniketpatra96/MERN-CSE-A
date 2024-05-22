import PropTypes from "prop-types";



const ExpenseOverview = ({ expenses }) => {
    const credits = expenses.filter( e => e.type === 'credit')
    const debits = expenses.filter( e => e.type === 'debit')

    const totalCredits = credits.reduce((tc, e)=> tc+Number(e.amount),0)
    const totalDebits = debits.reduce((td, e)=> td+Number(e.amount),0)
  return (
    <div>
      <div className="row g-2">
        <div className="col-md-6 bg-success text-center py-2 text-white">
            <h1>+ {totalCredits}</h1>
        </div>
        <div className="col-md-6 bg-danger text-center py-2 text-white">
            <h1>- {totalDebits}</h1>
        </div>
      </div>
    </div>
  )
}

ExpenseOverview.propTypes = {
  expenses: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    category: PropTypes.string,
    filter: PropTypes.func,
  }).isRequired,
};

export default ExpenseOverview
