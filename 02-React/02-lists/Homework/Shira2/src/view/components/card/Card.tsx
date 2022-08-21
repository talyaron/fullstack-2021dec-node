interface CardProps {
    name: string;
    address: string;
    age:number;

  }
  
  const Card = (props: CardProps) => {
    const { name, address, age } = props;
    return (
      <div className="card">
        <p> {name} </p>
        <h2>{address}</h2>
        <h2>{age}</h2>

        {/* <image>{}</image> */}
      </div>
    );
  };
  
  export default Card;
  
  