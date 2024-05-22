//uuid.v4() will generate a random unique id for each person object
import PropTypes from "prop-types";

export default function Person({ name, age }) {
  return (
    <div>
      <h1
        style={{
          color: "blue",
          border: "1px solid black",
          margin: "auto",
          textAlign: "center",
          padding: "auto",
        }}
      >
        {name} is {age} years old.
      </h1>
    </div>
  );
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
