import React from 'react';
import getLiveNews from '../service/LiveNewsApi';
import NewsList from './NewsList';
import Login from './Login';




class LoginPage extends React.Component {
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

    setUser=async()=>{
        
        this.setState({
            username:'danko',
            password:'filip'
        })

    }
   

    render() {
        return (
            <div>
                <Login register={this.props.register}/>
                <NewsList news={this.state.news}/>
  
            </div>
        )
    }
}


export default LoginPage;