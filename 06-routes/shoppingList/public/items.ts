import { User } from "../cont/usersCont";
import { items } from "../cont/itemsCont";

export interface Item {
  name: string;
  itemId: string;
  bought: boolean;
  userId: string;
}

export function getUserId(): string | false {
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

export async function getUserItems() {
  try {
    const userId = getUserId();
    //@ts-ignore
    const { data } = await axios.get(`/items/get-items?userId=${userId}`);
    const { items, error} = data;
    renderItems(items);

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
    console.log(findUser);
    renderUserCart(findUser);
    if(error) throw new Error('Could not get users');

  } catch (error) {
    console.error(error);
  }
}

async function handleDeleteItem(itemId: string, userId:string) {
  try {
    console.log('delete item clicked');
    //@ts-ignore
    const { data } = await axios.delete("/items/delete-item", { data: { itemId , userId}});
    console.log(data);
    const {items, error} = data;
    renderItems(items.filter((item)=> item.userId === userId));
  } catch (error) {
    console.error(error);
  }
}

export function renderItems(ArrayofItems: Array<Item>) {
  const wraper = document.querySelector(".wraper");
  wraper.innerHTML = '';
  ArrayofItems.forEach((item) => {
    const newItem = document.createElement("div");
    newItem.innerHTML = ` <div>
         <h4 style="display: inline;">${item.name}</h4>
         <input type="checkbox">
         <button>edit</button>
         <button onclick="handleDeleteItem('${item.itemId}', '${item.userId}')">delete</button>
     </div>`;
    wraper.appendChild(newItem);
  });
}

function handleRenderItems(){
  renderItems(items)
}

function renderUserCart(user: User) {
  const userNameTitle = document.querySelector('#userCart');
  userNameTitle.innerHTML = `${user.name}'s Shopping Cart`;
}

function handleLoadUserInfo(){
  getUser();
  getUserItems();
}


async function handleAddItem(){
  try {
    const newItem:HTMLInputElement =  document.querySelector("#inputNewItem");
    const newItemValue = newItem.value;
    console.log(newItemValue);
    // @ts-ignore
    const { data } = await axios.post("/items/addItem", {newItemValue});
    console.log(data)
    renderItems(data);
    if(!Array.isArray(data)) throw new Error("data should be an array ant it is not")
  } catch (error) {
    console.error(error);
  }
}


// export function handleAddItem() {
//   //@ts-ignore
//   // const { data } = await axios.get("/items/add-items");
//   // const { items, error } = data;
//   let newItem = document.getElementById("newItemInput") as HTMLInputElement;
//   // console.log(items)
//   let newItemValue = newItem.value;
//   console.log(newItem.value);
//   const newItemWrapper = document.querySelector(".newItemWrapper");
//   // newItemWrapper.innerHTML = "";
//   // ArrayofNewItems.forEach((newItems) => {
//   const newAddedItem:any = document.createElement("div");
//   newAddedItem.innerHTML += `<div>
//          <h4 style="display: inline;">${newItemValue}</h4>
//          <input type="checkbox">
//          <button>edit</button>
//    </div>`;
//   newItemWrapper.appendChild(newAddedItem);
//  }
