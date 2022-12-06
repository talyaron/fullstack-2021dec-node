import axios from "axios";


const Search=()=>{
    function getUserId(): string | false {
        try {
          const queryString = window.location.search;
          const urlParams = new URLSearchParams(queryString);
          const data = urlParams.get("userId");
          console.log(queryString, urlParams, data)
          return data;
        } catch (error) {
          console.error(error);
          return false;
        }
      }
      
   async function handleSearch(ev:any){
    ev.preventDefault();
    const user_id= getUserId()
    let search= ev.target[0].value;
    console.log(search)
    const response = await axios.post('/api/home/search',{search});
        // The value we return becomes the `fulfilled` action payload
        const data= response.data.result
        console.log(data[0]);
        if (data){
        window.location.href= `../searchResult?data=${data[0].movie_id}&userId=${user_id}`
   };
}
    return(
        <div>
            <form onSubmit={handleSearch}>
                <input type="search" name="search" placeholder="search movie by name" />
                <button type="submit">search</button>
            </form>
        </div>

    )
}
export default Search;