interface CardProps{
    breeds:string;
    
}

const Card = ({breeds}:CardProps) => {
    
  return (
    <div className="card">
       <h3>{breeds}</h3>
    </div>
  )
} 
 
export default Card