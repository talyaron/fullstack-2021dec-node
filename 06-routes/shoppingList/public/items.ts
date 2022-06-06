export interface Item{
    name:string;
    itemId:string;
    bought:boolean;
    userId:string;
};


// function handleGetUser() {
//     const queryString = window.location.search;
//     console.log(queryString);

//     const urlParams = new URLSearchParams(queryString);

//     const userId = urlParams.get('userId');
//     console.log(userId);
// }

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
 


 /////// Search items

const form = document.querySelector('#searchForm');

async function handleSearchItems(event) {
    try {
    event.preventDefault();
    const searchedItem = event.target.search.value;
    const filterBy = event.target.filteroption.value
    const { data } = await axios.post('/items/searchItems', { searchedItem , filterBy});
    const result = data;
    const resultContainer = document.querySelector('.resultcontainer');
    let html = `<h2>${result.length} results found</h2>`;
    result.forEach(item => {
        html += `<p>Item: ${item.name}</p>`
    });
    resultContainer.innerHTML = html;
    } catch (error) {
        console.error(error);
      }
}

async function handleGetItems() {
    const { data } = await axios.get('/items/getAllItems');
    const items = data;
}