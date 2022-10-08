import React from "react";
import { UploadForm } from "./UploadForm";
const PostSection = () => {
    return (
        <section className="post-container">
            <h2 className="title">Working with POST request</h2>
            <UploadForm />
        </section>
    );
};

export { PostSection };
