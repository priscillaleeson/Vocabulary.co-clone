export const LeftCursor = (props) => {
  return (
    <div className="cursor">
      <div
        className="left-side-cursor"
        style={{ transform: `translate(${props.mouseX}, ${props.mouseY})` }}
      >
        <div>Previous</div>
      </div>
    </div>
  );
};

export const RightCursor = (props) => {
  return (
    <div className="cursor">
      <div
        className="right-side-cursor"
        //style={{ transform: "translate(props.mouseX, props.mouseY)" }}
      >
        <div>Next</div>
      </div>
    </div>
  );
};
