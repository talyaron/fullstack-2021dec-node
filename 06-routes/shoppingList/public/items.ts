import { User } from "../cont/usersCont";

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

async function getUserItems() {
  try {
    const userId = getUserId();
    //@ts-ignore
    const { data } = await axios.get('/items/get-items');
    const { items, error} = data;
    const userItems = items.filter(item => item.userId === userId)
    console.log(userItems);
    renderItems(userItems)
    // renderUserItems(userItems)
    if(error) throw new Error('Items was not found!');
  } catch (error) {
    console.error(error)
  }
}

async function getUser(){
  try {
    const userId = getUserId()
    //@ts-ignore
    const { data } = await axios.get('/users/get-users');
    const { users, error} = data;
    const findUser = users.find(user => user.userId === userId)
    renderUserCart(findUser);
    if(error) throw new Error('Could not get users');

  } catch (error) {
    console.error(error);
  }
}

async function handleDeleteItem(itemId: string) {
  try {
    console.log('delete item clicked');
    //@ts-ignore
    const { data } = await axios.delete("/items/delete-item", { data: { itemId },});
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export function renderItems(ArrayofItems: Array<Item>) {
  const wraper = document.querySelector(".wraper");
  ArrayofItems.forEach((item) => {
    const newItem = document.createElement("div");
    newItem.innerHTML = ` <div>
         <h4 style="display: inline;">${item.name}</h4>
         <input type="checkbox">
         <button>edit</button>
         <button>delete</button>
     </div>`;
    wraper.appendChild(newItem);
  });
}

function renderUserCart(user: User) {
  const userNameTitle = document.querySelector('#userCart');
  userNameTitle.innerHTML = `${user.name}'s Shopping Cart`;
}

function handleLoadUserInfo(){
  getUser();
  getUserItems();
}