import {useParams} from 'react-router-dom';

import {products, ProductsProps} from '../products/Products';

const Product = () => {
    const {productId} = useParams();
    const product = getProduct(productId, products);
    return (
        <div>Product: {product?product.name:null}</div>
    )
}

export default Product

function getProduct(
    productId:string|undefined,
     products:ProductsProps[]
     ):ProductsProps|undefined{
  if(productId) {
    return products.find((prd) => prd.id === productId);
  } else {
    return undefined
  }
}
