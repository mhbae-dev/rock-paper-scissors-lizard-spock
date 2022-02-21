import React from 'react'
import Header from "./components/Header";
import Play from "./components/Play";
import Game from "./components/Game";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [playerChoice, setPlayerChoice] = React.useState("");
  const [score, setScore] = React.useState(0);

  return (
    <>
      <div className="container">
        <Header score={score}/>
        <Routes>
          <Route path="/" element={<Play setChoice={setPlayerChoice}/>}/>
          <Route path="/game" element={<Game score={score} playerChoice={playerChoice} setScore={setScore}/>}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
