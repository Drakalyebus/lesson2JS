import React from "react";

import List from "../List/List.jsx";
import View from "../View/View.jsx";

import styles from "./Container.module.css";

function Container() {
    const [items, setItems] = React.useState([
        { item: { name: "Item 1" }, style: { color: "red" } },
        { item: { name: "Item 2" }, style: { color: "green" } },
        { item: { name: "Item 3" }, style: { color: "blue" } },
    ]);

    return (
        <div className={styles.container}>
            <List items={items} setItems={setItems} />
            <View />
        </div>
    )
}

export default Container;