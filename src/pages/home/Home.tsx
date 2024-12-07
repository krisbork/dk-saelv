import React from 'react';
import "./Home.css";
import logo from "../../assets/images/saelv-app-logo.png";
import apppic1 from "../../assets/images/apppic1_v2.webp";
import apppic2 from "../../assets/images/apppic3_v2.webp";
import apppic3 from "../../assets/images/apppic4.webp";

function Home() {
    return (
        <div className="home-container container">
            <img src={logo} alt="Logo" className="logo-image"/>
            <h2 className="details-text">Din guide til tillidsstativer, gårdbutikker, vejboder og genbrug</h2>
            <div className="download-container">
                <div className="download-buttons">
                    <a href="https://apps.apple.com/dk/app/s%C3%A6lv/id6504734959"><img className="bn46"
                                     src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                     alt="bn45"/>
                    </a>
                    <a href="/" className="disabled-btn"><img className="bn45"
                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                     alt="bn45"/>
                    </a>
                </div>
                <p className="available-txt">Tilgængelig på iPhone og iPad. Kommer snart til Android</p>
            </div>

            <div className="app-image-container">
                <div className="app-image">
                    <h3>Overblik over Sælv</h3>
                    <img src={apppic1} alt="App screenshot 1"/>
                </div>
                <div className="app-image">
                    <h3>Informationer om en Sælv</h3>
                    <img src={apppic2} alt="App screenshot 2"/>
                </div>
                <div className="app-image">
                    <h3>Udregning af varer</h3>
                    <img src={apppic3} alt="App screenshot 3"/>
                </div>
            </div>
        </div>
    );
}

export default Home;