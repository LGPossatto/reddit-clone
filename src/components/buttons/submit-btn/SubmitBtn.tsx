import { faCircleNotch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./submitBtn.scss";

interface props {
  text: string;
  disabled?: boolean;
  loading?: boolean;
}

export const SubmitBtn = ({
  text,
  disabled = false,
  loading = false,
}: props) => {
  return (
    <button
      disabled={disabled}
      className={`submit-btn ${loading ? "submit-btn-loading" : ""}`}
      type="submit"
    >
      <p>{text}</p>
      <span className="submit-btn__spinner">
        <FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon>
      </span>
    </button>
  );
};
