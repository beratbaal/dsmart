import React from "react";
import "../css/signup.css";
import { Footer } from "./Footer";
import { Button } from "../Components/Button";
import { Logo } from "../Components/Logo";

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="signupbody">

                <Logo logoStyle="logosignup" logoImage="https://assets.dsmartgo.com.tr/content/img/dsmart-logo.svg"/>
                <div className="signupform">
                    <h3 className="signupheader">Üye Ol</h3>
                    <p className="signuptext">D-Smart Abonesi misiniz?</p>
                    <div className="signupbutton">
                        <button className="btnevet">Evet</button>
                        <button className="btnhayır">Hayır</button>
                    </div>
                   <div  className="signuptext2"><p>Hemen D-Smart GO’ya ücretsiz üye olabilir, 1 ay boyunca Film Dizi paketinizin keyfini çıkarabilirsiniz.</p></div>
                    
                        <span className="signuplabel">Telefon Numarası</span>
                        <input type="text"  className="signupinput" placeholder="5XX XXX XX XX"/>
                       <div className="signupinfo"><p>Girmiş olduğunuz cep telefonu numarasına, SMS aracılığı ile doğrulama kodu gönderilecektir.Kişisel verilerinizin işlenmesine ilişkin detaylı bilgi için tıklayınız.</p></div> 
                       <Button buttonStyle="signupsubmitbutton">Devam Et</Button>
                        <div className="signupfooter">
                         <a href="#">D-Smart Go Nedir?</a>   
                        </div>
                </div>

                <Footer/>

            </div>
        );
    }
}