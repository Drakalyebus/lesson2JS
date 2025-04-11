import React from "react";

import styles from "./Image.module.css";

function Image({ url, border, onClick }) {
    return (
        <img onClick={onClick} src={url} alt="image" style={{ border: `5px solid ${border}` }} className={styles.image} />
    )
}

export default Image;