
interface CardProps{
  heading: string,
  tag: string
}

const Card = ({heading, tag}:CardProps) => {
  return (
    <div className='card'>{heading} <span className='tag'>{tag}</span></div>
  )
}

export default Card