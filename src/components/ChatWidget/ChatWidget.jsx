import React, { useState } from 'react';
import './ChatWidget.css';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Codify Support</h3>
            <button onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <div className="chat-body">
            <p>Halo! Ada yang bisa kami bantu hari ini?</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Tulis pesan..." />
            <button>Kirim</button>
          </div>
        </div>
      )}
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <span className="chat-icon">💬</span>
        )}
      </button>
    </div>
  );
}

export default ChatWidget;
