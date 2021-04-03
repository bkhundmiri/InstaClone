// package imports
import { useState, useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router';

// component imports
import './App.css';
import MainContainer from './containers/MainContainer/MainContainer';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';

// services imports
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/feed');
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/feed');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
    <div className="App">
        <Switch>
          <Route path='/register'>
            <Register
              handleRegister={handleRegister}
            />
          </Route>
          <Route path='/login'>
            <Login 
              handleLogin={handleLogin}
            />
          </Route>
          <Route path='/'>
            { currentUser ? (
                <MainContainer
                  currentUser={currentUser}
                  handleLogout={handleLogout}
                />
              ) : <Redirect to='/login' />}
          </Route>
        </Switch>
    </div>
  );
}

export default App;
