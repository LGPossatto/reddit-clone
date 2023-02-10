import { faMessage } from "@fortawesome/free-solid-svg-icons";

import "./postCard.scss";
import { VoteBox } from "../../boxes/vote-box/VoteBox";
import { PostCardBtn } from "../../buttons/post-card-btn/PostCardBtn";

interface props {
  userName: string;
  postTitle: string;
  postBody: string;
  postDate: Date;
  postComments: number;
}

export const PostCard = ({
  userName,
  postTitle,
  postBody,
  postDate,
  postComments,
}: props) => {
  return (
    <div className="post-card">
      <div className="post-card__post">
        <span className="info">{`Posted by u/${userName} ${postDate.toLocaleDateString()}`}</span>
        <h3>{postTitle}</h3>
        <p>{postBody}</p>
        <PostCardBtn
          text={`${postComments} Comments`}
          icon={faMessage}
          onClick={() => {
            console.log("TODO Navigate to Comments");
          }}
        ></PostCardBtn>
      </div>
      <div className="post-card__vote">
        <VoteBox totalVotes={254}></VoteBox>
      </div>
    </div>
  );
};
