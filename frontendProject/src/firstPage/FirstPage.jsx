import React, { useState, useEffect } from 'react';
import { fetchBroadcastMessages, sendBroadcastMessage } from '../service/chatService';
import './firstPage.css';

function FirstPage() {
    const [broadcastMessages, setBroadcastMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const messages = await fetchBroadcastMessages();
            setBroadcastMessages(messages);
        } catch (error) {
            console.error('Error fetching broadcast messages:', error);
        }
    };

    const handleSendMessage = async () => {
        try {
            await sendBroadcastMessage(newMessage);
            setNewMessage('');
            fetchMessages();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Broadcast Messages</h1>
            <ul className="message-list">
                {broadcastMessages.length > 0 ? (
                    broadcastMessages.map((message, index) => (
                        <li key={index} className="message">
                            <p className="message-content">{message.content}</p>
                            <p className="message-timestamp">{message.timestamp}</p>
                        </li>
                    ))
                ) : (
                    <li className="no-message">No broadcast messages available</li>
                )}
            </ul>
            <div className="message-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default FirstPage;
