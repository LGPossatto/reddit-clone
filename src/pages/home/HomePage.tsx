import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { closeLogin } from "../../redux/login/loginSlice";

import "./homePage.scss";
import { Feed } from "../../components/feed/Feed";
import { HomeSideBar } from "./home-side-bar/HomeSideBar";
import { Modal } from "../../components/boxes/modal/Modal";
import { Signup } from "../../components/signup/Signup";

export const HomePage = () => {
  const { loginOpen } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();

  return (
    <div className="home-page">
      <Modal active={loginOpen} closeModal={() => dispatch(closeLogin())}>
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
