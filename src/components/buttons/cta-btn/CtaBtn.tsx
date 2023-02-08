import "./ctaBtn.scss";

interface props {
  text: string;
  handleOnClick: () => void;
  active?: boolean;
}

export const CtaBtn = ({ text, handleOnClick, active = true }: props) => {
  return (
    <button
      className={`cta-btn ${active ? "" : "cta-btn-inactive"}`}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
};
