import React from "react";

import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

import styles from "./Actions.module.css";

function Actions({ setSortedUsers, users }) {
    const sortByAgeHandler = () => {
        setSortedUsers([...users].sort((a, b) => b.age - a.age));
    }
    const sortByNameHandler = () => {
        setSortedUsers([...users].sort((a, b) => a.name > b.name ? 1 : -1));
    }
    const filterGreaterThanHandler = (e) => {
        setSortedUsers(users.filter(user => user.age > +e.target.parentNode.children[6].value));
    }
    const filterLessThanHandler = (e) => {
        setSortedUsers(users.filter(user => user.age < +e.target.parentNode.children[6].value));
    }
    const shuffleUsersHandler = () => {
        setSortedUsers([...users].sort(() => Math.random() - 0.5));
    }

    return (
        <div className={styles.actions}>
            <h1>Действия</h1>
            <Button onClick={sortByAgeHandler} text="Сортировать по возрасту" />
            <Button onClick={sortByNameHandler} text="Сортировать по имени" />
            <Button onClick={filterGreaterThanHandler} text="Только старше n" />
            <Button onClick={filterLessThanHandler} text="Только младше n" />
            <Button onClick={shuffleUsersHandler} text="Перемешать" />
            <Input type="text" placeholder="n" />
        </div>
    )
}

export default Actions;