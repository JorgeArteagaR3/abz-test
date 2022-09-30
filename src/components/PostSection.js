import React, { useEffect, useState } from "react";
const PostSection = () => {
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
    return (
        <section className="post-container">
            <h2 className="title">Working with POST request</h2>
            <form action="">
                <div className="post-container__data">
                    <input
                        placeholder="Your Name"
                        className="post-container_text-input"
                        type="text"
                    />
                    <input
                        placeholder="Email"
                        className="post-container_text-input"
                        type="email"
                    />
                    <div>
                        <input
                            placeholder="Phone"
                            className="post-container_text-input"
                            id="phone"
                            type="tel"
                        />
                        <span htmlFor="phone">+38 (XXX) XXX - XX - XX</span>
                    </div>
                </div>
                <div className="position-container">
                    <p>Select your position</p>

                    {positions.map((position) => (
                        <div className="position">
                            <input
                                type="radio"
                                name="position"
                                id={position.name}
                                onChange={() => {
                                    console.log(position.name);
                                }}
                            />
                            <label htmlFor={position.name}>
                                {position.name}
                            </label>
                        </div>
                    ))}
                </div>
            </form>
        </section>
    );
};

export { PostSection };
