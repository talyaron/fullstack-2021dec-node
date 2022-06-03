export interface Item {
  name: string;
  itemId: string;
  bought: boolean;
  userId: string;
}

function getUserId(): string | false {
  try {
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const userId = urlParams.get("userId");
    console.log(userId);
    return userId;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function getUserItems() {
  const userId = getUserId();
  console.log(userId)
  //axios
  //render
}
function handleLoad(){
    try {
        getUserItems()
        // getUser()
    } catch (error) {
    console.error(error);
    }
}

function getUser(){
    try {
        const userId = getUserId();
        // get the user from Id

        //render name of user to screen
    } catch (error) {
        
    }
}

async function handleDeleteItem(itemId: string) {
  try {
    const { data } = await axios.delete("/items/delete-item", {
      data: { itemId },
    });
  } catch (error) {
    console.error(error);
  }
}

export function renderItems(ArrayofItems) {
  const wraper = document.querySelector(".wraper");
  ArrayofItems.forEach((element) => {
    const newItem = document.createElement("div");
    newItem.innerHTML = ` <div>
         <H4>${element.name}</H4>
         <input type="checkbox">
         <button>edit</button>
         <button>delete</button>
     </div>`;
    wraper.appendChild(newItem);
  });
}


async function handleAddItem(){
  try {
    const newItem = document.querySelector("#inputNewItem").innerHTML;
    // @ts-ignore
    const { data } = await axios.post("/items/addItem", {newItem});
    renderItems(data.body);
    if(!Array.isArray(data)) throw new Error("data should be an array ant it is not")
  } catch (error) {
    console.error(error);
  }
}


