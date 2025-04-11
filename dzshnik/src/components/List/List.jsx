import React from "react";

import User from "../User/User.jsx";

import styles from "./List.module.css";

function List({ users }) {
    return (
        <ul className={styles.list}>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </ul>
    )
}

export default List;