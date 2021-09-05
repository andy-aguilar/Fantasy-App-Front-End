import React, {useState, useEffect} from "react";
import socketIOClient from "socket.io-client";
import ESPNLoginForm from "./ESPNLoginForm";
import ESPNAccessCodeForm from "./ESPNAccessCodeForm";



const ENDPOINT = "http://127.0.0.1:4001";
let socket

export default function ESPNLogin() {

    const [message, setMessage] = useState("Process Starting...");
    const [displayForm, setDisplayForm] = useState(false)

    useEffect(() => {
        socket = socketIOClient(ENDPOINT, {
            withCredentials: true,
            extraHeaders: {
            "my-custom-header": "abcd"
            }
        });
        socket.on("connect", () => setMessage("Connecting to ESPN. This may take several minutes..."))

        socket.on("readyForLogin", () => setDisplayForm("login"))
        socket.on("readyForCode", () => setDisplayForm("code"))

        socket.on("success", (obj) => {
            const info = `Congratulations, your espn userId is ${obj.userId}, your espn_s2 cookie is ${obj.espnS2}`
            setDisplayForm(false)
            setMessage(info)
        })

        socket.on("error", (msg) => {
            setMessage(msg)
            setDisplayForm(false)
            socket.disconnect()
        })

        socket.on("message", setMessage)
        return () => socket.disconnect();
    }, []);

    const handleLoginSubmit = (dataObj) => {
        socket.emit("login", dataObj)
        setMessage("Attempting to login...")
        setDisplayForm(false)
    }

    const handleAccessCodeSubmit = (dataObj) => {
        socket.emit("code", dataObj)
    }

    const selectDisplay = () => {
        if(displayForm === "login"){
            return <ESPNLoginForm handleLoginSubmit={handleLoginSubmit}/>
        } else if (displayForm === "code"){
            return <ESPNAccessCodeForm handleAccessCodeSubmit={handleAccessCodeSubmit} />
        } else {
            return message
        }

    }


    return (
        <div>
            {selectDisplay()}
        </div>
    )
}
