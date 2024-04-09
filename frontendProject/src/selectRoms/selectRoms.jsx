import React, { useState } from "react";

import "./selectRoms.css";

function SelectRoms() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("Friends");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleJoin = () => {
    console.log(`Joined room ${room} as ${username}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Welcome to chat app</h1>
      <div className="effectOne"></div>
      <div className="effectTwo"></div>

      <div style={{ display: !username ? "block" : "none" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <select value={room} onChange={(e) => setRoom(e.target.value)}>
          <option value="Friends">Friends</option>
          <option value="Love room">Love room</option>
          <option value="Gamers">Gamers</option>
        </select>
        <button onClick={handleJoin}>Join</button>
      </div>

      <div style={{ display: username ? "block" : "none" }}>
        <ul id="messages">
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input
            className="StyleInput"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            autoComplete="off"
          />
          <button className="buttonInput" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default SelectRoms;
