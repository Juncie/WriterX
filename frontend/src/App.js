import logo from './logo.svg';
import { useEffect, useState } from 'react'
import actions from './api'
import './App.css';
import { Switch, Link, Route } from 'react-router-dom'
import TheContext from './TheContext';
import Home from './components/Home'
import Auth from './components/Auth'
import AddPost from './components/AddPost'
import Profile from './components/Profile'
import Directories from './components/Directories'
import Hub from './components/Hub'
import Canvas from './components/Canvas'

function App() {

  let [user, setUser] = useState({})

  const getTheUser = async () => {
    let res = await actions.getUser()
    setUser(res.data)
  }

  useEffect(() => {
    getTheUser()
  }, [])

  return (
    <TheContext.Provider value={{ user, setUser, getTheUser }}>
      <div className="App">
        <h1>🚀 MERN APP TORO 🎯 </h1>
        <i>{user?.name}</i>
        
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route exact path="/AddPost" render={(props) => <AddPost {...props} />} />
          <Route exact path="/Auth" render={(props) => <Auth {...props} />} />
          <Route exact path="/Profile" render={(props) => <Profile {...props} user={user} />} />
          <Route exact path="/Directories" render={(props) => <Directories {...props} />} /> 
          <Route exact path="/Hub" render={(props) => <Hub {...props} />} />
          <Route exact path="/Canvas" render={(props) => <Canvas {...props} />} />
        </Switch>

      </div>
    </TheContext.Provider>
  );
}

export default App;
