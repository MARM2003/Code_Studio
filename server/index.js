// index.js
const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const connectDatabase = require('./config/database');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.json({ limit: '100mb' }));
connectDatabase();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Export the WebSocket server to be used in other files
module.exports = { wss };

// Import routes after exporting wss to ensure they have access to it
const userRoute = require('./route/user');
const questionRoute = require('./route/question');
const chatRoute = require('./route/chat');

app.use('/api/v1/user', userRoute);
app.use('/api/v1/question', questionRoute);
app.use('/api/v1/chat', chatRoute);

// Start the server
server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
