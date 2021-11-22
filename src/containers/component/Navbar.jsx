import React from 'react'
import { Link } from "react-router-dom"
import SearchBox from "../component/SearchBox"

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to="/">HOme</Link> </li>
                    <li> <Link to="/about">about</Link> </li>
                    <li> <Link to="/blog">blog</Link></li>
                    <li> <Link to="/pokimon/search">test search params</Link></li>
                    <li> <Link to="/counterTest">CounterTest</Link></li>
                    <li> <Link to="/localStorage">localStorage</Link></li>
                  
                    <li><SearchBox /></li>
                </ul>
            </nav>
        </header>

    )
}

export default Navbar
