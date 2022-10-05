import React from "react";

const Input = ({ type, name, value, placeholder, handleChange, children }) => {
    return (
        <div className="input-container">
            <input
                className="post-container_text-input"
                type={type}
                onChange={handleChange}
                name={name}
                value={value}
                placeholder={placeholder}
                required
            />
            <span className={value.length ? "input-label" : "inactive"}>
                {name}
            </span>
            {children}
        </div>
    );
};

export { Input };
