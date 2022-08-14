interface CardProps {
    name: string;
    text: string;
  }
  
  const Card = ({ name, text }: CardProps) => {
  
    return (
      <div className="card">
        <h2> -- {name} -- </h2>
        <p>{text}</p>
      </div>
    );
  };
  
  export default Card;
  