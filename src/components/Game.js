import React from "react";

const Game = ({ score, playerChoice }) => {
  const [computer, setComputer] = React.useState("");
  const [playerWin, setPlayerWin] = React.useState("");

  //function to set computer choice in state
  function computerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    setComputer(choices[Math.floor(Math.random() * 5)]);
  }

  //useEffect will choose a computer choice on component render
  React.useEffect(() => {
    computerChoice();
  }, []);

  return (
    <div className="game">
      player choice: {playerChoice} <br />
    </div>
  );
};

export default Game;
