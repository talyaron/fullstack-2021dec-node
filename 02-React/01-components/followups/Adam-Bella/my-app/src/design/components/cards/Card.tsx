interface CardProps {
    heading : string,
    bio : string,
    tag : string
}

const Card = ({heading, tag, bio} : CardProps) => {
    return (
        <div className='card'>
            <h3>{heading}</h3>
            <p>{bio}</p>
            <div className='wrapper-tag'>
                <span className='tag'>{tag}</span>
                <span className='tag'>{tag}</span>
                <span className='tag'>{tag}</span>
            </div>
        </div>
    )
}

export default Card