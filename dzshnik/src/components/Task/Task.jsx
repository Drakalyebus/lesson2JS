import styles from "./Task.module.css"
import { useState } from "react"

function Task({ i, onClick, index }) {
    const [done, setDone] = useState(false)

    const clickHandler = (e) => {
        onClick(e)
        setDone(!done)
    }

    return (
        <div index={index} className={styles.task} onClick={clickHandler}>
            <span>
                {done ? '\\/': ''}
            </span>
            <span>Задача {'#'}{i}</span>
        </div>
    )
}

export default Task