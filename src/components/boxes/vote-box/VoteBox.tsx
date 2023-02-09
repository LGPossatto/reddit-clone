import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import "./voteBox.scss";

interface props {
  totalVotes: number;
}

export const VoteBox = ({ totalVotes }: props) => {
  return (
    <div className="vote-box">
      <button className="vote-box__up">
        <FontAwesomeIcon icon={faCaretUp} />
      </button>
      <span>{totalVotes}</span>
      <button className="vote-box__down">
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
    </div>
  );
};
