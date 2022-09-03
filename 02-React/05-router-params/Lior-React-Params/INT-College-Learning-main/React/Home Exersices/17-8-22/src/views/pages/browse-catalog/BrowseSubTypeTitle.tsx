import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface BrowseSubTypeTitle {
    type:string,
    backType : string
}

const BrowseSubTypeTitle = ({type, backType}: BrowseSubTypeTitle) => {
    const backTo = `/${backType}`;
    return (
        <div className="browse-subtype__title">
            <Link to={backTo}>
                <FontAwesomeIcon className="browse-subtype__title__icon" icon={faAngleLeft} size="2x" color="#fff" />
            </Link>
            <h2>{type.toLocaleUpperCase()}</h2>
        </div>
    );
}

export default BrowseSubTypeTitle;