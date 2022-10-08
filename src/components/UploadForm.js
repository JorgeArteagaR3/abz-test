import React, { useState, useEffect } from "react";
import { Input } from "./Input";

const UploadForm = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        position_id: "",
        photo: "",
    });
    const [positions, setPositions] = useState([]);
    const [myToken, setMyToken] = useState("");

    useEffect(() => {
        getPositions();
        getToken();
    }, []);

    useEffect(() => {
        console.log(user);
        console.log(myToken);
    }, [user, myToken]);

    function getFormData(object) {
        const formData = new FormData();
        Object.keys(object).forEach((key) => formData.append(key, object[key]));
        return formData;
    }

    const getPositions = () => {
        fetch(
            "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
        )
            .then((res) => res.json())
            .then((data) => {
                setPositions(data.positions);
            });
    };

    const getToken = () => {
        fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
            .then((res) => res.json())
            .then((data) => {
                setMyToken(data.token);
            });
    };

    const handleChange = (name, value) => {
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const signUp = () => {
        const formData = getFormData(user);
        console.log(formData.get("email"));
        try {
            fetch(
                "https://frontend-test-assignment-api.abz.agency/api/v1/users//",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Token: myToken,
                    },
                }
            )
                .then((res) => res.json())
                .then((data) => console.log(data));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <div className="post-container__data">
                <Input
                    type="text"
                    name="name"
                    value={user.name}
                    placeholder="Your Name"
                    handleChange={(e) => {
                        handleChange(e.target.name, e.target.value);
                    }}
                />
                <Input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Email"
                    handleChange={(e) => {
                        handleChange(e.target.name, e.target.value);
                    }}
                />
                <Input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    placeholder="Phone"
                    handleChange={(e) => {
                        handleChange(e.target.name, e.target.value);
                    }}
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
                            name="position_id"
                            value={position.id}
                            id={position.name}
                            onChange={(e) => {
                                handleChange(e.target.name, e.target.value);
                            }}
                        />
                        <label htmlFor={position.name}>{position.name}</label>
                    </div>
                ))}
            </div>
            <div className="upload-container">
                <div className="upload-container__upload">
                    <label htmlFor="uploadImg">Upload</label>

                    <input
                        onChange={(e) => {
                            handleChange(e.target.name, e.target.files[0]);
                        }}
                        id="uploadImg"
                        type="file"
                        name="photo"
                    />
                    <span>{user.photo.name || "Upload your photo"}</span>
                </div>
            </div>
            <div className="sign-up-btn-container">
                <button className="btn sign-up-btn" onClick={signUp}>
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export { UploadForm };
