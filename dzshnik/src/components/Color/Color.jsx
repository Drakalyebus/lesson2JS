import styles from "./Color.module.css";

function Color({ color, setCurrent }) {
    const clickHandler = (e) => {
        setCurrent(e.target.getAttribute('color'))
    }

    return (
        <div onClick={clickHandler} color={color} className={styles.color} style={{ backgroundColor: color }}></div>
    )
}

export default Color;