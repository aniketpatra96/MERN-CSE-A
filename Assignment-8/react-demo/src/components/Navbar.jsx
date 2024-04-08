import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav>
            {/* <a href="/">Users</a>
            <a href="/event">Event</a>
            <a href="/Calculator">Calculator</a>
            <a href='/api'>API</a> */}
            <Link to="/">Users</Link>
            <Link to="/event">Event</Link>
            <Link to="/Calculator">Calculator</Link>
            <Link to='/api'>API</Link>
        </nav>
    )
}

export default Navbar
