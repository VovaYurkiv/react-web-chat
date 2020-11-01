import React from 'react'
import './Navbar.scss'
import { app } from '../base'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h3 className='navbar-logo'>React Chat</h3>
            <button 
                className='button-out' 
                onClick={() => app.auth().signOut()}>
                Logout
            </button>
        </div>
    )
}

export default Navbar
