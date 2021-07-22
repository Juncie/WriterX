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
import Hub from './components/Hub'
import Canvas from './components/Canvas'
import Characters from './components/directories/Characters';


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
        <Link to='/characters'>
          <h2>XXX</h2>
        </Link>
        <Switch>
          <Route exact path="/" render={(props) => <home {...props} />} />
          <Route exact path="/addPost" render={(props) => <AddPost {...props} />} />
          <Route exact path="/auth" render={(props) => <Auth {...props} />} />
          <Route exact path="/profile" render={(props) => <Profile {...props} user={user} />} />
          <Route exact path="/hub" render={(props) => <Hub {...props} />} />
          <Route exact path="/canvas" render={(props) => <Canvas {...props} />} />
          <Route exact path="/home" render={(props) => <Home {...props} />} />
          <Route exact path="/hub" render={(props) => <Hub {...props} />} />
          <Route exact path="/new-characters" render={(props) => <Characters  /> } />
        </Switch>

      </div>
    </TheContext.Provider>
  );
}

export default App;
