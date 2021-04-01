// package imports
import { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router';

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
        <Route path='/feed'>
          <MainContainer
            currentUser={currentUser}
            handleLogout={handleLogout}
            />
        </Route>
        <Route path='/register'>
          <Register
            handleRegister={handleRegister}
            />
        </Route>
        <Route path='/'>
          <Login 
            handleLogin={handleLogin}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
