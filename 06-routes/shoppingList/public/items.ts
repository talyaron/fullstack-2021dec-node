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
