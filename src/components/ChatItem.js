import React from 'react'
import './ChatItem.scss'
import classNames from 'classnames'

const ChatItem = (
    {
        chat,
        isActive,
        onChatItemSelected,
    }) => {
    const className = classNames('chat-user', {
        'active': isActive
    })

    return (
            <div className={className} onClick={()=> {onChatItemSelected(chat.id)}}>
                    <div className='title-and-photo'>
                            <img className='user-photo' src={chat.imageSrc} alt=''></img>
                        <div className='user-name'>{chat.title}</div>
                    </div>
                    <div className='created-date'>{chat.createdAt}</div>
            </div>
    )
}

export default ChatItem

