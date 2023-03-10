import { PhotosList } from "./PhotosList";
import { useState } from "react";
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
  return (
    <div className="banner-image-carousel">
      <div className="right-left-clicks-carousel">
        <div className="left-side-carousel" onClick={handlePrevClick}>
          <LeftCursor />
        </div>
        <div className="right-side-carousel" onClick={handleNextClick}>
          <RightCursor />
        </div>
      </div>
      {children}
    </div>
  );
};
