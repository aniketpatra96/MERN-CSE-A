import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Navbar = () => {
    const authContext = useAuth()
    console.log(authContext)
    const { isLoggedIn, logout, user } = authContext
    const logoutUser = () =>{
      logout()
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h4>PlacementPal</h4>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        {isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/addinterview"
                                    >
                                        Add
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={logoutUser}>
                                        Logout
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="" >
                                        {user && `Welcome, ${user.name}`}
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">
                                        Sign Up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signin">
                                        Sign In
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
