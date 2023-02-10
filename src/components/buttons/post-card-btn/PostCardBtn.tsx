import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./postCardBtn.scss";

interface props {
  text: string;
  onClick: () => void;
  icon: IconProp;
  disabled?: boolean;
}

export const PostCardBtn = ({
  text,
  onClick,
  icon,
  disabled = false,
}: props) => {
  return (
    <button
      className={`post-card-btn ${disabled ? "post-card-btn-disabled" : ""}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
      {text}
    </button>
  );
};
