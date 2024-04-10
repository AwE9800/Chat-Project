import { getData, sendData, updateData } from '../util/requests';

export const fetchBroadcastMessages = async () => {
    try {
        const response = await getData('http://localhost:5000/api/broadcast');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching broadcast messages:', error);
        throw error;
    }
};

export const sendBroadcastMessage = async newMessage => {
    try {
        await sendData('http://localhost:5000/api/broadcast', { content: newMessage });
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const fetchChannels = async () => {
    try {
        const response = await getData('http://localhost:5000/api/channel');
        return await response.json();
    } catch (error) {
        console.error('Det uppstod ett fel vid hämtning av kanaler:', error);
        throw error;
    }
};

export const fetchChannelMessages = async channelId => {
    try {
        const response = await getData(`http://localhost:5000/api/channel/${channelId}`);
        return await response.json();
    } catch (error) {
        console.error('Det uppstod ett fel vid hämtning av kanalmeddelanden:', error);
        throw error;
    }
};

export async function createChannel(name) {
    try {
        await updateData('http://localhost:5000/api/channel', { name });
        console.log('Channel created successfully');
    } catch (error) {
        console.error('Error creating channel:', error);
        throw error;
    }
}

export const sendChannelMessage = async (channelId, messageContent) => {
    try {
        await sendData(`http://localhost:5000/api/channel/${channelId}`, { content: messageContent });
        console.log('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};
