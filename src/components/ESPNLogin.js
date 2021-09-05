import React, {useState, useEffect} from "react"
import socketIOClient from "socket.io-client"
import ESPNLoginForm from "./ESPNLoginForm";



const ENDPOINT = "http://127.0.0.1:4001";
let socket

export default function ESPNLogin() {

    const [message, setMessage] = useState("Process Starting...");
    const [displayForm, setDisplayForm] = useState(false)
    const [code, setCode] = useState("");

    useEffect(() => {
        socket = socketIOClient(ENDPOINT, {
            withCredentials: true,
            extraHeaders: {
            "my-custom-header": "abcd"
            }
        });
        socket.on("connect", () => setMessage("Connecting to ESPN. This may take several minutes..."))

        socket.on("readyForLogin", () => setDisplayForm(true))

        socket.on("message", setMessage)
        return () => socket.disconnect();
    }, []);

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log("Email:", e.target.email.value)
        console.log("Password:", e.target.password.value)
    }


    return (
        <div>
            {displayForm ? <ESPNLoginForm handleLoginSubmit={handleLoginSubmit}/> : message }
        </div>
    )
}
