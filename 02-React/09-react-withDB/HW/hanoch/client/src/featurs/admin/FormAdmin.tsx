import React from 'react';
import axios from 'axios';

export const FormAdmin = () => {

    async function handleSubmit(ev: any){
        ev.preventDefault()
        try {
            const elm = ev.target.elements;
            const title = elm.title.value;
            const price = elm.price.valueAsNumber;
            const imgSrc = elm.imgSrc.value;
            const publish = elm.publish.checked;

            console.log(publish);
            const {data} = await axios.post('/api/products/add-product', {title, price, imgSrc, publish})
            console.log(data);
             
            
        } catch (error) {
            console.error(error)
        } 
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder='title'/>
            <input type="number" name="price" placeholder='price'/>
            <input type="text" name="imgSrc"  placeholder='url image'/>
            <input type="checkbox" name="publish" />
            <input type="submit" value="add product" />
        </form>
    </div>
  )
}
