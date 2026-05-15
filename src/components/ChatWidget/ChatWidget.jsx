import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ChatWidget.css';

function ChatWidget() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3><i className="fa-solid fa-headset" style={{ marginRight: '8px' }}></i>{t('chatWidget.supportTitle')}</h3>
            <button onClick={() => setIsOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="chat-body">
            <p>{t('chatWidget.greeting')}</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder={t('chatWidget.placeholder')} />
            <button><i className="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
      )}
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-comment-dots"></i>
        )}
      </button>
    </div>
  );
}

export default ChatWidget;
