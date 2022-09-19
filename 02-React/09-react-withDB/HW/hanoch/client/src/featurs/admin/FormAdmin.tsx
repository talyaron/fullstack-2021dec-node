import React from 'react';
import axios from 'axios';
import '../../styles/admin/form.scss'

export const FormAdmin = () => {

    async function handleSubmit(ev: any){
        ev.preventDefault()
        try {
            const elm = ev.target.elements;
            const title = elm.title.value;
            const price = elm.price.valueAsNumber;
            const imgSrc = elm.imgSrc.value;
            const publish = elm.publish.checked;

            
            await axios.post('/api/products/add-product', {title, price, imgSrc, publish})
            window.location.reload()
             
            
        } catch (error) {
            console.error(error)
        } 
    }

  return (
    <div className='formDiv'>
        <h1>Add product here</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input className='boxes' type="text" name="title" placeholder='title'/>
            <input className='boxes' type="number" name="price" placeholder='price'/>
            <input className='boxes' type="text" name="imgSrc"  placeholder='url image'/> 
            <br/>
            <label className='boxes' htmlFor="publish">publish</label>
            <input type="checkbox" name="publish" />
            <input className='boxes' type="submit" value="add product" />
        </form>
    </div>
  )
}
