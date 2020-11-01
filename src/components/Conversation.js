import React, {useEffect, useRef} from 'react'
import './Conversation.scss'
import Message from './Message'



const Conversation = (props) => {

    const scrollDown = useRef(null)

    useEffect(() => {
        scrollDown.current.scrollIntoView({ block: 'end', behavior: 'smooth'})
    })

    const messageItems = props.messages.map((message, index) => {
        return <Message
            key={index}
            isMyMessage={message.isMyMessage}
            message={message} />
    })

    return (
            <div 
                className='main-conversation'>
                {messageItems}
                <div id={'scrollDown'} ref={scrollDown}></div>
            </div>
    )
}

export default Conversation
