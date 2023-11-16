import Links from "../Links/Links";
import { useLocation } from "react-router-dom";
import "./Header.modules.css";


const Header = () => {

    const location = useLocation();

    const linksHeader = [{
        Path: "/",
        Pathname: `${location.pathname}`,
        Message: "Start",
    }, {
        Path: "/about-me",
        Pathname: `${location.pathname}`,
        Message: "About Me",
    }]

    return (

        
        <header>
            <nav className="navegacao">
                {linksHeader.map((link, index) => 
                <Links
                key={index}
                Text={link.Message}
                Path={link.Path}
                Pathname = {link.Pathname}
                />)}
            </nav>
        </header>
    )
}

export default Header;