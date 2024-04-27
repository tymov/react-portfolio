const Glitches = ({ text, textSize, color, rotation }) => {
  const style = {
    fontSize: textSize,
    color: color,
    transform: `rotate(${rotation}deg)` // Apply rotation based on the prop
  };

  return <div className="glitch" style={style}>{text}</div>;
};

export default Glitches;
