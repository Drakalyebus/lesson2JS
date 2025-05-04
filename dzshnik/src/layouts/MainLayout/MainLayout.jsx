import { Outlet } from "react-router";
import { NavLink } from "react-router";
import cn from "classnames"

import styles from "./MainLayout.module.css";

function MainLayout() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <h1>Навигация</h1>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => cn({ [styles.active]: isActive })}>Главная</NavLink></li>
                    <li><NavLink to="/todo" className={({ isActive }) => cn({ [styles.active]: isActive })}>Список дел</NavLink></li>
                    <li><NavLink to="/color" className={({ isActive }) => cn({ [styles.active]: isActive })}>Выбор цвета</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default MainLayout;