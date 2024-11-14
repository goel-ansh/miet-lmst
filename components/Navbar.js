import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="navbar">
            <button className="navbar-buttons"><Link to="/">Home</Link></button>
            <button className="navbar-buttons"><Link to="/issue">Issue/ Submit Books</Link></button>
            <button className="navbar-buttons"><Link to="/books">Books</Link></button>
            <button className="navbar-buttons"><Link to="/students">Students</Link></button>
        </div>
    )
}

export default Navbar
