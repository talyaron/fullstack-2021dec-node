import {User} from '../model/userModel';
import {Item} from '../model/itemModel'

export function renderItems (ArrayofItems){
    const wraper= document.querySelector(".wraper")
     ArrayofItems.forEach(element => {
         const newItem= document.createElement('div')
         newItem.innerHTML= ` <div>
         <H4>${element.name}</H4>
         <input type="checkbox">
         <button>edit</button>
         <button>delete</button>
     </div>`
         wraper.appendChild(newItem)
     });
 }
 
