import React from 'react'
import './ConversationUser.scss'

const ConversationUser = (props) => {
    return (
            <div className='display-user'>
                <div>
                    <img className='user-photo' src={props.selectedChats.imageSrc} alt=''></img>
                </div>
                <div className='user-name'>{props.selectedChats.title}</div>
        </div>
    )
}

export default ConversationUser
