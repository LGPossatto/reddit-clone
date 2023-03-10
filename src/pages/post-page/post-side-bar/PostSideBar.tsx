import "./postSideBar.scss";
import { SideBox } from "../../../components/boxes/side-box/SideBox";
import { ProfileCard } from "../../../components/cards/profile-card/ProfileCard";

export const PostSideBar = () => {
  return (
    <div className="post-side-bar">
      <SideBox>
        <ProfileCard></ProfileCard>
      </SideBox>
    </div>
  );
};
