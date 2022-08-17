interface CardProps{
    text:string;
    tittle:string;
}

const Card = ({text, tittle}:CardProps) => {
    
  return (
    <div className="card">
       <h2>{tittle}</h2>
       <p>{text}</p>
    </div>
  )
} 
 
export default Card