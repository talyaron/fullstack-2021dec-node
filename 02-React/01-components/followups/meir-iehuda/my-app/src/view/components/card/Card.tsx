interface CardProps{
    text:string;
    src:string;
}
const Card = ({text, src}:CardProps) => {
    return (
        <div className="card">
            <h2>{text}</h2>
            <img src={src}></img>
        </div>
    )
}

export default Card