import logo from "./logo.svg";
import { useEffect, useState } from "react";
import actions from "./api";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import TheContext from "./TheContext";
import Welcome from "./components/Welcome";
import Auth from "./components/Auth";
import Suggestions from "./components/Suggestions";
import Profile from "./components/Profile";
import Canvas from "./components/directories/Canvas";
import Characters from "./components/directories/Characters";

function App() {
  let [user, setUser] = useState({});

  const getTheUser = async () => {
    let res = await actions.getUser();
    setUser(res.data);
  };

  useEffect(() => {
    getTheUser();
  }, []);

  return (
    <TheContext.Provider value={{ user, setUser, getTheUser }}>
      <div className="App">
        <h1>🚀 MERN APP TORO 🎯 </h1>
        <i>{user?.name}</i>
        <Link to="/characters">
          <h2>XXX</h2>
        </Link>
        <Switch>
          <Route exact path="/" render={(props) => <Welcome {...props} />} />
          <Route exact path="/suggestions" render={(props) => <Suggestions {...props} />} />
          <Route exact path="/auth" render={(props) => <Auth {...props} />} />
          <Route exact path="/profile" render={(props) => <Profile {...props} user={user} />} />
          <Route exact path="/canvas" render={(props) => <Canvas {...props} />} />
          <Route exact path="/characters" render={(props) => <Characters />} />
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
