import './view/styles/card.scss';
interface CardProps{
    src:string
}

const Card = ({src}:CardProps) => {
  return (
    <img className='card' alt="img" src={src}></img>
  )
}

export default Card