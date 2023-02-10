import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as Avatar } from "../../../assets/icons/avatar.svg";

import "./postSideBar.scss";
import { SideBox } from "../../../components/boxes/side-box/SideBox";

export const PostSideBar = () => {
  return (
    <div className="post-side-bar">
      <SideBox>
        <div className="post-side-bar__info-card">
          <div className="banner">
            <h6>About The User</h6>
          </div>
          <div className="body">
            <div className="title-box">
              <div className="avatar-box">
                <Avatar></Avatar>
              </div>
              <h5>User 123</h5>
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
      </SideBox>
    </div>
  );
};
