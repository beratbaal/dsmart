import React from "react";
import "../css/logo.css";
import { Link } from "react-router-dom";

const STYLES = ['logocustommovieinfo', 'videologocustom','logosignup'];
const IMAGES = ['https://assets.dsmartgo.com.tr/content/img/dsmart-logo-footer.svg','https://assets.dsmartgo.com.tr/content/img/dsmart-logo.svg'];

export const Logo =({
    logoStyle,
    logoImage
})=>{
    const checkLogoStyle = STYLES.includes(logoStyle) ? logoStyle : STYLES[0];
    const checkLogoImage = IMAGES.includes(logoImage) ? logoImage : IMAGES[0];

    return(
       <Link to={"/"}><img src={`logo ${checkLogoImage}`} className={`logo ${checkLogoStyle}`} /></Link> 
    );
}
   
