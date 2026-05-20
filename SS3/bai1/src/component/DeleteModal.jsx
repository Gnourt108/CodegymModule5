import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {deleteStudent} from "../service/student.js";

class DeleteModal extends React.Component{

    constructor(props) {
        super(props);
    }

    handleDelete = () => {
        deleteStudent(this.props.deleteStudent.id);
        this.props.closeModal();
        this.props.reloading();
    }

    handleCloseModal = () => {
        this.props.closeModal();
    }
    render(){
        return (
            <Modal show={this.props.isShow} onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xóa sinh viên</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá sinh viên : {this.props.deleteStudent.name}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseModal}>
                        Close
                </Button>
                    <Button variant="primary" onClick={this.handleDelete}>
                        Delete
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default DeleteModal;