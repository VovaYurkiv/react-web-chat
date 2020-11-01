import React, {useContext} from 'react'
import {AuthContext} from '../Auth'
import './ChatSearch.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const ChatSearch = ({handleInput, input}) => {

    const {currentUser} = useContext(AuthContext)  

    return (
            <div className='menu-top'>
                <div className='current-user'>
                    <div className='current-user-photo'>
                        {currentUser && <img className='user-photo' src={currentUser.photoURL} width='50px' height='50px' alt=''></img>}
                    </div>
                    {currentUser && <div className='current-user-name'>{currentUser.displayName}</div>}
                </div>
                    <div className='search-field'>
                    <div className='search-icon'><FontAwesomeIcon icon={faSearch} /></div>
                    <input
                        type='text' 
                        className='search' 
                        placeholder='Search'
                        onChange={handleInput} 
                        value={input}  
                    />
                    </div>
            </div>
    )
}

export default ChatSearch
