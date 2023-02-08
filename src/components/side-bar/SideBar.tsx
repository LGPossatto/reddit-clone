import banner from "../../assets/images/home-banner.png";
import mascot from "../../assets/images/home-mascot.png";

import "./sideBar.scss";
import { CtaBtn } from "../buttons/cta-btn/CtaBtn";

export const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__info-card">
        <div className="img-banner">
          <img src={banner} alt="banner" />
        </div>
        <div className="title-box">
          <img src={mascot} alt="banner" />
          <h6>Home</h6>
        </div>
        <p>
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </p>
        <span className="line"></span>
        <CtaBtn
          text="Create Post"
          handleOnClick={() => console.log("TODO navigate to create post")}
        ></CtaBtn>
        <div className="btn-inactive">
          <CtaBtn
            text="Create Community"
            handleOnClick={() => console.log("TODO navigate to create post")}
            active={false}
          ></CtaBtn>
        </div>
      </div>
    </div>
  );
};
