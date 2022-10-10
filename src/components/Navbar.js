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
                        <a key={btn.text} className="btn" href={"#" + btn.text}>
                            {btn.text}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export { Navbar };
