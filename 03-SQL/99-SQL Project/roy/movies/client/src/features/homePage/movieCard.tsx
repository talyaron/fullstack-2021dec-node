
     export interface CardProps {
        movie_id:string,
        imgUrl?: string,
        movie_name: string,
        year?: string,
        type?: string,
        director?: string,
        studio?: string,
      }


      const Card = ({ movie_id,imgUrl, movie_name, year, type, director, studio }: CardProps) => {
        return (
          <div className="card">
            <img src={imgUrl} alt=""/>
            <h1>{movie_name}</h1>
            <h2>{year}</h2>
            <h2>{type}</h2>
            <h2>{director}</h2>
            <h2>{studio}</h2>
          </div>
        );
      };

      export default Card;

