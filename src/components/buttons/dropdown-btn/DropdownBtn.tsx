import { useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./dropdownBtn.scss";

interface props {
  icon: IconProp;
  text: string;
  children: React.ReactNode;
}

export const DropdownBtn = ({ icon, text, children }: props) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`dropdown-btn ${active ? "dropdown-btn-active" : ""}`}>
      <button
        className="dropdown-btn__button"
        onClick={() => setActive(!active)}
      >
        <FontAwesomeIcon icon={icon} />
        <h1 className="dropdown-btn__title">{text}</h1>
        <FontAwesomeIcon icon={faChevronDown} className="dropdown-btn__chev" />
      </button>
      <span
        className={`dropdown-btn__dropdown ${active ? "dropdown-active" : ""}`}
      >
        {children}
      </span>
    </div>
  );
};
