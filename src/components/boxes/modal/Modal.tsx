import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./modal.scss";

interface props {
  active: boolean;
  closeModal: () => {};
  children: React.ReactNode;
}

export const Modal = ({ active, closeModal, children }: props) => {
  return (
    <div className={`modal ${active ? "" : "modal-inactive"}`}>
      <div className="modal__container">
        <span className="modal__close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </span>
        {children}
      </div>
    </div>
  );
};
