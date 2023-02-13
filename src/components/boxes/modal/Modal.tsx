import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./modal.scss";

interface props {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

export const Modal = ({ active, setActive, children }: props) => {
  return (
    <div className={`modal ${active ? "" : "modal-inactive"}`}>
      <div className="modal__container">
        <span className="modal__close" onClick={() => setActive(false)}>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </span>
        {children}
      </div>
    </div>
  );
};
