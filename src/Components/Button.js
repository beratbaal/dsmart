import React from "react";
import { Link } from "react-router-dom";
import "../css/button.css";

const STYLES = ['btnUyeOl','btnUyeGirisi','btnSlider','videojsbtn'];

export const Button =({
    children,
    onClick,
    buttonStyle,
    path
    
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    return(
        <Link to={path==null? "/":path}>
            <button className={`button ${checkButtonStyle}`} onClick={onClick}>{children}</button>
        </Link>
    )
}