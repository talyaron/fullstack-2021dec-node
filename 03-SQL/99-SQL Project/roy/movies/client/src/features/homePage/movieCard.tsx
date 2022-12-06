import axios from "axios";
import { CardProps } from "./getall/getAll";
import { getData, getUserId } from "./model";

     


const Card = ({ movie_id,imageurl, movie_name, year, type, director, studio }: CardProps) => {
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
        function goToPage(ev){
          ev.preventDefault();
          const user_id= getUserId()
          const data=ev.target.alt
          console.dir(data)
          window.location.href= `../searchResult?data=${data}&userId=${user_id}`
        };
        function goToFav(){
          const user_id= getUserId()
      
          window.location.href= `../presentFav?userId=${user_id}`
        };
        async function addFav(){
          const movie_id= getData();
          const user_id= getUserId();
          const add= await axios.post('/api/home/add',{movie_id,user_id});
          console.dir(add);

        }

        return (
          <div className="card" >
            <img src={imageurl} alt={movie_id} onClick={goToPage}/>
            <h1 >{movie_name}</h1>
            <h2>{year}</h2>
            <h2>{type}</h2>
            <h2>{director}</h2>
            <h2>{studio}</h2>
            <button type="submit" onClick={addFav}>Add To my Favorites</button>
            <button type="submit" onClick={goToFav}>go To my Favorites</button>
          </div>
        );
      };

      export default Card;

