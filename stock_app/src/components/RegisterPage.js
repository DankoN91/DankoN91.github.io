import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/rsz_stockapp_logo_transparent.png';
import NewsList from './NewsList';
import Register from './Register';
import { registerUser } from '../service/coetusApi';
import { getLiveNews } from '../service/finnhubApi';


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news:[],
            name:'',
            surname:'',
            username:'',
            password:'',
            repeatPassword:'',
            email:''
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

    

    onRegister = () => {
        if(this.state.password !== this.state.repeatPassword){
            alert('Repeated password does not match!');
            console.log(this.state.password,this.state.repeatPassword)
            return;
        }

        registerUser(this.state.name,this.state.surname,this.state.username,this.state.email,this.state.password);
    }

    setName = (e) => {
        let data = e.target.value;
        this.setState({
            name:data
        }) 
    }

    setSurname = (e) => {
        let data = e.target.value;
        this.setState({
            surname:data
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

    setRepeatPassword = (e) => {
        let data = e.target.value;
        this.setState({
            repeatPassword:data
        })
    }

    setEmail = (e) => {
        let data = e.target.value;
        this.setState({
            email:data
        })
    }


    render (){
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    <Link to="/home"><img src={logo} alt="logo"/></Link>
                    </div>   
                </div>
                <hr></hr>
                <div class="row">
                    <div class="col-md-4">
                        <NewsList news={this.state.news}/>
                    </div>
                    <div class="col-md-2"></div>          
                    <Register onRegisterHandler={this.onRegister} setNameHandler={this.setName} setSurnameHandler={this.setSurname} setUsernameHandler={this.setUsername} setEmailHandler={this.setEmail} setPasswordHandler={this.setPassword} setRepeatPasswordHandler={this.setRepeatPassword}/>   
                </div>
                <hr></hr>
            </div>
            
        )
    }
}


export default RegisterPage;