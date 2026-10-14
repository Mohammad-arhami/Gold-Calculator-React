import '../App.css'
// import './Header.css'
import mainLogo from "../assets/gold logo L.PNG";

const Header = () => {
    return (
        <header className="page-header">
            <div className="header-text">
                <h1> 0912-093-1230 </h1>
                <p className="subtitle">📞 در صورت بروز مشکل تماس یگیرید </p>
            </div>

            <a href="#" target="_blank">
                <img className="logo" src={mainLogo} alt="Logo" />
            </a>
        </header>
    );
}

export default Header;
