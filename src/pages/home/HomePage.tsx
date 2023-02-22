import { useState } from "react";

import "./homePage.scss";
import { Feed } from "../../components/feed/Feed";
import { HomeSideBar } from "./home-side-bar/HomeSideBar";
import { Modal } from "../../components/boxes/modal/Modal";
import { Signup } from "../../components/signup/Signup";

export const HomePage = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="home-page">
      <Modal active={!modalActive} setActive={setModalActive}>
        <Signup></Signup>
      </Modal>
      <section className="main-container">
        <Feed></Feed>
      </section>
      <section className="side-container">
        <HomeSideBar></HomeSideBar>
      </section>
    </div>
  );
};
