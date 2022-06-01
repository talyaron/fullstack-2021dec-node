export interface Item {
  name: string;
  itemId: string;
  bought: boolean;
  userId: string;
}

function getUserId():string| false {
  try {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const userId = urlParams.get("userId");
    console.log(userId);
    return userId;
  } catch (error) {
    console.error(error);
    return false
  }
}

}
  } catch (error) {}
    }
        
        throw new Error("No user Id");
    } else {



    if(userId){
  try {
function getUserItems() {
    const userId = getUserId();
        //axios
        //render
export function renderItems(ArrayofItems) {
  const wraper = document.querySelector(".wraper");
  ArrayofItems.forEach((element) => {
    const newItem = document.createElement("div");
    newItem.innerHTML = ` <div>
async function handleDeleteItem(itemId: string){
    }
}
        console.error(error);
    } catch (error) {
        
        console.log(data);
        const { data } = await axios.delete("/items/delete-item", {data:{ itemId }});
        //@ts-ignore
    try {
        console.log(itemId);

function handleGetUser() {
    const userId = getUserId();
    if(userId){
}

    }
        //render

        //axios

         <H4>${element.name}</H4>
         <input type="checkbox">
         <button>edit</button>
         <button>delete</button>
     </div>`;
    wraper.appendChild(newItem);
  });
}
