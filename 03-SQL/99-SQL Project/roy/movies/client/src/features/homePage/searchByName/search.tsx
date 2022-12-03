import { useAppDispatch } from "../../../app/hooks"
import { searchAsync } from "../homeApi";



const Search=()=>{
    const dispatch= useAppDispatch();
    function handleSearch(ev:any){
    ev.preventDefault();
    console.dir(ev.target)
    let search= ev.target[0].value;
    console.log(search)
    dispatch(searchAsync({search}));

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
export default Search