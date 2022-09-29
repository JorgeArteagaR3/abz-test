import React from "react";
import Logo from "../assets/Logo.svg";
const buttons = [{ text: "Users" }, { text: "Sign Up" }];
const Navbar = () => {
  return (
    <header className="navbar_container">
      <nav>
        <img src={Logo} alt="logo"></img>
        <div className="btn-container">
          {buttons.map((btn) => (
            <button key={btn.text} type="button" className="btn">
              {btn.text}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
