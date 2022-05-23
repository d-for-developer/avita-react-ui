import React from 'react'
import logo from '../src/logo.png';
import {Link} from "react-router-dom";



export default function Logo() {
    return (
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="AVITA India" style={{ width: 175 }} />
        </Link>

    )
}
