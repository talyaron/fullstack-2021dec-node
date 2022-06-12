import { User } from '../cont/usersCont';
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
		const urlParams = new URLSearchParams(queryString);
		const userId = urlParams.get('userId');
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
		renderItems(items);

		if (error) throw new Error('Items was not found!');
	} catch (error) {
		console.error(error);
	}
}

async function getUser() {
	try {
		const userId = getUserId();
		//@ts-ignore
		const { data } = await axios.post('/users/get-user', { userId });
		const { user, error } = data;
		renderUser(user);
		if (error) throw new Error('Could not get users');
	} catch (error) {
		console.error(error);
	}
}

function renderItems(items: Array<Item>) {
	const rootList = document.querySelector('#rootList');
	let html = '';
	items.forEach((item) => {
		const newItem = document.createElement('div');
		html += `<div class="screen__card-wrapper ">
    <h4 class="screen__title-h4 ">${item.name}</h4>
    <div class="screen__card-wrapper__actions ">
        <img id="${item.itemId}" class="screen__card-wrapper__actions__icon" src="./icons/trash.svg " alt="delete" onclick="handleDeleteItem(event)">
        <label class="checkbox">
    <input type="checkbox" />
    <svg viewBox="0 0 21 18">
        <symbol id="tick-path" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
        </symbol>
        <defs>
            <mask id="tick">
                <use class="tick mask" href="#tick-path" />
            </mask>
        </defs>
        <use class="tick" href="#tick-path" stroke="currentColor" />
        <path fill="white" mask="url(#tick)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
    </svg>
    <svg class="lines" viewBox="0 0 11 11">
        <path d="M5.88086 5.89441L9.53504 4.26746" />
        <path d="M5.5274 8.78838L9.45391 9.55161" />
        <path d="M3.49371 4.22065L5.55387 0.79198" />
    </svg>
</label>
        </div>
</div>`;
		
	});
  rootList.innerHTML = html;
	// wraper.innerHTML += `<button onclick="handleAddItem()">handleAddItem---${items[0].userId}-----------</button>`;
}

function handleRenderItems() {
	renderItems(items);
}

// itemId: string, userId: string
async function handleDeleteItem(event) {
	try {
    const userId = getUserId();
    const itemId = event.target.id;
		//@ts-ignore
		 const { data } = await axios.delete('/items/delete-item', {
		 	data: { itemId, userId }
		 });

     const {items} = data;
     renderItems(items)
		// const { items, error } = data;
		// renderItems(items.filter((item) => item.userId === userId));
	} catch (error) {
		console.error(error);
	}
}

function renderUser(user: User) {
	const userNameTitle = document.querySelector('#userTitle');
	userNameTitle.innerHTML = `${user.name}'s grocery list:`;
}

async function handleAddItem(event) {
	try {
    event.preventDefault();
    const itemToAdd = event.target.addItem.value;
		const userId = getUserId();
		//@ts-ignore
		const { data } = await axios.post('/items/addItem', {
      itemToAdd,
			 userId
		 });
     const { items } = data;
		renderItems(items);
		// if (!Array.isArray(data.items)) throw new Error('data should be an array ant it is not');
	} catch (error) {
		console.error(error);
	}
}

/////// Search items

const form = document.querySelector('#searchForm');

async function handleSearchItems(event) {
	try {
		event.preventDefault();
		const userId = getUserId();
		const searchedItem = event.target.search.value;
		const filterBy = event.target.filteroption.value;

		//@ts-ignore
		const { data } = await axios.post('/items/searchItems', {
			searchedItem,
			filterBy,
			userId
		});
		const filtereditems  = data;
		renderItems(filtereditems);
	} catch (error) {
		console.error(error);
	}
}

async function handleGetItems() {
	//@ts-ignore

	const { data } = await axios.get('/items/getAllItems');
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
