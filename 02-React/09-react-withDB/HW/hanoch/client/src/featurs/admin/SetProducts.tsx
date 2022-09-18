import React from 'react';
import axios from 'axios';
import { CardAdmin} from './CardAdmin';
import {product} from '../user/ProductsModel'
import { FormAdmin } from './FormAdmin';
import { DisplayCardAdmin } from './DisplayCardAdmin';
import { UpdateCard } from './UpdateCard';


export const SetProducts = () => {

   
    

  return (
    <div>
        <FormAdmin/>
        <DisplayCardAdmin/>
        <UpdateCard/>

    </div>
  )
}
