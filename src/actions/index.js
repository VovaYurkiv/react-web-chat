
export const chatChanged = chatId => ({
    type: 'SELECTED_CHAT_CHANGED',
    chatId
})

export const myMessageAdded = textMessage => ({
    type: 'MY_MESSAGE_ADDED',
    textMessage
})

export const otherMessageAdded = quote => ({
    type: 'OTHER_MESSAGE_ADDED',
    quote
})
