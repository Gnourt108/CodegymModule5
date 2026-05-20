import React from "react";
import getAll from "../service/student.js";
import DeleteModal from "./DeleteModal.jsx";


class StudentTable extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            studentList:[],
            isShowModal:false,
            deleteStudent:{
                id:"",
                name:""
            }
        }
    }

    componentDidMount(){
        this.setState({
            studentList:[...getAll()]
        })
    }

    handleOpenModal = (student) => {
        this.setState({
            isShowModal:true,
            deleteStudent:student
        })
    }

    closeModal = () => {
        this.setState({
            isShowModal:false
        })
    }

    reloading = () => {
        this.setState({
            studentList:[...getAll()]
        })
    }

    render() {
        return (
            <>
                <h1>Danh sách sinh viên</h1>
                <table className={'table table-striped table-dark'}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Xoá</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.studentList.map((student, i) =>
                        <tr key={student.id}>
                            <td>{i + 1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={()=>{this.handleOpenModal(student)}}
                                        className={'btn btn-sm btn-danger btn-sm'}>
                                    Xóa
                                </button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
                <DeleteModal deleteStudent = {this.state.deleteStudent}
                             isShow = {this.state.isShowModal}
                             closeModal = {this.closeModal}
                             reloading = {this.reloading}
                />
            </>
        )
    }
}

export default StudentTable;