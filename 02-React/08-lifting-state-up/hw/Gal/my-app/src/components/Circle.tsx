interface BackgroundColorProps {
  setBackgroundColor: Function;
  backgroundColor: string;
}

const Circle1 = ({ backgroundColor,setBackgroundColor }: BackgroundColorProps) => {
  function handleClick() {
    setBackgroundColor(backgroundColor)
  }

  return (
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: `${backgroundColor}` }}
        onClick={handleClick}>
        {backgroundColor}
      </div>
    </div>
  );
};

export default Circle1;
