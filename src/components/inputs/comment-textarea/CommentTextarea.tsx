import "./CommentTextarea.scss";

interface props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

export const CommentTextarea = ({ text, setText }: props) => {
  return (
    <div className="comment-textarea">
      <textarea
        placeholder="What are your thoughts?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <span className="comment-textarea__bot">
        <button
          disabled={text.length <= 0}
          onClick={() => alert("TODO post comment")}
        >
          Comment
        </button>
      </span>
    </div>
  );
};
