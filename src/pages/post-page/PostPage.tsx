import { useState } from "react";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import "./postPage.scss";
import { PostSideBar } from "./post-side-bar/PostSideBar";
import { VoteBox } from "../../components/boxes/vote-box/VoteBox";
import { PostCardBtn } from "../../components/buttons/post-card-btn/PostCardBtn";
import { CommentTextarea } from "../../components/inputs/comment-textarea/CommentTextarea";

export const PostPage = () => {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="post-page">
      <section className="main-container">
        <div className="post-page__card">
          <div className="post-card__vote">
            <VoteBox totalVotes={254}></VoteBox>
          </div>
          <div className="post-page__post">
            <span className="info">{`Posted by u/${"userName"} ${"postDate.toLocaleDateString()"}`}</span>
            <h3>{"postTitle"}</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              nostrum omnis fuga. Magnam velit aliquid, atque repellendus beatae
              illo provident repellat a earum aperiam maxime dolor voluptatum
              itaque neque eos.
            </p>
            <PostCardBtn
              text={`${529} Comments`}
              icon={faMessage}
              onClick={() => {
                console.log("TODO Navigate to Comments");
              }}
              disabled
            ></PostCardBtn>
          </div>
          <div className="post-page__comment">
            <span>Comment as {"user123"}</span>
            <CommentTextarea
              text={commentText}
              setText={setCommentText}
            ></CommentTextarea>
          </div>
        </div>
      </section>
      <section className="side-container">
        <PostSideBar></PostSideBar>
      </section>
    </div>
  );
};
