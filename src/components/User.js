import React, { useState } from "react";
import DefaultPhoto from "../assets/defaultphoto.svg";
const User = ({ img, position, email, number, name }) => {
    const [photo, setPhoto] = useState(img);

    return (
        <div className="user-card">
            <img
                src={photo}
                onError={() => {
                    setPhoto(DefaultPhoto);
                }}
                alt="person"
            />

            <div className="info-contain">
                <p className="name">
                    {name}
                    {email.length >= 25 && (
                        <span className="tooltip">{email}</span>
                    )}
                </p>
            </div>
            <div className="info">
                <p className="info-text">{position}</p>
                <div className="info-contain">
                    <p className="info-text">
                        {email}
                        {email.length >= 25 && (
                            <span className="tooltip">{email}</span>
                        )}
                    </p>
                </div>
                <div className="info-contain">
                    <p className="info-text">{number}</p>
                </div>
            </div>
        </div>
    );
};

export { User };
