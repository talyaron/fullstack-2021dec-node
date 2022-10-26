import React, { useState } from 'react';
import axios from 'axios';
import { CardAdmin} from './CardAdmin';
import {product} from '../user/ProductsModel'
import { FormAdmin } from './FormAdmin';
import { DisplayCardAdmin } from './DisplayCardAdmin';
import { UpdateCard } from './UpdateCard';


export const SetProducts = () => {

  const [displayWindow, setDisplayWindow] = useState<boolean>(false);
  const [_id, setId ] = useState<string>('');
  console.log(displayWindow);
  

   
    

  return (
    <div>
        <FormAdmin/>
        <DisplayCardAdmin setDisplayWindow={setDisplayWindow} setId={setId}/>
        {displayWindow && <UpdateCard _id={_id} setDisplayWindow={setDisplayWindow}/>}

    </div>
  )
}
