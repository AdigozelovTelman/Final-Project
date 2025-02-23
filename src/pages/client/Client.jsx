// import React, { useEffect, useState } from 'react'
// import styles from './Client.module.scss'
// import io from "socket.io-client";

// const socket = io.connect("http://localhost:3001");

// const Client = () => {
//     const [message, setMessage] = useState("")
//     const [messageReceived, setMessageReceived] = useState("")

//     const sendMessage = () => {
//         socket.emit("send_message", {message})
//     }     
    
//     useEffect(()=>{
//         socket.on("receive_message", (data)=>{
//             setMessageReceived(data.message)
//         })
//     }, [socket])
//   return (
//     <div className={styles.client}>
//         <input placeholder='Message...' onChange={(event)=>{
//             setMessage(event.target.value)
//         }} />
//         <button onClick={sendMessage}>Send Message</button>
//         <h1>Message</h1>
//         {messageReceived}
//     </div>
//   )
// }

// export default Client

import React, { useEffect, useState } from 'react';
import styles from './Client.module.scss';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const Client = () => {
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const sendMessage = () => {
        socket.emit("send_message", { message });
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);
        });

        return () => {
            socket.off("receive_message");
        };
    }, []);

    return (
        <div className={styles.client}>
            <input 
                placeholder="Message..." 
                onChange={(event) => setMessage(event.target.value)} 
            />
            <button onClick={sendMessage}>Send Message</button>
            <h1>Message</h1>
            {messageReceived}
        </div>
    );
};

export default Client;
