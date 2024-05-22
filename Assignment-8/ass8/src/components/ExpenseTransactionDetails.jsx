import PropTypes from "prop-types";

const ExpenseTransactionDetails = ({ expense, deleteExpense }) => {
  const { id, description, type, amount, date } = expense;
  return (
    <div
      className={`card rounded-0 mb-1 bg-${
        type === "credit" ? "success" : "danger"
      }-subtle`}
    >
      <div className="card-body d-flex justify-content-between">
        <div>
          <p className="fw-semibold mb-0">
            {description} - {amount}
          </p>
          <p>{date}</p>
        </div>
        <div>
          <h5 role="button" onClick={() => deleteExpense(id)}>
            X
          </h5>
        </div>
      </div>
    </div>
  );
};
ExpenseTransactionDetails.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    amount: PropTypes.number,
    type: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  deleteExpense: PropTypes.func,
};
export default ExpenseTransactionDetails;
