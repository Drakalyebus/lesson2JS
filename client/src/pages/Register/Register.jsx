import { useRef } from "react"
import axios from "axios"
import styles from "./Register.module.css"

function Register() {
    const nameRef = useRef()
    const emailRef = useRef()

    const handleRegister = async () => {
        const name = nameRef.current.value
        const email = emailRef.current.value

        await axios.post("http://localhost:3000/auth/register", { name, email })

        alert("An email with a link to confirm your account has been sent to your email, please check your email.")
    }

    return (
        <div>
            <h1>Register</h1>
            <input type="text" ref={nameRef} placeholder="Name" />
            <input type="email" ref={emailRef} placeholder="Email" />
            <button onClick={handleRegister}>Register</button>
        </div>
    )
}

export default Register