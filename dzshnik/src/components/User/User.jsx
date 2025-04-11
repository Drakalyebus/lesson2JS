import React from "react";

import styles from "./User.module.css";

function User({ user }) {
    return (
        <li className={styles.user}><img className={styles.avatar} src={user.avatar} />{user.name}, {user.age}</li>
    )
}

export default User;