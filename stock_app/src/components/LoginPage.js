import React from 'react';
import { Link } from 'react-router-dom';
import { getLiveNews } from '../service/finnhubApi';
import logo from '../resources/rsz_stockapp_logo_transparent.png';

import NewsList from './NewsList';
import Login from './Login';
import Slider from './Slider';
import { loginUser } from '../service/coetusApi'; 
import { withRouter } from "react-router-dom";


class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            news:[],
            username:'',
            password:'',
            candlesticksData:[],
        }
        
    }
    componentDidMount(){
        this.setNews();
    }
    
    onLogin = () => {
        this.setState({
            username:'',
            password:'',
        })
        loginUser(this.state.username,this.state.password).then(()=>{
            this.props.history.push('/home')
        })
        
    }

    setNews=async()=>{
        let data = await getLiveNews();
        this.setState({
            news:data
        })
    }

    setUsername = (e) => {
        let data = e.target.value;
        this.setState({
            username:data
        })
    }

    setPassword = (e) => {
        let data = e.target.value;
        this.setState({
            password:data
        })
    }

    render() {
        
        return (
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <Link to="/login"><img src={logo} alt="logo"/></Link>
                        </div>
                        <div className="col-md-5">
                            <div className="row" style={{height:"36%"}}></div>
                            <Login onLoginHandler={this.onLogin} setUsernameHandler={this.setUsername} setPasswordHandler={this.setPassword} usernameValue={this.state.username} passwordValue={this.state.password}/>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4">
                            <NewsList news={this.state.news}/>
                        </div>
                        <Slider />   
                    </div>
                    <hr></hr>
                </div>
            
        )
    }
}


export default withRouter(LoginPage);