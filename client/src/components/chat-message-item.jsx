import React from 'react';

const ChatMessageItem = props => {
    const { sender, message } = props;

    return (
        <div className='chat-message'>
            <span>
                <span className='sender'>{sender}:</span>
                <span className='msg'>{message}:</span>
            </span>
        </div>
    );
}

export default ChatMessageItem;
