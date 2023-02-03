import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./iconBtn.scss";
import { TextTip } from "../../boxes/text-tip/TextTip";

interface props {
  icon: IconProp;
  tip: string;
}

export const IconBtn = ({ icon, tip }: props) => {
  const [hover, setHover] = useState(false);

  const handleOnClick = () => {
    alert("Nothing to see here!");
  };

  return (
    <div
      className="icon-btn"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button className="icon-btn__button" onClick={handleOnClick}>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </button>
      <TextTip tip={tip} active={hover}></TextTip>
    </div>
  );
};
