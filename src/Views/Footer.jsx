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
                    <ul className="footerlist" >
                        <li className="footeritem"><a href="#" className="listcustom">Üye Ol</a></li>
                        <li className="footeritem"><a href="#" className="listcustom">Yardım</a></li>
                        <li className="footeritem"><a href="#">Aydınlatma Metni</a></li>
                        <li className="footeritem"><a href="#">Çerez Politikası </a></li>
                        <li className="footeritem"><a href="#">Belgesel</a></li>
                        <li className="footeritem"><a href="#">Yaşam</a></li>
                        <li className="footeritem"><a href="#">TV Programları</a></li>

                    </ul>
                    <img src="https://assets.dsmartgo.com.tr/content/img/app-store.png"/>
                    &nbsp;
                    <img src="//assets.dsmartgo.com.tr/content/img/google-play-store.png"/>
                </div>
                <div className="footerbilgi">
                    <h4>Müşteri Hizmetleri</h4>
                    <h2 className="numaracustom">0850 266 0 266</h2>
                </div>
                
            </div>
        );
    }
}