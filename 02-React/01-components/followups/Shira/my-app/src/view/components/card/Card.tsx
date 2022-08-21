interface CardProps {
    text: string;
    title: string;
  }
  
  const Card = (props: CardProps) => {
    const { text, title } = props;
    return (
      <div className="card">
        <p> {title} </p>
        <h2>{text}</h2>
        {/* <image>{}</image> */}
      </div>
    );
  };
  
  export default Card;
  
  