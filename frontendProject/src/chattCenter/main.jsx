import React, { useState, useEffect, useRef } from 'react';
import { fetchChannelMessages, sendChannelMessage } from '../service/chatService';
import './main.css';

function Main({ selectedChannel }) {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        async function fetchChannelMessagesData() {
            if (selectedChannel) {
                try {
                    const messagesData = await fetchChannelMessages(selectedChannel._id);
                    setMessages(messagesData);
                } catch (error) {
                    console.error('Error fetching channel messages:', error);
                }
            }
        }
        fetchChannelMessagesData();
    }, [selectedChannel]);

    const handleSubmit = async e => {
        e.preventDefault();
        const messageInput = e.target.elements.message;
        const message = messageInput.value;

        try {
            await sendChannelMessage(selectedChannel._id, message);
            const updatedMessages = await fetchChannelMessages(selectedChannel._id);
            setMessages(updatedMessages);
            messageInput.value = '';
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="main">
            <h2>{selectedChannel ? selectedChannel.name : 'Välj en kanal'}</h2>
            <ul className="message-container">
                {messages.map(message => (
                    <li className="message-li" key={message._id}>
                        <p className="message-user"> {message.username}</p>

                        <p className="message-content">{message.content}</p>
                        <p className="message-timestamp">{message.timestamp}</p>
                    </li>
                ))}
                <div ref={messagesEndRef} />
            </ul>
            <form onSubmit={handleSubmit} className="message-input-container">
                <input type="text" name="message" />
                <button type="submit">Skicka meddelande</button>
            </form>
        </div>
    );
}

export default Main;
