import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="nav_wrapper">
            <Link to="/"><h1>Gatsby</h1></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
