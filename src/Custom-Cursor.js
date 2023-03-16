export const LeftCursor = (props) => {
  return (
    <>
      <div
        className="left-side-cursor"
        ref={props.cursorref}
        style={{
          position: "fixed",
          opacity: props.opacity,
          top: 0,
          left: 0,
        }}
      >
        <div>Previous</div>
      </div>
    </>
  );
};

export const RightCursor = (props) => {
  return (
    <>
      <div
        className="right-side-cursor"
        ref={props.cursorref}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          opacity: props.opacity,
        }}

        //style={{ transform: `translate(${props.mouseX}, ${props.mouseY})` }}
      >
        <div>Next</div>
      </div>
    </>
  );
};
