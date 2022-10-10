import React, { useState } from "react";
import DefaultPhoto from "../assets/defaultphoto.svg";
const User = ({ img, position, email, number, name }) => {
    const [photo, setPhoto] = useState(img);
    const [isVisible, setIsVisible] = useState(false);
    const [textTip, setTextTip] = useState("");
    const handleChange = (e) => {
        setTextTip(e.target.textContent);

        if (textTip.length >= 25) {
            setIsVisible(true);
        }
    };
    return (
        <div className="user-card">
            <img
                src={photo}
                onError={() => {
                    setPhoto(DefaultPhoto);
                }}
                alt=""
            />

            <div className="info-contain">
                <p
                    className="name"
                    onMouseEnter={handleChange}
                    onMouseLeave={() => {
                        setIsVisible(false);
                    }}
                >
                    {name}
                </p>
            </div>
            <div className="info">
                <p className="info-text">{position}</p>
                <div className="info-contain">
                    <p
                        className="info-text"
                        onMouseEnter={handleChange}
                        onMouseLeave={() => {
                            setIsVisible(false);
                        }}
                    >
                        {email}
                        {isVisible && <p>{textTip}</p>}
                    </p>
                </div>
                <div className="info-contain">
                    <p
                        className="info-text"
                        onMouseEnter={handleChange}
                        onMouseLeave={() => {
                            setIsVisible(false);
                        }}
                    >
                        {number}
                    </p>
                </div>
            </div>
        </div>
    );
};

export { User };
