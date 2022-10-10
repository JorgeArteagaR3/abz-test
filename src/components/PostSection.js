import React, { useState } from "react";
import { Spinner } from "./Spinner";
import { UploadForm } from "./UploadForm";
import SuccessImage from "../assets/success-image.svg";
const PostSection = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <section className="post-container" id="Sign Up">
            <h2 className="title">
                {isRegistered
                    ? "User succesfully Registered"
                    : "Working with POST request"}
            </h2>
            {!isRegistered ? (
                <>
                    <UploadForm
                        setIsLoading={setIsLoading}
                        setIsRegistered={setIsRegistered}
                    />
                </>
            ) : (
                <div className="success-container">
                    <img
                        className="success-image"
                        src={SuccessImage}
                        alt="success"
                    />
                </div>
            )}
            {isLoading && <Spinner />}
        </section>
    );
};

export { PostSection };
