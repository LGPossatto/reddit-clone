import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./textIconBtn.scss";
import { TextTip } from "../../boxes/text-tip/TextTip";

interface props {
  text: string;
  icon: IconProp;
}

export const TextIconBtn = ({ text, icon }: props) => {
  const [holver, setHolver] = useState(false);

  return (
    <button
      className="text-icon-btn"
      onMouseEnter={() => setHolver(true)}
      onMouseLeave={() => setHolver(false)}
    >
      <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      {text}
      <TextTip tip="Advertise" active={holver}></TextTip>
    </button>
  );
};
