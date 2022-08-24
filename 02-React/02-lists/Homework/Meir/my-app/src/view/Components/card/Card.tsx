interface CardProps{
    name:string;
    adress:string;
    dog:string;
}

const Card = ({name, adress, dog}:CardProps) => {
    
  return (
    <div className="card">
       <h2>{name}</h2>
       <p>{adress}</p>
       <p>{dog}</p>
    </div>
  )
} 
 
export default Card