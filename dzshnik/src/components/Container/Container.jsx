import React from "react";

import Form from "../Form/Form.jsx";
import List from "../List/List.jsx";
import Actions from "../Actions/Actions.jsx";

import styles from "./Container.module.css";

function Container() {
    const [users, setUsers] = React.useState([]);
    const [sortedUsers, setSortedUsers] = React.useState(users);

    return (
        <div className={styles.container}>
            <Form setUsers={setUsers} setSortedUsers={setSortedUsers} users={users} />
            <List users={sortedUsers} />
            <Actions setSortedUsers={setSortedUsers} users={users} />
        </div>
    )
}

export default Container;