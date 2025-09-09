import store from "../../store";
import cn from "classnames";
import styles from "./Breeds.module.css";
import axios from "axios";
import { useEffect, useState } from "react"
import { SERVER_URL } from "../../config"


function Breeds() {
    const { category } = store();
    const [breeds, setBreeds] = useState([]);

    console.log(breeds);

    useEffect(() => {
        if (!category) return
        (async () => {
            const { data } = await axios.get(`${SERVER_URL}/breeds/${category}`)
            setBreeds(data)
        })()
    }, [category])

    return (
        <div className={cn(styles.container)}>
            <h1>{category}</h1>
            <div className={cn(styles.breeds)}>
                {
                    breeds.map(breed => (
                        <div key={breed._id} className={cn(styles.breed)}>
                            <h2>{breed.name}</h2>
                            <p>{breed.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Breeds