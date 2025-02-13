import "./footer.css"
import siteLogo from "../../assets/svg/headerLogo.svg";
import footerLogo from "../../assets/svg/footerLogo.svg"
import Button from "../button/button";
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__block">
                    <div className="footer__icons">
                        <div className="footer__logo">
                            <img src={siteLogo} alt="site logosi" />
                        </div>
                        <div>
                            <img src={footerLogo} alt="logotiplar" />
                        </div>
                    </div>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer__link" href="#">Home</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Pricing</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Products</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">About Us</a>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer__link" href="#">Careers</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Commynity</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Privacy Policy</a>
                        </li>
                    </ul>

                    <div className="footer__form">
                        <form className="form">
                            <input className="form__input" type="text" placeholder="Updates in your inbox..." />
                            <Button title = "Go" />
                        </form>
                        <p className="footer__form_sub_title">
                            Copyright 2020. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;