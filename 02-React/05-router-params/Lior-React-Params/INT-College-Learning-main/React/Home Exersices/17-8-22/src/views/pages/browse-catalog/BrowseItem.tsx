import { Link, useParams } from "react-router-dom";
import { items, Items } from "./BrowseSubType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const BrowseItem = () => {
    const {productId} = useParams();
    const product = getProduct(productId, items);
    const backUrl = `/${product?.type}`;
    console.log(productId);
    return (
        <div className="browse-item">
            <div className="browse-item__image">
                <img src={product?.imgSrc} alt={product?.imgSrc} />
                <Link to={product? backUrl : '/'}><FontAwesomeIcon className="icon" icon={faAngleLeft} size="2x" color="#000" /></Link>
            </div>
            <div className="browse-item__info">
                <p>{product?.description}</p>
                <p className="browse-item__info__price">{product?.price}$</p>
            </div>
        </div>
    );
}

function getProduct(productId :string | undefined, products:Array<Items>) {
    try {
        return products.find(product => product.id === productId)
    } catch (error) {
        console.error(error);
    }
} 

export default BrowseItem;