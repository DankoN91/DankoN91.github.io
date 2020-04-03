import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect 
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function loggedIn() {
  if(window.localStorage.getItem("stockAppToken")!=null){
    return true;
  }
  return false;
} 

function App() {
  return (
    
      <Router>
      <div>     
        <Switch>
          <Route path="/" exact render={()=><Redirect to="/login" />} /> />
          <Route path="/home" render={()=>{return loggedIn() ? <Home /> : <Redirect to="/login"/>}} />
          
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
