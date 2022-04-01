import React from "react";
import "../css/signup.css";

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="signupbody">

                <img src="https://assets.dsmartgo.com.tr/content/img/dsmart-logo.svg" className="logosignup" />
                <div className="signupform">
                    <h3 className="signupheader">Üye Ol</h3>
                    <p className="signuptext">D-Smart Abonesi misiniz?</p>
                    <div className="signupbutton">
                        <button className="btnevet">Evet</button>
                        <button className="btnhayır">Hayır</button>
                    </div>
                    <p className="signuptext2">Hemen D-Smart GO’ya ücretsiz üye olabilir, 1 ay boyunca Film Dizi paketinizin keyfini çıkarabilirsiniz.</p>
                    
                        <span className="signuplabel">Telefon Numarası</span>
                        <input type="text"  className="signupinput" placeholder="5XX XXX XX XX"/>
                    
                </div>



            </div>
        );
    }
}