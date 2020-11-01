import Alice from '../components/assets/Alice.jpg'
import Barrera from '../components/assets/Barrera.jpg'
import Cam from '../components/assets/Cam.jpg'
import Chris from '../components/assets/Chris.jpg'
import Jacob from '../components/assets/Jacob.jpg'
import Joe from '../components/assets/Joe.jpg'
import Josefina from '../components/assets/Josefina.jpg'
import Megan from '../components/assets/Megan.jpeg'
import Rachel from '../components/assets/Rachel.jpeg'
import Velazquez from '../components/assets/Velazquez.jpg'
import moment from 'moment'


    let initialState = {

        chats: [
        {   
            id: '1',
            imageSrc: Alice,
            title: 'Alice Freeman',
            createdAt: 'Oct 29',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '30-10-2020, 10:14',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Alice!',
                    createdAt: '30-10-2020, 10:30',
                    isMyMessage: true
                },
            ]
        },
        {   
            id: '2',
            imageSrc: Barrera,
            title: 'Barrera',
            createdAt: 'Oct 28',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '29-10-2020, 13:15',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Barrera!',
                    createdAt: '29-10-2020, 13:16',
                    isMyMessage: true
                },
            ]
        },
        {   
            id: '3',
            imageSrc: Cam,
            title: 'Cam Mccaul',
            createdAt: 'Oct 28',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '29-10-2020, 11:46',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Cam!',
                    createdAt: '29-10-2020, 12:01',
                    isMyMessage: true
                },
            ]
        },
        {
            id: '4',
            imageSrc: Chris,
            title: 'Chris',
            createdAt: 'Oct 27',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '28-10-2020, 10:34',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Chris!',
                    createdAt: '28-10-2020, 10:34',
                    isMyMessage: true
                },
            ]
        },
        {
            id: '5',
            imageSrc: Jacob,
            title: 'Jacob Miller',
            createdAt: 'Oct 27',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '28-10-2020, 10:50',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Jacob!',
                    createdAt: '28-10-2020, 10:52',
                    isMyMessage: true
                },
            ]
        },
        {
            id: '6',
            imageSrc: Joe,
            title: 'Joe Percell',
            createdAt: 'Oct 15',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '28-10-2020, 15:00',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Alice!',
                    createdAt: '28-10-2020, 15:05',
                    isMyMessage: true
                },
            ]
        },
        {
            id: '7',
            imageSrc: Josefina,
            title: 'Josefina',
            createdAt: 'Oct 10',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '26-10-2020, 09:18',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Josefina!',
                    createdAt: '26-10-2020, 09:19',
                    isMyMessage: true
                },
            ]
        },
        {
            id: '8',
            imageSrc: Megan,
            title: 'Megan Fox',
            createdAt: 'Sep 28',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '26-10-2020, 21:15',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Megan!',
                    createdAt: '26-10-2020, 22:09',
                    isMyMessage: true
                },
            ]
        },
        {   
            id: '9',
            imageSrc: Rachel,
            title: 'Rachel',
            createdAt: 'Sep 25',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '26-10-2020, 10:03',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Rachel!',
                    createdAt: '26-10-2020, 10:18',
                    isMyMessage: true
                },
            ]
        },
        {
            id: '10',
            imageSrc: Velazquez,
            title: 'Velazquez',
            createdAt: 'Aug 24',
            messages: [
                {
                    messageText: 'Hello!',
                    createdAt: '26-10-2020, 19:30',
                    isMyMessage: false
                },
                {
                    messageText: 'Hi, Velazquez!',
                    createdAt: '26-10-2020, 19:31',
                    isMyMessage: true
                }
            ]
        },
    ],
    selectedChats: {}
}

initialState.selectedChats = initialState.chats[0]


const chatsReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'SELECTED_CHAT_CHANGED': {
            const newState = {...state}
                newState.selectedChats = newState.chats.find(chat => chat.id === action.chatId)
            return newState
        }
        case 'MY_MESSAGE_ADDED': {
            const newState = {...state}
            newState.selectedChats = {...newState.selectedChats}

            newState.selectedChats.messages.push(
                {   
                    messageText: action.textMessage,
                    createdAt: moment().format('DD-MM-YYYY, HH:mm'),
                    isMyMessage: true
                }
            )
            return newState
        }
        case 'OTHER_MESSAGE_ADDED': {
            const newState = {...state}
            newState.selectedChats = {...newState.selectedChats}

            newState.selectedChats.messages.push(
                {   imageSrc: null,
                    messageText: action.quote,
                    createdAt: moment().format('DD-MM-YYYY, HH:mm'),
                    isMyMessage: false
                }
            )
            return newState
        }
        default:
            return state
    }
}

export default chatsReducer
