import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {displayWindow, sendId} from './setUpdate'

export const UpdateCard = () => {
    const [isTrue , setIsTrue] = useState<boolean>(true);
    useEffect(()=>{
        setIsTrue(displayWindow)
    },[displayWindow])
    
    
    const handleUpdate = async (ev:any)=>{

        const id = sendId;
        const elm = ev.target.elements;
        const title = elm.title.value;
        const price = elm.price.valueAsNumber;
        const imgSrc = elm.imgSrc.value;
        await axios.patch('/api/products/update-product', {id, title, price, imgSrc});
        await displayWindow(false)


    }
    const handleCancel = ()=>{
        displayWindow(false)
    }
 if(isTrue === true) {return (
    <div className='update'>
        <form onSubmit={handleUpdate}>
            <input type="text" name="title"  />
            <input type="number" name="price" />
            <input type="text" name="imgSrc" />
            <input className='buttons' type="submit" value="update" onClick={handleUpdate} />
            <button className='buttons' onClick={handleCancel}>cancel</button>
        </form>
    </div>
  )} else return null
}
