import { PhotosList } from "./PhotosList";
import { useState, useRef } from "react";
import { LeftCursor, RightCursor } from "./Custom-Cursor";

export const Banner = () => {
  const [activeImageId, setActiveImageId] = useState(0);

  const photoItems = PhotosList.map((photo) => {
    return (
      <li key={photo.id}>
        <img
          className="banner-image"
          alt={photo.name}
          src={photo.url}
          id={photo.id}
          style={{ zIndex: activeImageId === photo.id ? 5 : 0 }}
        />
      </li>
    );
  });

  console.log(photoItems);

  //Click handler logic to loop through the photoslist
  const lastPhotoIndex = PhotosList.length - 1;
  const firstPhotoId = PhotosList[0].id;

  const handlePrevClick = () => {
    activeImageId === firstPhotoId
      ? // active image is first image. set to last photo
        setActiveImageId(lastPhotoIndex)
      : // is not first image. go back one image
        setActiveImageId(activeImageId - 1);
    console.log("prevclicked");
  };

  const handleNextClick = () => {
    activeImageId === lastPhotoIndex
      ? setActiveImageId(firstPhotoId)
      : setActiveImageId(activeImageId + 1);
    console.log("nextclicked");
  };

  /*const handleReset = () => {
    setActiveImageId(firstPhotoId);
  };*/

  return (
    <div className="banner-block">
      <div className="banner-title">
        <h1>Transform your brand. Transform your business.</h1>
      </div>
      <div>
        <BannerImageCarousel
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        >
          <ul>{photoItems}</ul>
        </BannerImageCarousel>
      </div>
      <div>
        {/*<button>Prev</button>
        <button >Next</button>*/}
      </div>
    </div>
  );
};

const BannerImageCarousel = ({
  handlePrevClick,
  handleNextClick,
  children,
}) => {
  const [isCursorInsideDiv, setIsCursorInsideDiv] = useState(false);
  const leftCursorRef = useRef(null);
  const rightCursorRef = useRef(null);

  const handleLeftMouseMove = (e) => {
    setIsCursorInsideDiv(true);
    leftCursorRef.current.style.top = `${e.clientY}px`;
    leftCursorRef.current.style.left = `${e.clientX}px`;
    //console.log(`${e.clientX}px, ${e.clientY}px`);
  };

  const handleRightMouseMove = (e) => {
    setIsCursorInsideDiv(true);
    rightCursorRef.current.style.top = `${e.clientY}px`;
    rightCursorRef.current.style.left = `${e.clientX}px`;
    //console.log(`${e.clientX}px, ${e.clientY}px`);
  };

  const handleLeftMouseEnter = () => {
    //console.log("I entered");
    leftCursorRef.current.style.opacity = 1;
  };

  const handleLeftMouseLeave = () => {
    //console.log("I left");
    leftCursorRef.current.style.opacity = 0;
  };

  const handleRightMouseEnter = () => {
    //console.log("I entered");
    rightCursorRef.current.style.opacity = 1;
  };

  const handleRightMouseLeave = () => {
    //console.log("I left");
    rightCursorRef.current.style.opacity = 0;
  };

  return (
    <div className="banner-image-carousel">
      <div className="right-left-clicks-carousel">
        <div
          className="left-side-carousel"
          onClick={handlePrevClick}
          onMouseMove={handleLeftMouseMove}
          onMouseEnter={handleLeftMouseEnter}
          onMouseLeave={handleLeftMouseLeave}
        >
          <LeftCursor cursorref={leftCursorRef} />
        </div>
        <div
          className="right-side-carousel"
          onClick={handleNextClick}
          onMouseMove={handleRightMouseMove}
          onMouseEnter={handleRightMouseEnter}
          onMouseLeave={handleRightMouseLeave}
        >
          <RightCursor cursorref={rightCursorRef} />
        </div>
      </div>
      {children}
    </div>
  );
};

//ref.current.style; margin-top; fixed position-- top left: 0px;

//add ref to the previous and next
//move it to top: 50, left: 50
// try to move it first
//go to deve tools -- used fixed position;
//move my thing to position; style-left= x;
//top + left
//point a ref to it--> style outside of react in dom-- set top & left
