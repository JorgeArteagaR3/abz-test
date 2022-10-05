import React, { useEffect, useState } from "react";
import { User } from "./User";
import Defaultphoto from "../assets/defaultphoto.svg";

const GetSection = () => {
    let [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(2);
    const placeholderUrl =
        "https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png";
    const getUsers = () => {
        fetch(
            `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUsers(users.concat(data.users));
                setTotalPages(data.total_pages);
            });

        return;
    };
    let lastpage = page === totalPages;
    useEffect(() => {
        if (page <= totalPages) {
            getUsers();
        }
    }, [page]);

    return (
        <section className="get-section">
            <h2 className="title">Working with GET request</h2>
            <article className="people-container">
                {users.map((user) => (
                    <User
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        img={
                            user.photo === placeholderUrl
                                ? Defaultphoto
                                : user.photo
                        }
                        number={user.phone}
                        position={user.position}
                    />
                ))}
            </article>
            <button
                children
                onClick={() => {
                    setPage((page += 1));
                }}
                className={!lastpage ? "btn btn--large" : "inactive"}
            >
                Show More
            </button>
        </section>
    );
};

export { GetSection };
