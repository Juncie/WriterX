import { useContext } from 'react';
import TheContext from '../TheContext'


function Profile(props) {
    let { user, setUser } = useContext(TheContext)

    const logOut = () => {
        localStorage.removeItem('token')
        setUser(null)
    }

    return (
        <div>
            <h2>Profile {props.user?.name}</h2>
            <img src={user?.imageUrl} />
            <button onClick={logOut}>Log out</button>
        </div>
    );
}

export default Profile;