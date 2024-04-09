import { getData, sendData } from '../util/requests';

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
