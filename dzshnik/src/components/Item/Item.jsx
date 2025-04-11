import React from "react";

import styles from "./Item.module.css";

function Item({ item, visual, setItems }) {
    const clickHandler = () => {
        // setItems(prev => replace(item, { ...item, visual: { border: prompt("Enter border color"), backgroundColor: prompt("Enter background color") } }, prev));
        setItems((prev) => {
            const copy = [...prev];
            console.log(copy, { item, style: visual });
            copy.find(el => { return el.item === item }).style = { border: prompt("Enter border color"), backgroundColor: prompt("Enter background color") };
            return copy;
        });
    }

    return (
        <li onClick={clickHandler} style={{ border: `5px solid ${visual.border}`, backgroundColor: visual.backgroundColor }} className={styles.item}>{item.name}</li>
    )
}

export default Item;