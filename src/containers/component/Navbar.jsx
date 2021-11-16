import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to="/">HOme</Link> </li>
                    <li> <Link to="/about">about</Link> </li>
                    <li> <Link to="/blog">blog</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar
