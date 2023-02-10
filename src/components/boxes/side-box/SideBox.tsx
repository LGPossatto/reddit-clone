import "./sideBox.scss";

interface props {
  children: React.ReactNode;
}

export const SideBox = ({ children }: props) => {
  return <div className="side-box">{children}</div>;
};
