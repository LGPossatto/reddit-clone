import "./ctaBtn.scss";

interface props {
  text: string;
  handleOnClick: () => void;
  disabled?: boolean;
}

export const CtaBtn = ({ text, handleOnClick, disabled = false }: props) => {
  return (
    <button
      className={`cta-btn ${disabled ? "cta-btn-disabled" : ""}`}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
};
