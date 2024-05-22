import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Dashboard</Link>
        <Link to={"/event"}>Events</Link>
        <Link to={"/calculator"}>Calculator</Link>
      </nav>
    </div>
  );
}
