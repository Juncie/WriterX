import React from 'react';
import { Link } from 'react-router-dom'

function Welcome(props) {
    return (
        <div>
            <nav>
                <Link to='/'>WX</Link>
                <Link to='/Auth'>Login/SignUp</Link>
                
            </nav>
        </div>
    );
}

export default Welcome;