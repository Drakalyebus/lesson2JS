import React from "react";
import { v4 } from "uuid";

import Item from "../Item/Item.jsx";

import styles from "./List.module.css";

function List({ items, setItems }) {
    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <Item setItems={setItems} visual={item.style} key={v4()} item={item.item} />
            ))}
        </ul>
    )
}

export default List;