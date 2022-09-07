import {useParams} from 'react-router-dom';
import { Product} from '../products/Products';

import {products} from '../products/Products';

const Product = () => {
    const {productId} = useParams();
    const product = getProduct(productId, products);
    return (
        <div>Product: {productId}</div>
    )
}

export default Product

function getProduct(
    productId:string|undefined,
     products:Product[]):Product|undefined{
  if(productId) {
    return products.find(prd=>prd.id === productId);
  } else {
    return undefined
  }
}
