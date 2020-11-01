import React, {useState} from 'react'
import './Chat.scss'
import Navbar from './Navbar'
import ChatSearch from './ChatSearch'
import ChatsList from './ChatsList'
import ConversationUser from './ConversationUser'
import Conversation from './Conversation'
import SubmitMessage from './SubmitMessage'
import { connect } from 'react-redux'
import { chatChanged, myMessageAdded, otherMessageAdded } from '../actions'


const Chat = (
    { 
        chats, 
        selectedChats, 
        chatChanged,
        onMessageSent,
        onChuckNorrisReply,
        handleInput,
    }) => {

        const [input, setInput] = useState('')

        handleInput = (e) => {
            e.preventDefault()
            setInput(e.target.value)
        }

    return (
            <div className='container'>
                <Navbar />
            <div className='whole-chat'>
                <div className='chat-shell'>
                <ChatSearch 
                    chats={chats}
                    handleInput={handleInput}
                    input={input} />
                <ChatsList
                    onChatItemSelected={chatChanged}
                    chats={chats}
                    selectedChatsId={selectedChats.id}
                    input={input} />
            </div>
            <div className='chat-section'>
                <ConversationUser selectedChats={selectedChats} />
                <Conversation messages={selectedChats.messages} />
                <SubmitMessage 
                    onMessageSent={onMessageSent}
                    onChuckNorrisReply={onChuckNorrisReply} />
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chats: state.chatState.chats,
        selectedChats: state.chatState.selectedChats
    }  
}


const mapDispatchToProps = dispatch => ({
    chatChanged: chatId => dispatch(chatChanged(chatId)),
    onMessageSent: messageText => { dispatch(myMessageAdded(messageText)) },
    onChuckNorrisReply: messageText => { dispatch(otherMessageAdded(messageText)) }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Chat)

