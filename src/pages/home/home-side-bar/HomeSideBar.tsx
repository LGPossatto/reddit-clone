import banner from "../../../assets/images/home-banner.png";
import mascot from "../../../assets/images/home-mascot.png";

import "./homeSideBar.scss";
import { CtaBtn } from "../../../components/buttons/cta-btn/CtaBtn";
import { SideBox } from "../../../components/boxes/side-box/SideBox";

export const HomeSideBar = () => {
  return (
    <div className="home-side-bar">
      <SideBox>
        <div className="home-side-bar__info-card">
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
          <div className="btn-disabled">
            <CtaBtn
              text="Create Community"
              handleOnClick={() => console.log("TODO navigate to create post")}
              disabled
            ></CtaBtn>
          </div>
        </div>
      </SideBox>
    </div>
  );
};
