interface CardProps {
    text: string;
    title: string;
  }
  
  const Card = ({ text, title }: CardProps) => {
  
    return (
      <div className="card">
        <h2> -- {title} -- </h2>
        <p>{text}</p>
      </div>
    );
  };
  
  export default Card;
  