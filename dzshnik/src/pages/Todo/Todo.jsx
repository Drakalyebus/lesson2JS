import styles from "./Todo.module.css"
import { useState } from "react"
import { v4 } from "uuid"

import Task from "../../components/Task/Task"

function Todo() {
    const [is, setIs] = useState([])

    const clickHandler = () => {
        setIs(is.concat(Math.max(...is, 0) + 1))
    }
    const deleteHandler = (e) => {
        const newIs = is.slice()
        console.log(+e.target.parentNode.getAttribute('index'))
        newIs.splice(+e.target.parentNode.getAttribute('index'), 1)
        setIs(newIs)
    }

    return (
        <div>
            <h1>Список дел:</h1>
            <ul>
                {is.map((i, index) => <Task key={v4()} index={index} onClick={deleteHandler} i={i} />)}
            </ul>
            <button onClick={clickHandler}>Добавить</button>
        </div>
    )
}

export default Todo