import React from "react";
import { Link } from "react-router-dom";

const Game = ({ score, playerChoice, setScore }) => {
  const [computer, setComputer] = React.useState("");
  const [playerWin, setPlayerWin] = React.useState("");

  //countdown
  const [counter, setCounter] = React.useState(3);
  //function to set computer choice in state
  function computerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    setComputer(choices[Math.floor(Math.random() * 5)]);
  }

  //useEffect will choose a computer choice on component render
  React.useEffect(() => {
    computerChoice();
  }, []);

  //set the final result
  function result() {
    if (
      playerChoice === "rock" &&
      (computer === "scissors" || computer === "lizard")
    ) {
      setPlayerWin("win");
      setScore((prevScore) => (prevScore += 1));
    } else if (
      playerChoice === "rock" &&
      (computer === "spock" || computer === "paper")
    ) {
      setPlayerWin("lose");
      setScore((prevScore) => (prevScore -= 1));
    } else if (
      playerChoice === "paper" &&
      (computer === "rock" || computer === "spock")
    ) {
      setPlayerWin("win");
      setScore((prevScore) => (prevScore += 1));
    } else if (
      playerChoice === "paper" &&
      (computer === "scissors" || computer === "lizard")
    ) {
      setPlayerWin("lose");
      setScore((prevScore) => (prevScore -= 1));
    } else if (
      playerChoice === "scissors" &&
      (computer === "paper" || computer === "lizard")
    ) {
      setPlayerWin("win");
      setScore((prevScore) => (prevScore += 1));
    } else if (
      playerChoice === "scissors" &&
      (computer === "rock" || computer === "spock")
    ) {
      setPlayerWin("lose");
      setScore((prevScore) => (prevScore -= 1));
    } else if (
      playerChoice === "lizard" &&
      (computer === "paper" || computer === "spock")
    ) {
      setPlayerWin("win");
      setScore((prevScore) => (prevScore += 1));
    } else if (
      playerChoice === "lizard" &&
      (computer === "rock" || computer === "scissors")
    ) {
      setPlayerWin("lose");
      setScore((prevScore) => (prevScore -= 1));
    } else if (
      playerChoice === "spock" &&
      (computer === "rock" || computer === "scissors")
    ) {
      setPlayerWin("win");
      setScore((prevScore) => (prevScore += 1));
    } else if (
      playerChoice === "spock" &&
      (computer === "lizard" || computer === "paper")
    ) {
      setPlayerWin("lose");
      setScore((prevScore) => (prevScore -= 1));
    } else {
      setPlayerWin("draw");
    }
  }

  //useEffect will run when the computer choice state is set
  React.useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, computer]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${playerChoice} ${
            playerWin === "win" ? `icon icon--${playerChoice}--winner` : ""
          }`}
        ></div>
      </div>

      {playerWin === "win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="play-again" onClick={() => setComputer("")}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setComputer("")}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className="game__play">
          <span className="text">It's a tie</span>
          <Link to="/" className="play-again" onClick={() => setComputer("")}>
            Play Again
          </Link>
        </div>
      )}

      <div className="game__computer">
        <span className="text">The House Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${computer} ${
              playerWin === "lose" ? `icon icon--${computer}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;

//old code to view results
// player choice: {playerChoice} <br />
//       computer choice: {computer} <br />
//       Result:
//       {playerWin === "win" && <h2>You Win</h2>}
//       {playerWin === "lose" && <h2>You Lose</h2>}
//       {playerWin === "draw" && <h2>It is a tie</h2>}
//       <Link to="/">
//         <div onClick={() => setComputer("")}>Play Again</div>
//       </Link>
