import "./homePage.scss";
import { Feed } from "../../components/feed/Feed";
import { SideBar } from "../../components/side-bar/SideBar";

export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="home-page__feed">
        <Feed></Feed>
      </section>
      <section className="home-page__side-bar">
        <SideBar></SideBar>
      </section>
    </div>
  );
};
