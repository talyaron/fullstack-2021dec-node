import { Link } from "react-router-dom";
import CatalogItem from "./CatalogItem";
const { v4: uuidv4 } = require('uuid');


const Catalog = () => {
    const catalog = [
        {
            type: 'tops',
            id: uuidv4()
        },
        {
            type: 'bottoms',
            id: uuidv4()
        },
        {
            type: 'shoes',
            id: uuidv4()
        },
        {
            type: 'socks',
            id: uuidv4()
        },
        {
            type: 'jewellery',
            id: uuidv4()
        },
        {
            type: 'sunglasses',
            id: uuidv4()
        },
        {
            type: 'bags',
            id: uuidv4()
        },
        {
            type: 'belts',
            id: uuidv4()
        }
    ]
    return (
        <div className="catalog">
            {catalog.map(item => {
                return (
                    <Link to={`${item.type}`} key={item.id}>
                        <CatalogItem type={item.type} key={item.id} />
                    </Link>
                );
            })}
        </div>
    );
}

export default Catalog;