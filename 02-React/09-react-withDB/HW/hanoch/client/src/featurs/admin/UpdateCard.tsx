import axios from 'axios';
import React, { useEffect, useState, useContext, createContext, FC } from 'react';
import '../../styles/admin/update.scss'





export const UpdateCard:FC<{_id:string, setDisplayWindow:Function}> = ({_id, setDisplayWindow}) => {
    
    const handleUpdate = async (ev:any)=>{
        

        const id = _id;
        const elm = ev.target.elements;
        const title = elm.title.value;
        const price = elm.price.valueAsNumber;
        const imgSrc = elm.imgSrc.value;
        await axios.patch('/api/products/update-product', {id, title, price, imgSrc});
        


    }
    
   

return (
    <div className='update'>
        <form className='formUp' onSubmit={handleUpdate}>
            <input type="text" name="title" placeholder='title' />
            <input type="number" name="price" placeholder='price'/>
            <input type="text" name="imgSrc" placeholder='img url'/>
            <div className='button'>
            <input className='buttons' type="submit" value="update" onClick={ handleUpdate}  />
            <button className='buttons' onClick={() => setDisplayWindow(false)}>cancel</button>
            </div>
        </form>
    </div>
  )

}
