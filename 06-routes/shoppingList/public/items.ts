export interface Item{
    name:string;
    itemId:string;
    bought:boolean;
    userId:string;
};


function handleGetUser() {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const userId = urlParams.get('userId');
    console.log(userId);
}

async function handleDeleteItem(itemId: string){
    try {
        console.log('Delete Button Clicked');
        console.log(itemId);
        //@ts-ignore
        const { data } = await axios.delete("/items/item-delete", {data:{ userId }});
        console.log(data);

    } catch (error) {
        console.error({error: error.message});
    }
}

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
 
