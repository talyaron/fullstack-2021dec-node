interface CardProps{
    text: String
}

const card = ({text}:CardProps)=>{
    return (
        <div className='card'>{text}</div>
      )
}
export default card 