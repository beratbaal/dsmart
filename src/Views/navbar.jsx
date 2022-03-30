import React from "react";
import "../css/nvbr.css";

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="mainNavBarDiv">
                <nav className="navbar navbar-expand-sm navbar-pink  navbarcustom">
                    <div className="container-fluid">
                        <img src={"https://assets.dsmartgo.com.tr/content/img/dsmart-logo.svg"} className="logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"><img src={"https://assets.dsmartgo.com.tr/content/img/menu.png"} /></span>
                        </button>
                    
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto">
                                <img src={"https://assets.dsmartgo.com.tr/content/img/1-Home.png"} className="secIzle" /><p className="text">Seç İzle</p>
                                <img src={"//assets.dsmartgo.com.tr/content/img/2-TV.png"} className="tvIzle" /><p className="text">TV İzle</p>
                                <img src={"https://img.dsmartgo.com.tr/config/image/default_profile.png"} className="banaOzel" /><p className="text">Bana Özel</p>
                            </ul>
                            <form className="d-flex">
                                <div className="secenekler">

                                    <div><button className="btn btn-light btnUyeOl">Üye Ol</button></div>
                                    <div><button className="btnUyeGirisi">Üye Girişi</button></div>
                                </div>
                            </form>     
                              
                        </div>
                        <div ><img src={"https://assets.dsmartgo.com.tr/content/img/icnMastersearch.svg"} className="searchButton" /></div>
                    </div>
                </nav>
                <div className="customList">
                    <ul>
                        <li><a href="#">Anasayfa</a></li>
                        <li><a href="#">Filmler</a></li>
                        <li><a href="#">Diziler</a></li>
                        <li><a href="#">Çocuk</a></li>
                        <li><a href="#">Belgesel</a></li>
                        <li><a href="#">Yaşam</a></li>
                        <li><a href="#">TV Programları</a></li>

                    </ul>
                </div>
               
            </div>
        );
    }
}