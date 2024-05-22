import ExpenseTransactionDetails from "./ExpenseTransactionDetails";
import PropTypes from "prop-types";

const ExpenseTransaction = ({ expenses, deleteExpense }) => {
  const credits = expenses.filter((e) => e.type === "credit");
  const debits = expenses.filter((e) => e.type === "debit");
  return (
    <div>
      <div className="row g-2">
        <div className="col-md-6">
          {credits.map((credit) => (
            <ExpenseTransactionDetails
              key={credit.id}
              expense={credit}
              deleteExpense={deleteExpense}
            />
          ))}
        </div>
        <div className="col-md-6">
          {debits.map((debit) => (
            <ExpenseTransactionDetails
              key={debit.id}
              expense={debit}
              deleteExpense={deleteExpense}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
ExpenseTransaction.propTypes = {
  expenses: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    amount: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    category: PropTypes.string,
    filter: PropTypes.func,
  }).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};
export default ExpenseTransaction;
