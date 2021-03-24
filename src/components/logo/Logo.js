import React from "react";
import logo from "../../assets/img/logo.svg";
import {Link} from "react-router-dom";

export const Logo = () => {
    return <Link to={'/'}><img src={logo} alt={'OMDB Search logo'}/></Link>
}
