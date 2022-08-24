import React from 'react'
import logo from '../src/logo.png';
// import logoDark from '../src/logo-dark.png';
import {Link} from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function Logo() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
       <>
        {
            matches?(<Link className="navbar-brand" to="/">
            <img src={logo} alt="NOVITA India" style={{ width: 175 }} />
        </Link>):( <Link className="navbar-brand" to="/">
            <img src={logo} alt="NOVITA India" style={{ width: 175 }} />
        </Link>)
       }
       </>

    )
}