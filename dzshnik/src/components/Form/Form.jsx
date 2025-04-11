import React from "react";
import { v4 } from "uuid";

import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

import styles from "./Form.module.css";

function Form({ setUsers, setSortedUsers, users }) {
    const clickHandler = (e) => {
        e.preventDefault();
        const inputs = {
            name: e.target.parentNode.children[1].value,
            age: +e.target.parentNode.children[2].value,
            avatar: e.target.parentNode.children[3].value,
            id: v4()
        }

        setUsers([...users, inputs]);
        setSortedUsers([...users, inputs]);
    }

    return (
        <form action={'#'} className={styles.form}>
            <h1>Новый пользователь</h1>
            <Input type="text" placeholder="Имя" />
            <Input type="number" placeholder="Возраст" />
            <Input type="text" placeholder="Аватар" />
            <Button onClick={clickHandler} text="Добавить" />
        </form>
    )
}

export default Form;