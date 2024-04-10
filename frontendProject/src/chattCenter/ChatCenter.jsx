import React, { useState } from 'react';
import Sidebar from './sidebar';
import Main from './main';
import './chatCenter.css';

function ChatPage() {
    const [selectedChannel, setSelectedChannel] = useState(null);

    const handleSelectChannel = channel => {
        setSelectedChannel(channel);
    };

    return (
        <div className="chat-page">
            <Sidebar onSelectChannel={handleSelectChannel} />
            <Main selectedChannel={selectedChannel} />
        </div>
    );
}

export default ChatPage;
