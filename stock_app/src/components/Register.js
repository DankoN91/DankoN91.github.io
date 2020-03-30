import React from 'react';
import NewsList from './NewsList';
import { registerUser } from '../service/CoetusApi';
import getLiveNews from '../service/LiveNewsApi';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            news:[],
            username:'',
            password:''
        }
        
    }
    componentDidMount(){
        this.setNews();
    }

    setNews=async()=>{
        let data = await getLiveNews();
        this.setState({
            news:data
        })
    }

    render (){
        return (
            <div>
                <p>Name:</p>
                <input type="text"></input>
                <p>Surname:</p>
                <input type="text"></input>
                <p>Username:</p>
                <input type="text"></input>
                <p>Email:</p>
                <input type="text"></input>
                <p>Password:</p>
                <input type="text"></input>
                <p>Repeat password:</p>
                <input type="text"></input>
                <br></br>
                <br></br>
                <button onClick={registerUser}>Register</button> 
                <NewsList news={this.state.news}/>       
            </div>
            
        )
    }
}


export default Register;