import React from 'react';
import axios from 'axios';

export const SetProducts = () => {

   async function handleSubmit(ev: any){
        ev.preventDefault()
        try {
            const elm = ev.target.elements;
            const title = elm.title.value;
            const price = elm.price.valueAsNumber;
            const imgSrc = elm.imgSrc.value;
            const publish = elm.publish.value;

            const {data} = await axios.post('/api/products/add-product', {title, price, imgSrc, publish})
            console.log(data);
            
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" />
            <input type="number" name="price" />
            <input type="text" name="imgSrc"  />
            <input type="checkbox" name="publish" />
            <input type="submit" value="add product" />
        </form>
    </div>
  )
}
