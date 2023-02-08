import { useState } from "react";

import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import "./feed.scss";
import { AvatarBtn } from "../buttons/avatar-btn/AvatarBtn";
import { TextInput } from "../inputs/text-input/TextInput";
import { IconBtn } from "../buttons/icon-btn/IconBtn";

export const Feed = () => {
  const [postVal, setPostVal] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("TODO navigate to post a post");
  };

  return (
    <div className="feed">
      <section className="feed__post-post">
        <div className="post-avatar">
          <AvatarBtn></AvatarBtn>
        </div>
        <form className="post-bar" onSubmit={handleSubmit}>
          <TextInput
            value={postVal}
            setValue={setPostVal}
            placeholder="Create Post"
          ></TextInput>
        </form>
        <IconBtn tip="Icon ?" icon={faQuestion}></IconBtn>
      </section>
    </div>
  );
};
