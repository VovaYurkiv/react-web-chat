import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './SubmitMessage.scss'

const isMessageEmpty = (textMessage) => {
    return adjustTextMessage(textMessage).length === 0;
}

const adjustTextMessage = (textMessage) => {
    return textMessage.trim()
}


const SubmitMessage = ({onMessageSent, onChuckNorrisReply}) => {

    const [textMessage, setTextMessage] = useState('')
    const [quote, setQuote] = useState('')

    const getJokes = async () => {
        const chuckJokes = await axios.get('https://api.chucknorris.io/jokes/random')
        setQuote(chuckJokes.data.value)
    }
    
        useEffect( () => {
            getJokes()
        }, [])


   const handleFormSubmit = (e) => {
        e.preventDefault()

        if(!isMessageEmpty(textMessage)) {
            onMessageSent(textMessage)
            const timer = setTimeout(() => {
                onChuckNorrisReply(quote)
              }, 5000);
              setQuote('')
              setTextMessage('')
              return () => clearTimeout(timer)
        }
    }

    return (
        <div className='submit-msg'>
            <form onSubmit={handleFormSubmit}>
                <input 
                    className='type-msg'
                    placeholder='Type your message'
                    value={textMessage}
                    onChange={ (e) => { setTextMessage(e.target.value); } }
                />
                <button onClick={getJokes} type='submit' className='send-msg'>SEND</button>
            </form>
        </div>
    )
}

export default SubmitMessage
