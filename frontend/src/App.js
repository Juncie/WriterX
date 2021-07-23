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
          <Route exact path="/suggestions" render={(props) => <Suggestions {...props} />} />
          <Route exact path="/auth" render={(props) => <Auth {...props} />} />
          <Route exact path="/hub" render={(props) => <Hub {...props} user={user} />} />
          <Route exact path="/canvas" render={(props) => <Canvas {...props} />} />
          <Route exact path="/new-characters" render={(props) => <Characters />} />
          {/* FOR LATER*/}
          {/* <Route exact path="/myCharacters" render={(props) => <MyCharacters />} /> */}
          {/* <Route exact path="/myLocations" render={(props) => <MyLocations />} /> */}
          {/* <Route exact path="/myNotes" render={(props) => <MyNotes />} /> */}
          {/* <Route exact path="/myPlots" render={(props) => <MyPlots />} /> */}
          {/* <Route exact path="/myNovels" render={(props) => <MyNovels />} /> */}
        </Switch>
      </div>
    </TheContext.Provider>
  );
}

export default App;
