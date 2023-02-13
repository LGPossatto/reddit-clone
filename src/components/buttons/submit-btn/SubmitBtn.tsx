import "./submitBtn.scss";

interface props {
  text: string;
  disabled?: boolean;
}

export const SubmitBtn = ({ text, disabled = false }: props) => {
  return (
    <button
      disabled={disabled}
      className={`submit-btn ${disabled ? "submit-btn-disabled" : ""}`}
      type="submit"
    >
      {text}
    </button>
  );
};
