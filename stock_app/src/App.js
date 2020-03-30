import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import Register from './components/Register';
import logo from '../src/resources/rsz_stockapp_logo_transparent.png';




function App() {
  return (
    
      <Router>
      <div>
        <Link to="/register"><img src={logo}/></Link>
        
        <Switch>
          {/* <Route path="/">
            <LoginPage />
          </Route> */}
          <Route path="/login">
            <LoginPage register={<Link to="register">Not a user? Register now!</Link>}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* <Route path="/home">
            <Home /> */}
          {/* </Route> */}
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
