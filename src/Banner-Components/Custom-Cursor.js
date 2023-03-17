
export const CustomCursor = (props) => {
  return (
    <>
      <div
        className="cursor"
        ref={props.cursorref}
        style={{
          position: "fixed",
          opacity: props.opacity,
          top: 0,
          left: 0,
        }}
      >
        <div>{props.cursorname}</div>
      </div>
    </>
  );
};
