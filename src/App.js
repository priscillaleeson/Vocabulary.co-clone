import "./styles.css";
import { NavBar } from "./NavBar";
import { Banner } from "./Banner-Components/Banner";
import { ContentBlock } from "./ContentBlock";
import { FooterBlock } from "./FooterBlock";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <BodyMargin>
        <Banner />
        <ContentBlock />
        <FooterBlock />
      </BodyMargin>
    </div>
  );
}

// This component wraps to center/align items together.
const BodyMargin = ({ children }) => {
  return <div className="body-margin-wrapper">{children}</div>;
};
