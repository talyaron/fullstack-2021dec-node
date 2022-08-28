import shoes from "../../assets/images/Categories/shoes.png";
import jewellery from "../../assets/images/Categories/jewellery.png";
import socks from "../../assets/images/Categories/socks.png";
import bags from "../../assets/images/Categories/bags.png";
import belts from "../../assets/images/Categories/belts.png";
import tops from "../../assets/images/Categories/tops.webp";
import bottoms from "../../assets/images/Categories/bottoms.png";
import sunglasses from "../../assets/images/Categories/sunglasses.png";

interface CatalogItemProps {
    type : string
}

const CatalogItem = ({ type }:CatalogItemProps) => {
    
    let imgUrl ;
    if (type === 'tops') {
        imgUrl = tops;
    } else if ( type === 'bottoms') {
        imgUrl = bottoms;
    } else if ( type === 'shoes') {
        imgUrl = shoes;
    } else if ( type === 'jewellery'){
        imgUrl = jewellery;
    } else if ( type === 'sunglasses') {
        imgUrl = sunglasses;
    } else if ( type === 'socks') {
        imgUrl = socks;
    } else if ( type === 'bags') {
        imgUrl = bags;
    } else if ( type === 'belts') {
        imgUrl = belts;
    } 
    
    return (
        <div className="catalog__item">
            <p>{type.toUpperCase()}</p>
            <img src={imgUrl} alt={imgUrl} />
        </div>
    );
}

export default CatalogItem;