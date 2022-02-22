import React from "react";
import Modal from "./Modal";

const Footer = () => {
  const [modal, setModal] = React.useState(false);

  function toggle() {
    setModal((prevState) => !prevState);
  }

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Myoung Bae</a>.
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
