import "./textTip.scss";

interface props {
  tip: string;
  active: boolean;
}

export const TextTip = ({ tip, active }: props) => {
  return (
    <div className={`text-tip ${active ? "text-tip-active" : ""}`}>
      <span className="text-tip__arrow"></span>
      <span className="text-tip__tip">{tip}</span>
    </div>
  );
};
