interface BackgroundColorProps {
  changeBackgroundColor4: Function;
  backgroundColor4: string;
}

const Circle4 = ({
  changeBackgroundColor4,backgroundColor4}: BackgroundColorProps) => {

  function handleClick() {
    changeBackgroundColor4();
  }

  return (
    <div className="godDiv">
      <div
        className="backgroundColor"
        style={{ backgroundColor: ` ${backgroundColor4}` }}
        onClick={handleClick}
      >
        {backgroundColor4}
      </div>
    </div>
  );
};

export default Circle4;