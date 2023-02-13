import "./profileSideBar.scss";
import { SideBox } from "../../../components/boxes/side-box/SideBox";
import { ProfileCard } from "../../../components/cards/profile-card/ProfileCard";

export const ProfileSideBar = () => {
  return (
    <div className="profile-side-bar">
      <SideBox>
        <ProfileCard></ProfileCard>
      </SideBox>
    </div>
  );
};
