import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import BrowseCatalogItems from "./BrowseCatalogItems";

const { v4: uuidv4 } = require('uuid');

interface BrowseCatalogProps {
    type: string,
}

const BrowseCatalog = ({ type }: BrowseCatalogProps) => {
    const headerTitle = `${type} Catalog`;
    const catalogItems = [
        {
            type: "tops",
            subType: "T-Shirts",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Long Sleeves",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Sweaters",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Button Down",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Knitwears",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Jackets",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Hoodies",
            id: uuidv4()
        },
        {
            type: "tops",
            subType: "Coats",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Cargo Pants",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Sweatpants",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Jeans",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Skinny Jeans",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Suit Pants",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Shorts",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Active Shorts",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Sport Pants",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Sleeping Pants",
            id: uuidv4()
        },
        {
            type: "bottoms",
            subType: "Sweamming Pants",
            id: uuidv4()
        },
        {
            type: "shoes",
            subType: "Sneackers",
            id: uuidv4()
        },
        {
             type: "shoes",
             subType: "Running Shoe",
             id: uuidv4()
        },
        {
            type: "shoes",
            subType: "Boots",
            id: uuidv4()
        },
        {
            type: "shoes",
            subType: "Oxford",
            id: uuidv4()
        },
        {
            type: "shoes",
            subType: "Derby",
            id: uuidv4()
        },
        {
            type: "shoes",
            subType: "Blucher",
            id: uuidv4()
        },
        {
            type: "shoes",
            subType: "Loafer",
            id: uuidv4()
        },
        {
            type: "shoes",
            subType: "Monk",
            id: uuidv4()
        },
        {
            type: "shoes",
            subType: "Flip Flops",
            id: uuidv4()
        },
        {
            type: "shoes",
            subType: "Slides",
            id: uuidv4()
        },




    ];
    return (
        <div className="browse-catalog">
            <div className="browse-catalog__header">
                <Link to="/" className="browse-catalog__header__back">
                    <FontAwesomeIcon icon={faAngleLeft} size="2x" color="#fff" />
                </Link>
                <h2 className="browse-catalog__header__title">{headerTitle.toLocaleUpperCase()}</h2>
            </div>
            <div className="browse-catalog__grid">
                {catalogItems.map(item => {
                    const url = `/${item.subType}`;
                    if (item.type === type)
                        return (
                            <Link to={url} key={item.id}>
                                <BrowseCatalogItems type={item.subType} key={item.id} backType={item.type}/>
                            </Link>
                        );
                })}
            </div>

        </div>
    );
}

export default BrowseCatalog;