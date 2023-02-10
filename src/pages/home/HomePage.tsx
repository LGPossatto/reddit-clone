import "./homePage.scss";
import { Feed } from "../../components/feed/Feed";
import { HomeSideBar } from "./home-side-bar/HomeSideBar";

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="main-container">
        <Feed></Feed>
      </section>
      <section className="side-container">
        <HomeSideBar></HomeSideBar>
      </section>
    </div>
  );
};
