import PropTypes from "prop-types";
import "../styles/employee.css";

const Employee = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone Number: {phone}</p>
    </div>
  );
};

Employee.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default Employee;
