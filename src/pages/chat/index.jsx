// SeuComponenteReact.js
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

import './index.css';

const socket = io('https://chatserver-3ua3.onrender.com'); // Substitua pelo endereço do seu servidor Socket.IO

const Chats = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);
  const room = "suaSala"; // Substitua com o nome da sua sala

  useEffect(() => {
    // Configurar ouvintes para receber mensagens e lista completa de mensagens
    socket.on('receive_message', (data) => {
      // Verificar se a mensagem já existe na lista antes de adicioná-la
      if (!messages.some((msg) => msg.text === data.text && msg.author === data.author)) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    socket.on('all_messages', (allMessages) => {
      setMessages(allMessages);
    });
  }, [messages]);

  const joinRoom = () => {
    // Emitir evento para o servidor, indicando a entrada na sala
    socket.emit('join_room', room);
  };

  const sendMessage = () => {
    // Emitir evento para o servidor, enviando mensagem para a sala
    socket.emit('send_message', { room, text: inputMessage, author: 'Você' });

    // Limpar o campo de mensagem após o envio
    setInputMessage('');
  };
  
  return (
    <div className="chat-container">
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.author}:</strong> {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chats;
