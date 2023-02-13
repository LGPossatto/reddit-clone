import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles, faGear } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as Avatar } from "../../../assets/icons/avatar.svg";

import "./profileCard.scss";

export const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-card__banner"></div>
      <div className="profile-card__body">
        <div className="title-box">
          <div className="avatar-box">
            <Avatar></Avatar>
          </div>
          <h5>u/user_123</h5>
          <button
            className="config"
            onClick={() => alert("TODO navigate to config")}
          >
            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
          </button>
        </div>
        <p>
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </p>
        <span className="cake">
          <FontAwesomeIcon icon={faCakeCandles}></FontAwesomeIcon>
          Created Jan 13, 2010
        </span>
        <span className="line"></span>
        <div className="status">
          <div className="following">
            32 <br /> <span>Following</span>
          </div>
          <div className="followers">
            421 <br /> <span>Followers</span>
          </div>
        </div>
      </div>
    </div>
  );
};
