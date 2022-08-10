
interface CardProps{
    text:string
}

const Card = ({text}:CardProps) => {
  return (
    <div className='card'>{text}</div>
  )
}

export default Card