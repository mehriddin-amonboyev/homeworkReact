import React from "react";
import logoImage from '../../assets/svg/headerLogo.svg'
import Button from "../button/button";
import "./header.css"

function Header() {

    return (
        <>
            <div className="container">
                <div className="header__block">
                    <div className="header__logo_block">
                        <img className="logo_img" src={logoImage} alt="logotip" />
                    </div>
                    <ul className="header__list">
                        <li className="header__item">
                            <a href="#">Pricing</a>
                        </li>
                        <li className="header__item">
                            <a href="#">Product</a>
                        </li>
                        <li className="header__item">
                            <a href="#">About Us</a>
                        </li>
                        <li className="header__item">
                            <a href="#">Careers</a>
                        </li>
                        <li className="header__item">
                            <a href="#">Community</a>
                        </li>
                    </ul>
                    <Button />
                </div>
            </div>
        </>
    );
};

export default Header;