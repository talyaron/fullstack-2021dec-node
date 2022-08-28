import { useState } from "react";
import { Link } from "react-router-dom";

interface BrowseSubTypeItem {
    item: item
}

interface item {
    type: string,
    id: any,
    imgSrc: string,
    imgSrc2: string,
    price: number,
    description: string
}

const BrowseSubTypeItem = ({ item }: BrowseSubTypeItem) => {

    const [imgUrl, setImgUrl] = useState(item.imgSrc);

    function handleMouseEnter() {
        setImgUrl(item.imgSrc2);
    }
    function handleMouseLeave() {
        setImgUrl(item.imgSrc);
    }
    function handleItem() {
        console.log(`clicked on ${item.id}`);
    }
    return (
        <Link to={item.id}>
            <div className="browse-subtype__item" onClick={handleItem}>
                <div className="item-container">
                    <img src={item.imgSrc} className="normal" alt={item.type}
                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    />
                    <img src={item.imgSrc2} className="hover" alt={item.type}
                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    />
                </div>
                <p className="browse-subtype__item__description">{item.description}</p>
                <p className="browse-subtype__item__price">{item.price}$</p>
            </div>
        </Link>
    );
}

export default BrowseSubTypeItem;