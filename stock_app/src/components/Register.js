import React from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';


class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render (){
        return (
            <Card bg="light">
                <Card.Header style={{ color: 'gray', textAlign: 'center' }}><h3><b>Register</b></h3></Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                <label>Name:</label>
                            </Form.Row>
                            <Form.Row>
                                <FormControl name="name" type="text" required={true} onInput={this.props.setNameHandler}/>
                            </Form.Row>
                            <Form.Row>
                                <label>Surname:</label>
                            </Form.Row>
                            <Form.Row>
                                <FormControl name="surname" type="text" required={true} onInput={this.props.setSurnameHandler}/>
                            </Form.Row>
                            <Form.Row>
                                <label>Username:</label>
                            </Form.Row>
                            <Form.Row>
                                <FormControl name="userName" type="text" required={true} onInput={this.props.setUsernameHandler}/>
                            </Form.Row>
                            <Form.Row>
                                <label>Email:</label>
                            </Form.Row>
                            <Form.Row>
                                <FormControl name="email" type="text" required={true} onInput={this.props.setEmailHandler}/>
                            </Form.Row>
                            <Form.Row> 
                                <label>Password:</label>
                            </Form.Row>
                            <Form.Row>
                                <FormControl name="password" type="password" required={true} onInput={this.props.setPasswordHandler}/>
                            </Form.Row>
                            <Form.Row>         
                                <label>Repeated password:</label>
                            </Form.Row>
                            <Form.Row>
                                <FormControl name="repeatPassword" type="password" required={true} onInput={this.props.setRepeatPasswordHandler}/>
                            </Form.Row>
                            <br></br>
                            <Button variant="light" onClick={this.props.onRegisterHandler}>Register</Button>
                            <br></br>
                            <br></br>
                            <Link to="login">Back to the login page.</Link>
                        </Form>
                    </Card.Body>
            </Card>          
        )
    }
}




export default Register;