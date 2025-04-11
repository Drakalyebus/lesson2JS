import React from "react";

import styles from "./Input.module.css";

function Input({ placeholder, type }) {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} />
    )
}

export default Input;