export const FooterBlock = () => {
  return (
    <div className="footer-block">
      <img
        className="footer-logo"
        src="https://vocabulary.co/images/vocabulary.svg"
        alt="Vocabulary"
      />
      <div className="footer-links">
        <div>
          <a href="#">hi@vocabulary.co</a>
        </div>
        <div>©Vocabulary All Rights Reserved</div>
        <div>
          <span>
            <a href="#">Instagram</a>
          </span>
          ,{" "}
          <span>
            <a href="#">LinkedIn</a>
          </span>
        </div>
      </div>
    </div>
  );
};
