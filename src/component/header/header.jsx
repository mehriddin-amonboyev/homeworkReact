import React from "react";
import logoImage from '../../assets/svg/headerLogo.svg'
import Button from "../button/button";

function Header() {
    
    return (
        <>
            <div className="container">
                <div className="header__block">
                    <div className="header__logo_block">
                        <img className="logo_img" src={logoImage} alt="logotip" />
                    </div>
                    <ul className="header__list">
                        <li className="header__item">Pricing</li>
                        <li className="header__item">Product</li>
                        <li className="header__item">About Us</li>
                        <li className="header__item">Careers</li>
                        <li className="header__item">Community</li>
                    </ul>
                    <Button />
                </div>
            </div>
        </>
    );
};

export default Header;