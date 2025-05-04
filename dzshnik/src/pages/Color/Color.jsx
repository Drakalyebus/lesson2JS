import { useState } from "react";
import ColorComp from "../../components/Color/Color";

import styles from "./Color.module.css";

function Color() {
    const [current, setCurrent] = useState('')
    return (
        <div className={styles.container}>
            <h1>Выбор цвета:</h1>
            <div className={styles.horiz}>
                <ColorComp setCurrent={setCurrent} color="white" />
                <ColorComp setCurrent={setCurrent} color="lightpink" />
                <ColorComp setCurrent={setCurrent} color="lightgreen" />
                <ColorComp setCurrent={setCurrent} color="lightblue" />
                <ColorComp setCurrent={setCurrent} color="orange" />
                <ColorComp setCurrent={setCurrent} color="purple" />
                <ColorComp setCurrent={setCurrent} color="grey" />
            </div>
            <h1 style={{ color: current }}>Текущий цвет: {current}</h1>
        </div>
    )
}

export default Color;