import React from "react";
import "../css/logo.css";
import { Link } from "react-router-dom";

const STYLES = ['logocustommovieinfo', 'videologocustom'];

export const Logo =({
    logoStyle
})=>{
    const checkLogoStyle = STYLES.includes(logoStyle) ? logoStyle : STYLES[0];

    return(
       <Link to={"/"}><img src={"https://assets.dsmartgo.com.tr/content/img/dsmart-logo-footer.svg"} className={`logo ${checkLogoStyle}`} /></Link> 
    );
}
   
