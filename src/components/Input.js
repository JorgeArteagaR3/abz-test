import React from "react";

const Input = ({
    type,
    name,
    value,
    placeholder,
    handleChange,
    children,
    userError,
}) => {
    return (
        <div className="input-container">
            <input
                className={
                    userError
                        ? "post-container_text-input input-error"
                        : "post-container_text-input"
                }
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
