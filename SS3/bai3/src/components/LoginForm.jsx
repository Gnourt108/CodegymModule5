import React from "react";
import { Card, CardBody, Form, Button, Alert } from "react-bootstrap";
import Welcome from "./Welcome";

class LoginForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
            error: ''
        };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value,
            error: ''
        })
    }

    handleLogin = () => {
        const {username, password} = this.state;

        if(!username.trim() || !password.trim()){
            this.setState({
                isLoggedIn : true,
                error: ''
            })
        }
        
        if(username == "admin" && password == "123456"){
            this.setState({
                isLoggedIn: true,
                error:''
            })
        }
        else{
            this.setState({
                error: 'Sai tên đăng nhập hoặc mật khẩu'
            })
        }
    };

    handleLogout = () => {
        this.setState({
            username: '',
            password:'',
            isLoggedIn: false,
            error: '',
        });
    }

    render(){
        const {username, password, isLoggedIn, error} = this.state

        if(isLoggedIn){
            return <Welcome username={username} onLogout={this.handleLogout}/>
        }
        
        return(
            <>
                <Card style={{maxWidth: '400px', margin:'100px auto'}}>
                    <CardBody>
                        <Card.Title className="mb-4">
                            Đăng nhập
                        </Card.Title>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group className="mb-3">
                            <Form.Label>Tên đăng nhập</Form.Label>
                            <Form.Control
                            type="text"
                            name="username"
                            placeholder="Nhập username..."
                            value={username}
                            onChange={this.handleChange}></Form.Control>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control
                            type="password"
                            name="password"
                            placeholder="Nhập password..."
                            value={password}
                            onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" className="w-100" onClick={this.handleLogin}>
                            Đăng nhập
                        </Button>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default LoginForm;