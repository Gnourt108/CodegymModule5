import React from "react"
import { Button, Card, CardBody } from "react-bootstrap";

class Welcome extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {username, onLogout} = this.props;

        return(
            <Card style={{maxWidth: '400px', margin: '100px auto'}}>
                <CardBody className="text-center">
                    <Card.Title>Xin chào, {username}</Card.Title>
                    <Card.Text className="text-muted">Bạn đã đăng nhập thành công</Card.Text>
                    <Button variant="danger" onClick={onLogout}>
                        Đăng xuất
                    </Button>
                </CardBody>
            </Card>
        )
    }
}

export default Welcome;