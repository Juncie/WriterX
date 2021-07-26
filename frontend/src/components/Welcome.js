import { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import actions from "./api";
import TheContext from "../TheContext";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Auth(props) {
  let { getTheUser } = useContext(TheContext);

  const responseGoogle = async (response) => {
    console.log(response);
    await actions.authenticate(response.profileObj);
    await getTheUser();
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <h1>WX</h1>
        </div>
        <div className="loginButtons">
          <button>
            <Link to="/auth">Log In</Link>
          </button>
        </div>
      </div>
      <div className="body">
        <h1>WriterX</h1>
        <h3>Writing for the People by the People</h3>
        <button className="join">Join Our Community</button>
      </div>
      <div className="cb1"></div>
    </div>
  );
}

export default Auth;
