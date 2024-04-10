import React, { useState, useEffect } from 'react';
import { fetchChannels, createChannel } from '../service/chatService';
import './sidebar.css';

function Sidebar({ onSelectChannel }) {
    const [channels, setChannels] = useState([]);
    const [newChannelName, setNewChannelName] = useState('');

    useEffect(() => {
        async function fetchChannelsData() {
            try {
                const channelsData = await fetchChannels();
                setChannels(channelsData);
            } catch (error) {
                console.error('Det uppstod ett fel vid hämtning av kanaler:', error);
            }
        }
        fetchChannelsData();
    }, []);

    const handleCreateChannel = async () => {
        try {
            await createChannel(newChannelName);
            const updatedChannels = await fetchChannels();
            setChannels(updatedChannels);
            setNewChannelName('');
        } catch (error) {
            console.error('Error creating channel:', error);
        }
    };

    return (
        <div className="sidebar">
            <h2>Kanaler</h2>

            <ul className="Channels-container">
                {channels.map(channel => (
                    <li key={channel._id} onClick={() => onSelectChannel(channel)}>
                        {channel.name}
                    </li>
                ))}
            </ul>
            <div className="newChannel">
                <input type="text" value={newChannelName} onChange={e => setNewChannelName(e.target.value)} />
                <button onClick={handleCreateChannel}>Skapa kanal</button>
            </div>
        </div>
    );
}

export default Sidebar;
