import "./Banner.modules.css"
import circle from "../../assets/circle.png"
import batman from "../../assets/batman.png"

const Banner = () => {
    return(
        <div className="banner">
            <div className="apresentacao">
                <h1 className="titulo">
                    Welcome to the Nobre Evolution
                </h1>

                <p className="paragrafo">
                    Transform yourself into the best version of yourself now,
                    through this guide, you will be able to learn and discover new ways to overcome yourself
                    in your everyday problems.
                </p>
            </div>
            <div className="images">
                    <img 
                    className="circle" 
                    src={circle} 
                    alt="Logo Nobre Evolution"
                    aria-hidden={true}/>

                    <img
                    className="batmanProfile"
                    src={batman}
                    alt="Batman symbol"
                    />
                </div>
        </div>
    );
}

export default Banner;