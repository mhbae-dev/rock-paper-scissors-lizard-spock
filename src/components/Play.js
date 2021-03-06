import React from "react";
import { Link } from "react-router-dom";
import pentagon from "../images/bg-pentagon.svg";

const Play = ({ setChoice }) => {
  function handleChoice(e) {
    setChoice(e.target.dataset.id);
  }

  return (
    <div className="play">
      <img src={pentagon} alt="pentagon" className="pentagon" />
      <div className="items">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={handleChoice}
            className="icon icon--paper"
          >
          </div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            onClick={handleChoice}
            className="icon icon--scissors"
          >
          </div>
        </Link>
        <Link to="/game">
          <div
            data-id="rock"
            onClick={handleChoice}
            className="icon icon--rock"
          >
          </div>
        </Link>
        <Link to="/game">
          <div
            data-id="lizard"
            onClick={handleChoice}
            className="icon icon--lizard"
          >
          </div>
        </Link>
        <Link to="/game">
          <div
            data-id="spock"
            onClick={handleChoice}
            className="icon icon--spock"
          >
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Play;
