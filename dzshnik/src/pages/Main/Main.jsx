import { NavLink } from "react-router";
import styles from "./Main.module.css";

function Main() {
    return (
        <div className={styles.container}>
            <h1>Главная:</h1>
            <div className={styles.horiz}>
                <div className={styles.square}>
                    <h3>Список дел</h3>
                    <NavLink to="/todo">\/</NavLink>
                </div>
                <div className={styles.square}>
                    <h3>Выбор цвета</h3>
                    <NavLink to="/color" className={styles.block} style={{ backgroundColor: "green" }}></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Main;