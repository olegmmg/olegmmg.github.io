const WebSocket = require('ws');
const express = require('express');
const http = require('http');

// Создаем HTTP сервер
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Хранилище данных
const users = new Map(); // WebSocket → пользователь
const messages = [];
const onlineUsers = new Set();

// Статические файлы
app.use(express.static('public'));

// WebSocket обработчик
wss.on('connection', (ws) => {
    console.log('Новое подключение');
    
    // Отправляем историю сообщений новому пользователю
    ws.send(JSON.stringify({
        type: 'history',
        messages: messages.slice(-50) // последние 50 сообщений
    }));
    
    ws.on('message', (data) => {
        try {
            const message = JSON.parse(data);
            handleMessage(ws, message);
        } catch (error) {
            console.error('Ошибка обработки сообщения:', error);
        }
    });
    
    ws.on('close', () => {
        const user = users.get(ws);
        if (user) {
            users.delete(ws);
            onlineUsers.delete(user.username);
            broadcast({
                type: 'user_left',
                username: user.username,
                onlineCount: onlineUsers.size
            });
            console.log(`${user.username} отключился`);
        }
    });
});

function handleMessage(ws, message) {
    switch (message.type) {
        case 'login':
            handleLogin(ws, message);
            break;
        case 'message':
            handleChatMessage(ws, message);
            break;
        case 'typing':
            handleTyping(ws, message);
            break;
        case 'call':
            handleCall(ws, message);
            break;
    }
}

function handleLogin(ws, message) {
    const { username } = message;
    
    if (onlineUsers.has(username)) {
        ws.send(JSON.stringify({
            type: 'login_error',
            error: 'Пользователь уже онлайн'
        }));
        return;
    }
    
    // Сохраняем пользователя
    users.set(ws, { username, joined: new Date() });
    onlineUsers.add(username);
    
    // Отправляем подтверждение
    ws.send(JSON.stringify({
        type: 'login_success',
        username,
        onlineCount: onlineUsers.size
    }));
    
    // Оповещаем всех
    broadcast({
        type: 'user_joined',
        username,
        onlineCount: onlineUsers.size
    });
    
    console.log(`${username} вошел в чат`);
}

function handleChatMessage(ws, message) {
    const user = users.get(ws);
    if (!user) return;
    
    const chatMessage = {
        id: Date.now(),
        username: user.username,
        text: message.text,
        timestamp: new Date().toISOString(),
        type: 'message'
    };
    
    // Сохраняем сообщение
    messages.push(chatMessage);
    
    // Отправляем всем
    broadcast({
        type: 'new_message',
        ...chatMessage
    });
    
    console.log(`${user.username}: ${message.text}`);
}

function handleTyping(ws, message) {
    const user = users.get(ws);
    if (!user) return;
    
    broadcast({
        type: 'user_typing',
        username: user.username,
        isTyping: message.isTyping
    }, ws); // не отправляем отправителю
}

function handleCall(ws, message) {
    const user = users.get(ws);
    if (!user) return;
    
    // В будущем здесь будет логика звонков
    broadcast({
        type: 'call_request',
        from: user.username,
        ...message
    });
}

function broadcast(data, excludeWs = null) {
    const jsonData = JSON.stringify(data);
    wss.clients.forEach(client => {
        if (client !== excludeWs && client.readyState === WebSocket.OPEN) {
            client.send(jsonData);
        }
    });
}

// Старт сервера
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    console.log(`WebSocket: ws://localhost:${PORT}`);
    console.log(`HTTP: http://localhost:${PORT}`);
});

// Админ-статистика
app.get('/admin', (req, res) => {
    res.json({
        status: 'online',
        users: Array.from(onlineUsers),
        totalMessages: messages.length,
        uptime: process.uptime()
    });
});
