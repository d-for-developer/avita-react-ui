import React from 'react'
import logo from '../../img/Logo.png';
import {Link} from "react-router-dom";



export default function Logo() {
    return (
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="AVITA India" style={{ width: 90 }} />
        </Link>

    )
}