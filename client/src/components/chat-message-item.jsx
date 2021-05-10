import React from 'react';

const ChatMessageItem = props => {
    const { sender, message, date } = props;

    return (
        <div className='chat-message'>
            <span className='msg-time'>{new Date(date).toLocaleTimeString()}</span>
            <span>
                <span className='sender'>{sender}:</span>
                <span className='msg'>{message}</span>
            </span>
        </div>
    );
}

export default ChatMessageItem;
