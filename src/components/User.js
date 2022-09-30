import React from "react";
const User = ({ img, position, email, number, name }) => {
    return (
        <div className="user-card">
            <img src={img} alt="" />
            <p className="name">{name}</p>
            <p className="position">{position}</p>
            <p className="email">{email}</p>
            <p className="number">{number}</p>
        </div>
    );
};

export { User };
