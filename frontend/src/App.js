import logo from "./logo.svg";
import { useEffect, useState } from "react";
import actions from "./components/api";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import TheContext from "./TheContext";
import Welcome from "./components/Welcome";
import Auth from "./components/Welcome";
import Suggestions from "./components/Suggestions";
import Hub from "./components/Hub";
import Canvas from "./components/directories/Canvas";
import Characters from "./components/directories/Characters";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import CommunityBoard from "./components/CommunityBoard";
import Novels from "./components/directories/Novels";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Chapters from "./components/directories/Chapters";
import Locations from "./components/directories/Locations";
import Plots from "./components/directories/Plots";
import Scenes from "./components/directories/Scenes";

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
        <i>{user?.name}</i>
        <Switch>
          <Route exact path="/" render={(props) => <Welcome {...props} />} />
          <Route exact path="/suggestions" render={(props) => <Suggestions {...props} />} />
          <Route exact path="/auth" render={(props) => <Auth {...props} />} />
          <Route exact path="/hub" render={(props) => <Hub {...props} user={user} />} />
          <Route exact path="/canvas" render={(props) => <Canvas {...props} />} />
          <Route exact path="/new-characters" render={(props) => <Characters />} />
          <Route exact path="/sidebar" render={(props) => <Sidebar {...props} />} />
          <Route exact path="/display" render={(props) => <Display {...props} />} />
          <Route exact path="/community-board" render={(props) => <CommunityBoard />} />
          <Route exact path="/novels" render={(props) => <Novels {...props} />} />
          <Route exact path="/chapters" render={(props) => <Chapters {...props} />} />
          <Route exact path="/locations" render={(props) => <Locations {...props} />} />
          <Route exact path="/plots" render={(props) => <Plots {...props} />} />
          <Route exact path="/scenes" render={(props) => <Scenes {...props} />} />
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
