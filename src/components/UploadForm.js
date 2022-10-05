import React, { useState, useEffect } from "react";
import { Input } from "./Input";

const UploadForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        photo: "",
    });
    console.log(user);
    const [positions, setPositions] = useState([]);
    const getPositions = () => {
        fetch(
            "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
        )
            .then((res) => res.json())
            .then((data) => {
                setPositions(data.positions);
            });
    };
    useEffect(() => {
        getPositions();
    }, []);
    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const DataInputs = [
        {
            type: "text",
            value: user.name || "",
            name: "name",
            placeholder: "Your Name",
        },
        {
            type: "email",
            value: user.email || "",
            name: "email",
            placeholder: "Email",
        },
    ];
    return (
        <form>
            <div className="post-container__data">
                <Input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Your Name"
                    handleChange={handleChange}
                />
                <Input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Email"
                    handleChange={handleChange}
                />
                <Input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    placeholder="Phone"
                    handleChange={handleChange}
                >
                    <span className="phone-tip">+38 (XXX) XXX - XX - XX</span>
                </Input>
            </div>
            <div className="position-container">
                <p>Select your position</p>
                {positions.map((position) => (
                    <div key={position.name} className="position">
                        <input
                            type="radio"
                            name="position"
                            value={position.name}
                            id={position.name}
                            onChange={handleChange}
                        />
                        <label htmlFor={position.name}>{position.name}</label>
                    </div>
                ))}
            </div>
            <div className="upload-container">
                <div className="upload-container__upload">
                    <label htmlFor="uploadImg">Upload</label>

                    <input
                        onChange={handleChange}
                        id="uploadImg"
                        type="file"
                        name="photo"
                    />
                    <span>{user.photo || "Upload your photo"}</span>
                </div>
            </div>
        </form>
    );
};

export { UploadForm };
