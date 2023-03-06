import { PhotosList } from "./PhotosList";

export const Banner = () => {
  const photoUrl = PhotosList.map((photo) => {
    return <img className="banner-image" alt={photo.name} src={photo.url} />;
  });

  return (
    <div className="banner-block">
      <div className="banner-title">
        <h1>
          Brand is Experience. <br /> Experience is Brand.
        </h1>
      </div>
      <BannerImageCarousel>{photoUrl}</BannerImageCarousel>
    </div>
  );
};

const BannerImageCarousel = ({ children }) => {
  return <div className="banner-image-carousel">{children}</div>;
};
