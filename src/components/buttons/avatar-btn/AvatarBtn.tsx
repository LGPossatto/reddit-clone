import { ReactComponent as Avatar } from "../../../assets/icons/avatar.svg";

import "./avatarBtn.scss";

export const AvatarBtn = () => {
  const handleOnClick = () => {
    alert("TODO navigate to profile");
  };

  return (
    <button className="avatar-btn" onClick={handleOnClick}>
      <Avatar></Avatar>
      <span className="avatar-btn__status"></span>
    </button>
  );
};
