import React from "react";
import "../css/footer.css";

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="customfooter">
                <img className="footerimage" src="https://assets.dsmartgo.com.tr/content/img/dsmart-logo-footer.svg"/>
                <div className="footerlistcustom">
                    <ul>
                        <li><a href="#">Üye Ol</a></li>
                        <li><a href="#">Yardım</a></li>
                        <li><a href="#">Aydınlatma Metni</a></li>
                        <li><a href="#">Çerez Politikası </a></li>
                        <li><a href="#">Belgesel</a></li>
                        <li><a href="#">Yaşam</a></li>
                        <li><a href="#">TV Programları</a></li>

                    </ul>
                    <img src="https://assets.dsmartgo.com.tr/content/img/app-store.png"/>
                    &nbsp;
                    <img src="//assets.dsmartgo.com.tr/content/img/google-play-store.png"/>
                </div>
                <div className="footerbilgi">
                    Müşteri Hizmetleri
                </div>
                
            </div>
        );
    }
}