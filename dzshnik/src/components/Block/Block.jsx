import React from "react";

import styles from "./Block.module.css";

function Block({ className }) {
    const [text, setText] = React.useState("Text");
    const [border, setBorder] = React.useState("black");
    const [background, setBackground] = React.useState("white");

    const blockClickHandler = () => {
        setText(prompt("Enter text"));
        setBorder(prompt("Enter border color"));
        setBackground(prompt("Enter background color"));
    }

    return (
        <div onClick={blockClickHandler} style={{ border: `5px solid ${border}`, backgroundColor: background }} className={`${styles.block} ${className}`}>
            {text}
        </div>
    )
}

export default Block;