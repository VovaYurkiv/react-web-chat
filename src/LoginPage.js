import React, {useEffect, useContext} from 'react'
import firebase from 'firebase/app'
import {app} from './base'
import './LoginPage.scss'
import {AuthContext} from './Auth'
import { Redirect } from 'react-router-dom'

const LoginPage = () => {

    const provider = new firebase.auth.GoogleAuthProvider()
    const {currentUser} = useContext(AuthContext)

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
                if(user) {
                    console.log(`User signed in: ${user.displayName}`)
                }   
        })
    }, [])

    const authWithGoogle = () => {
        firebase.auth().signInWithPopup(provider)
    }

    if (currentUser) {
        return <Redirect to='/' />
    }

    return ( 
        <> 
        <div className='login-page'>
            <div className='login-component'>
                <button className='button-in' onClick={authWithGoogle}>Sign in with Google</button>
            </div>
        </div>
        </> 
    )
}

export default LoginPage