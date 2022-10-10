import React, { useState, useEffect } from "react";
import { Input } from "./Input";

const UploadForm = ({ setIsRegistered, setIsLoading }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        position_id: "",
        photo: "",
    });
    const [userError, setUserError] = useState({
        name: "",
        email: "",
        phone: "",
        photo: "",
    });
    const [positions, setPositions] = useState([]);
    const [myToken, setMyToken] = useState("");

    useEffect(() => {
        getPositions();
        getToken();
    }, []);

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

    const signUp = async () => {
        const formData = getFormData(user);

        try {
            setIsLoading(true);
            const res = await fetch(
                "https://frontend-test-assignment-api.abz.agency/api/v1/users",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        Token: myToken,
                    },
                }
            );
            const data = await res.json();
            console.log(data);
            if (res.status === 500) {
                setIsLoading(false);
                return;
            }
            if (data.success) {
                setIsRegistered(true);
                setIsLoading(false);
            }
            if (!data.success) {
                setIsLoading(false);
                setIsRegistered(false);
                const failsMessages = data.fails;
                const keys = Object.keys(data.fails);
                console.log(data.fails);

                if (!data.fails) return;

                keys.forEach((key) => {
                    setUserError((prev) => ({
                        ...prev,
                        [key]: failsMessages[key][0],
                    }));
                });
            }
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            setUserError();
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
                    userError={userError?.name}
                    handleChange={(e) => {
                        handleChange(e.target.name, e.target.value);
                    }}
                >
                    <span
                        className={
                            userError?.name
                                ? "input-tip text-error"
                                : "input-tip"
                        }
                    >
                        {!userError?.name ? "" : userError.name}
                    </span>
                </Input>
                <Input
                    type="email"
                    name="email"
                    value={user.email}
                    placeholder="Email"
                    userError={userError?.email}
                    handleChange={(e) => {
                        handleChange(e.target.name, e.target.value);
                    }}
                >
                    <span
                        className={
                            userError?.email
                                ? "input-tip text-error"
                                : "input-tip"
                        }
                    >
                        {!userError?.email ? "" : userError.email}
                    </span>
                </Input>
                <Input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    placeholder="Phone"
                    userError={userError?.phone}
                    handleChange={(e) => {
                        handleChange(e.target.name, e.target.value);
                    }}
                >
                    <span
                        className={
                            userError?.phone
                                ? "input-tip text-error"
                                : "input-tip"
                        }
                    >
                        {!userError?.phone
                            ? "+38 (XXX) XXX - XX - XX"
                            : userError.phone}
                    </span>
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
                <div
                    className={
                        userError?.photo
                            ? "upload-container__upload input-error"
                            : "upload-container__upload"
                    }
                >
                    <label
                        className={userError?.photo && "input-error"}
                        htmlFor="uploadImg"
                    >
                        Upload
                    </label>

                    <span>{user?.photo?.name || "Upload your photo"}</span>
                </div>
                <span
                    className={
                        userError?.photo ? "input-tip text-error" : "input-tip"
                    }
                >
                    {userError?.photo ? userError.photo : ""}
                </span>
                <input
                    onChange={(e) => {
                        handleChange(e.target.name, e.target.files[0]);
                    }}
                    id="uploadImg"
                    type="file"
                    name="photo"
                />
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
