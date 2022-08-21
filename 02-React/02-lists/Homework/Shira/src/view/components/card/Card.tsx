interface CardProps {
    name: string;
    address: string;
    age:number;

  }
  
  const Card = (props: CardProps) => {
    const { name, address, age } = props;
    return (
      <div className="card">
        <h1> {name} </h1>
        <p>{age}</p>
        <p>{address}</p>

        {/* <image>{}</image> */}
      </div>
    );
  };
  
  export default Card;
  
  