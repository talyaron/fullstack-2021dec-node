interface CardProps {
  breed: string,
    country: string,
    origin: string,
    coat: string,
    pattern: string
  }


const Card = ({ breed, country, origin, coat, pattern }: CardProps) => {

  return (
    <div className="card">
      
      <h4>{breed}</h4>
      <h4>{country}</h4>
      <h4>{origin}</h4>
      <h4>{coat}</h4>
      <h4>{pattern}</h4>
     
    </div>
  );
};

export default Card;
