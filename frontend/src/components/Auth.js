import { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import actions from "./api";
import TheContext from "../TheContext";
function Auth(props) {
  let { getTheUser } = useContext(TheContext);

  const responseGoogle = async (response) => {
    console.log(response);
    await actions.authenticate(response.profileObj);
    await getTheUser();
    props.history.push("/hub");
  };

  const failure = () => console.log("Game Over Man");
  return (
    <div>
      <h3>Auth</h3>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLEID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={failure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Auth;
