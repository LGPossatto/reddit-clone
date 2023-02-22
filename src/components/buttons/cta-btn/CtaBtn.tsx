import "./ctaBtn.scss";

interface props {
  text: string;
  handleOnClick: () => void;
  disabled?: boolean;
}

export const CtaBtn = ({ text, handleOnClick, disabled = false }: props) => {
  return (
    <button disabled={disabled} className="cta-btn" onClick={handleOnClick}>
      {text}
    </button>
  );
};
