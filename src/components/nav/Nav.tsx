import {
  faBullhorn,
  faHouse,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch } from "../../hooks/reduxHooks";
import { openLogin } from "../../redux/login/loginSlice";

import redditLogo from "../../assets/icons/logo.svg";
import redditLogoText from "../../assets/icons/logoText.svg";

import "./nav.scss";
import { DropdownBtn } from "../buttons/dropdown-btn/DropdownBtn";
import { SearchBar } from "../inputs/search-bar/SearchBar";
import { IconBtn } from "../buttons/icon-btn/IconBtn";
import { TextIconBtn } from "../buttons/text-icon-btn/TextIconBtn";

export const Nav = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__logo">
          <img className="logo-icon" src={redditLogo} alt="reddit logo" />
          <img className="logo-text" src={redditLogoText} alt="reddit logo" />
        </div>
        <DropdownBtn text="Home" icon={faHouse}>
          {dropdownChild}
        </DropdownBtn>
        <SearchBar></SearchBar>
        <div className="nav__icons">
          <IconBtn icon={faQuestion} tip="Icon 1"></IconBtn>
          <IconBtn icon={faQuestion} tip="Icon 2"></IconBtn>
          <IconBtn icon={faQuestion} tip="Icon 3"></IconBtn>
          <span className="icons-div"></span>
          <IconBtn icon={faQuestion} tip="Icon 4"></IconBtn>
          <IconBtn icon={faQuestion} tip="Icon 5"></IconBtn>
          <IconBtn icon={faQuestion} tip="Icon 6"></IconBtn>
          <TextIconBtn text="Advertise" icon={faBullhorn}></TextIconBtn>
        </div>
        <div
          className="placeholder"
          style={{ marginLeft: "16px" }}
          onClick={() => dispatch(openLogin())}
        >
          PLACEHOLDER
        </div>
      </div>
    </nav>
  );
};

const dropdownChild = (
  <div>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
      <p key={item} style={{ fontSize: "1.8rem", paddingBottom: "12px" }}>
        There is nothing here!
      </p>
    ))}
  </div>
);
