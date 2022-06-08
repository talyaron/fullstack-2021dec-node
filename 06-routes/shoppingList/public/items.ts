import { User } from "../cont/usersCont";
// import { items } from "../cont/itemsCont";

interface Item {
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
    const { data } = await axios.get(`/items/get-items?userId=${userId}`);
    const { items, error } = data;
    console.log(items)
    renderItems(items);

    if (error) throw new Error("Items was not found!");
  } catch (error) {
    console.error(error);
  }
}

async function getUser() {
  try {
    const userId = getUserId();
    //@ts-ignore
    const { data } = await axios.post("/users/get-user",{userId});
    const { user, error } = data;
    
    console.log(user);
    renderUser(user);
    if (error) throw new Error("Could not get users");
  } catch (error) {
    console.error(error);
  }
}

function renderItems(items: Array<Item>) {
  console.log(items)
  const rootList = document.querySelector("#rootList");
  let html = "";
  items.forEach((item) => {
    const newItem = document.createElement("div");
    html += `<div class="screen__card-wrapper ">
    <h4 class="screen__title-h4 ">${item.name}</h4>
    <div class="screen__card-wrapper__actions ">
        <img class="screen__card-wrapper__actions__icon " src=" ./icons/pencil.svg " alt="edit ">
        <img class="screen__card-wrapper__actions__icon " src="./icons/trash.svg " alt="delete ">
    </div>
</div>`;
    rootList.innerHTML = html;
  });

  // wraper.innerHTML += `<button onclick="handleAddItem()">handleAddItem---${items[0].userId}-----------</button>`;
}

function handleRenderItems() {
  renderItems(items);
}

async function handleDeleteItem(itemId: string, userId: string) {
  try {
    console.log("delete item clicked");
    //@ts-ignore
    const { data } = await axios.delete("/items/delete-item", {
      data: { itemId, userId },
    });
    console.log(data);
    const { items, error } = data;
    renderItems(items.filter((item) => item.userId === userId));
  } catch (error) {
    console.error(error);
  }
}

function renderUser(user: User) {
  const userNameTitle = document.querySelector("#userTitle");
  userNameTitle.innerHTML = `${user.name}'s grocery list:`;
}





async function handleAddItem() {
  try {
    const newItem: HTMLInputElement = document.querySelector("#inputNewItem");
    const newItemValue = newItem.value;
    console.log(newItemValue);

    const userId = getUserId();

    // @ts-ignore
    const { data } = await axios.post("/items/addItem", {
      newItemValue,
      userId,
    });
    console.log(data);
    renderItems(data.items);
    if (!Array.isArray(data.items))
      throw new Error("data should be an array ant it is not");
  } catch (error) {
    console.error(error);
  }
}

/////// Search items

const form = document.querySelector("#searchForm");

async function handleSearchItems(event) {
  try {
    event.preventDefault();
    const userId = getUserId();
    const searchedItem = event.target.search.value;
    const filterBy = event.target.filteroption.value;
    
    //@ts-ignore

    const { data } = await axios.post("/items/searchItems", {
      searchedItem,
      filterBy,
      userId
    });
    const result = data;
    console.log('test')
    console.log(result)
    renderItems(result)
  } catch (error) {
    console.error(error);
  }
}

async function handleGetItems() {
  //@ts-ignore

  const { data } = await axios.get("/items/getAllItems");
  const items = data;
}

function handleLoad() {
  try {
    getUserItems();
    getUser();
  } catch (error) {
    console.error(error);
  }
}
