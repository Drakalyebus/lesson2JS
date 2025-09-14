import { useParams } from "react-router"
import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./Confirm.module.css"

function Confirm() {
    const { confirmCode } = useParams()

    const [valid, setValid] = useState(false)

    useEffect(() => {
        (async () => {
            const { data } = await axios.post(`http://localhost:3000/auth/confirm`, { confirmCode })
            setValid(data)
        })()
    }, [confirmCode])

    return (
        <div>
            {valid ? (
                <h1>Account confirmed</h1>
            ) : (
                <h1>Invalid confirmation code</h1>
            )}
        </div>
    )
}

export default Confirm