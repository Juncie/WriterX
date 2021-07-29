import { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import actions from "./api";
import TheContext from "../TheContext";
import { Link } from "react-router-dom";


function Welcome(props) {
  let { getTheUser } = useContext(TheContext);

  const responseGoogle = async (response) => {
    console.log(response);
    await actions.authenticate(response.profileObj);
    await getTheUser();
    props.history.push("/hub");
  };

  return (
    <div id='welcomePage'>
      <div className="header">
          <h1>WX</h1>
      </div>
      <div className="body">
        <h1><span className='writerLogo'>Writer</span>X</h1>
        <h3>Let Your Inner Creator Glow</h3>
        <GoogleLogin
        className='Google-Login'
        clientId={process.env.REACT_APP_GOOGLEID}
        buttonText="Start Your Journey"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

      </div>
      <div className="cb1"></div>
    </div>
  );
}

export default Welcome;
