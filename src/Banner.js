import { PhotosList } from "./PhotosList";

export const Banner = () => {
  const photo = PhotosList.map((photo) => {
    return (
      <img
        className="banner-image"
        alt={photo.name}
        src={photo.url}
        key={photo.id}
      />
    );
  });

  return (
    <div className="banner-block">
      <div className="banner-title">
        <h1>
          Brand is Experience. <br /> Experience is Brand.
        </h1>
      </div>
      <div>
        <BannerImageCarousel>{photo}</BannerImageCarousel>
      </div>
    </div>
  );
};

const BannerImageCarousel = ({ children }) => {
  return (
    <div className="banner-image-carousel">
      <div className="right-left-clicks-carousel">
        <div className="left-side-carousel"></div>
        <div className="right-side-carousel"></div>
      </div>
      {children}
    </div>
  );
};
