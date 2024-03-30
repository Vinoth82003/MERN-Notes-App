import React from "react";
import logo from "../assets/img/notes.png";
import "../css/header.css";
const Header = ({ setPopup }) => {
  return (
    <>
      <header className="header">
        <div className="app_name">
          <div className="app_logo">
            <img src={logo} alt="logo" />
          </div>
          <h1 className="appName">Mini Notes</h1>
        </div>
        <div className="button_container">
          <button
            type="button"
            className="addNotes"
            onClick={() => setPopup(true)}
          >
            +
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
