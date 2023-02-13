import "./profilePage.scss";
import { ProfileSideBar } from "./profile-side-bar/ProfileSideBar";
import { PostCard } from "../../components/cards/post-card/PostCard";

export const ProfilePage = () => {
  return (
    <div className="profile">
      <section className="main-container">
        <h3>Posts</h3>
        <PostCard
          userName="user123"
          postTitle="Title title"
          postDate={new Date()}
          postComments={328}
          postBody="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia esse sed quibusdam soluta maxime fugiat vel autem. Voluptatem quam praesentium recusandae pariatur. Nulla obcaecati sed recusandae blanditiis hic pariatur."
        ></PostCard>
      </section>
      <section className="side-container">
        <ProfileSideBar></ProfileSideBar>
      </section>
    </div>
  );
};
