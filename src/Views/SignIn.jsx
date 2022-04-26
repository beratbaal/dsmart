import React from "react";
import "../css/signin.css";
import { Footer } from "./Footer";
import { Button } from "../Components/Button";

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="signinbody">
                <img src="https://assets.dsmartgo.com.tr/content/img/dsmart-logo.svg" className="logosignin" />
                <div className="signinform">
                    <h3 className="signinheader">Giriş</h3>
                    <span className="labelphonenumber">Telefon Numarası</span>
                    <input type="text"  className="signininputphone" placeholder="5XX XXX XX XX"/>
                    <span className="labelpassword">Şifre</span>
                    <input type="password"  className="signininputpassword" placeholder="***********"/>
                    <div className="signinrememberme"><input type="checkbox"/>Beni Hatırla</div>
                    <Button buttonStyle="signinsubmitbutton">Devam Et</Button>
                    <div className="forgotpassword"><a href="#">Şifremi Unuttum</a></div>
                    <div className="uyeolmakistiyorum"><a href="#">Üye Olmak İstiyorum</a></div>
                    <div className="signinfooter">
                         <a href="#">Yardım İster misiniz?</a>   
                        </div>
                </div>
              <Footer/>
            </div>
            
        );
    }
}