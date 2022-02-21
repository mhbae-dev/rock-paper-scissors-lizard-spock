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
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Play />}/>
          <Route path="/game" element={<Game />}/>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
