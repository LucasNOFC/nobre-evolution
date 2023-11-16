import { Link } from "react-router-dom";

import "./Links.modules.css";

const Links = ({Text, Path, Pathname}) => {

    return(
        <Link className={`
            ${"link"}
            ${Pathname ===  Path ? "linkInUse" : ""}
            `}
            to={Path}
        >
                    {Text}
        </Link>
    );
}

export default Links;