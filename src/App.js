import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { AuthProvider } from './Auth';
import Chat from './components/Chat'
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute'




const App = () => {
  return (
    <AuthProvider>
      <Router>
            <PrivateRoute exact path='/' component={Chat} />
            <Route exact path='/login' component={LoginPage} />
      </Router>
    </AuthProvider>
  );
}

export default App;
