import { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import actions from '../api'
import TheContext from '../TheContext'


function Auth(props) {

    let { getTheUser } = useContext(TheContext)


    const responseGoogle = async (response) => {
        console.log(response)
        await actions.authenticate(response.profileObj)
        await getTheUser()
    }

    return (
        <div>
            <h3>Auth</h3>
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLEID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />


        </div>
    );
}

export default Auth;