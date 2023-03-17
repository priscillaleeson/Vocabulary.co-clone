import { PhotosList } from "./PhotosList";
import { useState, useRef } from "react";
import { CustomCursor } from "./Custom-Cursor";

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

  //console.log(photoItems);

  //Click handler logic for prev and next buttons to loop through the photoslist manually
  const lastPhotoIndex = PhotosList.length - 1;
  const firstPhotoId = PhotosList[0].id;

  const handlePrevClick = () => {
    activeImageId === firstPhotoId
      ? // If active image is first image, set to last photo
        setActiveImageId(lastPhotoIndex)
      : // If not first image, go back one image
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
    </div>
  );
};

const BannerImageCarousel = ({
  handlePrevClick,
  handleNextClick,
  children,
}) => {
  //ref to access to the DOM elements outside of react

  const previousCursorRef = useRef(null);
  const nextCursorRef = useRef(null);

  const handlePreviousMouseMove = (e) => {
    previousCursorRef.current.style.top = `${e.clientY}px`;
    previousCursorRef.current.style.left = `${e.clientX}px`;
    //console.log(`${e.clientX}px, ${e.clientY}px`);
  };

  const handlePreviousMouseEnter = () => {
    //console.log("Prev cursor entered");
    previousCursorRef.current.style.opacity = 1;
    previousCursorRef.current.style.fontSize = "18px";
  };

  const handlePreviousMouseLeave = () => {
    //console.log("Prev cursor left");
    previousCursorRef.current.style.opacity = 0;
    previousCursorRef.current.style.fontSize = "1px";
  };

  const handleNextMouseMove = (e) => {
    nextCursorRef.current.style.top = `${e.clientY}px`;
    nextCursorRef.current.style.left = `${e.clientX}px`;
    //console.log(`${e.clientX}px, ${e.clientY}px`);
  };

  const handleNextMouseEnter = () => {
    //console.log("Next cursor entered");
    nextCursorRef.current.style.opacity = 1;
    nextCursorRef.current.style.fontSize = "18px";
  };

  const handleNextMouseLeave = () => {
    //console.log("Next cursor left");
    nextCursorRef.current.style.opacity = 0;
    nextCursorRef.current.style.fontSize = "1px";
  };

  return (
    <div className="banner-image-carousel">
      <div
        className="left-side-carousel"
        onClick={handlePrevClick}
        onMouseMove={handlePreviousMouseMove}
        onMouseEnter={handlePreviousMouseEnter}
        onMouseLeave={handlePreviousMouseLeave}
      >
        <CustomCursor cursorname="Previous" cursorref={previousCursorRef} />
      </div>
      <div
        className="right-side-carousel"
        onClick={handleNextClick}
        onMouseMove={handleNextMouseMove}
        onMouseEnter={handleNextMouseEnter}
        onMouseLeave={handleNextMouseLeave}
      >
        <CustomCursor cursorname="Next" cursorref={nextCursorRef} />
      </div>
      {/*children holds the mapped photoItems*/}
      {children}
    </div>
  );
};
