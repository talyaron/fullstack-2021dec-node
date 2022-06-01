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
  
  //axios
  //render
}

async function handleDeleteItem(itemId: string) {
  try {
    //@ts-ignore
    const { data } = await axios.delete("/items/delete-item", { data: { itemId },});
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
