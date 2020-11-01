import React from 'react'
import './ChatsList.scss'
import ChatItem from './ChatItem'

const ChatsList = (
    { 
        chats, 
        selectedChatsId, 
        onChatItemSelected,
        input
    }) => {

        if (input.length > 0) {
            chats = chats.filter(person => {
                return person.title.toLowerCase().match(input)  
            })
        }

        const chatItems = chats.map((chat) => (
                <ChatItem 
                key={chat.id}
                onChatItemSelected={onChatItemSelected}
                isActive={chat.id === selectedChatsId}
                chat={chat} />
    ))

    return (
            <div className='chats-list'>
                <h4 className='chats-logo'>Chats</h4>
                <div className='chats'>
                    {chatItems}
                </div>  
            </div>
    )
}

export default ChatsList
