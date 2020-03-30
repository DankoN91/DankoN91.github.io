import React from 'react';
import { loginUser } from '../service/CoetusApi';


class Login extends React.Component {
    constructor() {
        super();
    }
    render (){
        return (
            <div>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                <button onClick={loginUser}>Login</button>
                
                <p>{this.props.register}</p>
            </div>
        )
    }
}


export default Login;