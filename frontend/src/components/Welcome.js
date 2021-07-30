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
      
      <div className="cb1">
      <div className="description">
        <h3>Organize your projects</h3>
        <p>Have easy access to your most recent work as soon as you log in. 
        Always be able to pick up where you started and track goals</p>
        </div>
        <img src="https://i.imgur.com/pI0hKds.jpeg"/>
      </div>
      <div className="cb2">
      <img src="https://i.imgur.com/eF6R2tZ.png" />
        <div className="description">
          <h3>Quickly reference</h3>
            <p>Whether it's notes you wrote about a plot, or a photograph to give you inspiration on the character you're writting, quickly reference what you need to inspire yourself and keep going!</p>
        </div>
      </div>
      <div className="cb3">
      <div className="description">
        <h3>Never forget an idea</h3>
        <p>With the notes section available as soon as you log in, never forget another idea again! You can manage your notes for different novels </p>
        </div>
        <img src="https://i.imgur.com/USply5S.png" />
      </div>
      <div className="cb4">
        <h3>Join Our Community Today!</h3>
        <GoogleLogin
        className='Google-Login'
        clientId={process.env.REACT_APP_GOOGLEID}
        buttonText="Join"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      </div>
      <footer>
        <img src="https://img.icons8.com/ios11/2x/discord-logo.png" />
        <img src="https://img.icons8.com/ios11/2x/facebook.png" /> 
        <img src="https://img.icons8.com/ios11/2x/github.png" />
        <img src="https://img.icons8.com/ios11/2x/instagram-new.png" />
        <img src="https://img.icons8.com/ios11/2x/twitter.png" /> 
      </footer>
      </div>
  );
}
export default Welcome;