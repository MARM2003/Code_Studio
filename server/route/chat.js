// routes/chat.js
const express = require('express');
const { handleMessageUser, handleMessage, handleUserList } = require('../controllers/chat');
const Message = require('../model/message');
const WebSocket = require('ws');
const { wss } = require('../index');

const router = express.Router();
const clients = new Map();

router.get('/user/:username', handleMessageUser);
router.get('/messages', handleMessage);
router.get("/userList",handleUserList)

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', async (message) => {
        const parsedMessage = JSON.parse(message);

        if (parsedMessage.type === 'register') {
            clients.set(parsedMessage.username, ws);
            console.log(`${parsedMessage.username} registered`);
            return;
        }

        const { from, to, content, date } = parsedMessage;
        console.log(`Message received from ${from} to ${to}: ${content}`);

        const recipientSocket = clients.get(to);

        const newMessage = new Message({ from, to, content, date: new Date(date) });
        await newMessage.save();

        if (recipientSocket && recipientSocket.readyState === WebSocket.OPEN) {
            recipientSocket.send(JSON.stringify(parsedMessage), (err) => {
                if (err) {
                    console.error(`Failed to send message to ${to}:`, err);
                } else {
                    console.log(`Message sent to ${to}`);
                }
            });
        } else {
            console.log(`Client ${to} is not connected`);
        }
    });

    ws.on('close', () => {
        for (const [username, socket] of clients.entries()) {
            if (socket === ws) {
                clients.delete(username);
                console.log(`${username} disconnected`);
                break;
            }
        }
    });
});

module.exports = router;
