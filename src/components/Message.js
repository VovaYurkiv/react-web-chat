import React from 'react'
import './Message.scss'

const Message = (props) => {

    let messageClass = 'message-row'
    let imageThumbnail = null

    if (props.isMyMessage) {  
        messageClass += ' outcoming' 
    } else {
        messageClass += ' incoming' 
        imageThumbnail = <img className='user-avatar' src={props.message.imageSrc} alt='' />
    }
    return (
            <div className={messageClass}>
                <div className = 'message-content'>
                <div className='message-content-photo'>
                    {imageThumbnail}
                </div>
                <div className='message-and-date'>
                <div className='message-text'>
                    {props.message.messageText}
                </div>
                <div className='message-date'>
                    {props.message.createdAt}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Message
