

interface CardProps {

    name: string;
    age: string;
    imgUrl: string;

}

const Card = ({ name, age, imgUrl }: CardProps) => {

    return (

        <div className="card">
            <h1>---{name}---</h1>
            <h2>---{age}---</h2>
            <img src={imgUrl} alt="cardImg" />
        </div>
    )

};

export default Card