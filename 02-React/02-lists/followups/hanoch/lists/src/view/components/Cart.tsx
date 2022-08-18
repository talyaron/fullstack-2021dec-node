
import '../styles/card.scss';



function Card(props:any){
    
   return (<div className='cardDiv'>
        <h1>{props.title}</h1>
        <h3>{props.text}</h3>
    </div>)
};
export default Card;
