import React from "react";
import { Link } from "react-router-dom";

const Play = ({ setChoice }) => {
  function handleChoice(e) {
    setChoice(e.target.dataset.id);
  }

  return (
    <div className="play">
      <Link to="/game">
        <div
          data-id="paper"
          onClick={handleChoice}
          className="icon icon--paper"
        >
          Paper
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="scissors"
          onClick={handleChoice}
          className="icon icon--scissors"
        >
          Scissors
        </div>
      </Link>
      <Link to="/game">
        <div data-id="rock" onClick={handleChoice} className="icon icon--rock">
          Rock
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="lizard"
          onClick={handleChoice}
          className="icon icon--lizard"
        >
          Lizard
        </div>
      </Link>
      <Link to="/game">
        <div
          data-id="spock"
          onClick={handleChoice}
          className="icon icon--spock"
        >
          Spock
        </div>
      </Link>
    </div>
  );
};

export default Play;
