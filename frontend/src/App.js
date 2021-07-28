import logo from "./logo.svg";
import { useEffect, useState } from "react";
import actions from "./components/api";
import "./App.css";
import { Switch, Link, Route } from "react-router-dom";
import TheContext from "./TheContext";
import Welcome from "./components/Welcome";
import Auth from "./components/Auth";
import Suggestions from "./components/Suggestions";
import Hub from "./components/Hub";
import Canvas from "./components/directories/Canvas";
import Characters from "./components/directories/Characters";
import Sidebar from "./components/Sidebar";
import ProfileBar from "./components/ProfileBar";
import CommunityBoard from "./components/CommunityBoard";
import Novels from "./components/directories/Novels";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Chapter from "./components/directories/Chapter";
import Locations from "./components/directories/Locations";
import Plot from "./components/directories/Plot";

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
        {/* <i>{user?.name}</i> */}
        <Switch>
          <Route exact path="/" render={(props) => <Welcome {...props} />} />
          <Route exact path="/auth" render={(props) => <Auth {...props} />} />
          <Route exact path="/hub" render={(props) => <Hub {...props} user={user} />} />
          <Route exact path="/novels/:id" render={(props) => <Canvas {...props} />} />
          <Route exact path="/chapter/:id" render={(props) => <Chapter {...props} />} />
          <Route exact path="/plot/:id" render={(props) => <Plot {...props} />} />
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
