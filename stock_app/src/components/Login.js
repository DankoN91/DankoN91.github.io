import React from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


class Login extends React.Component {
    constructor() {
        super();
    }
    render (){
        return (
                <Form>
                    <Form.Row>
                        <Col>
                        <Form.Control placeholder="Username" required value={this.props.usernameValue} onInput={this.props.setUsernameHandler} />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Password" type="password" value={this.props.passwordValue} required onInput={this.props.setPasswordHandler}/>
                        </Col>
                        <Button variant="light" onClick={this.props.onLoginHandler}>Login</Button>                 
                    </Form.Row>
                    <Form.Row>
                        <Col md-col-2></Col>
                        <Col md-col-2></Col>
                        <Link to="register">Not a user? Register now!</Link>
                    </Form.Row>   
                </Form>     
        )
    }
}


export default Login;


