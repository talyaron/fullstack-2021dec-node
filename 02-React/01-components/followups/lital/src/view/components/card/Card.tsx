interface CardProps{
  id:string;
    text:string;
    title:string;
    img:string;
}

const Card =({text, title, img}:CardProps) =>{
  return (
    <div  className='card'>
        <p>{title}</p>
        <h2>{text}</h2> 
        <img src={img} alt="" />
    </div>

  )
}

export default Card