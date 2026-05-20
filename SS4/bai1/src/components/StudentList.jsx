import { useEffect, useState } from 'react'
import { Alert, Button, Table } from 'react-bootstrap'
import StudentModal from './StudentModal'
import { getAllStudents } from '../services/students'

const StudentList = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [studentList, setStudentList] = useState([])
  const [reloading, setReloading] = useState(false)

  useEffect(() => {
    setStudentList([...getAllStudents()])
  }, [reloading])

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Quản lý Sinh Viên</h2>
        <Button variant="primary" onClick={() => setIsShowModal(true)}>
          Thêm sinh viên
        </Button>
      </div>

      {studentList.length === 0 ? (
        <Alert variant="info">Chưa có sinh viên nào!</Alert>
      ) : (
        <Table bordered hover>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((s, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{s.name}</td>
                <td>{s.phone}</td>
                <td>{s.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <StudentModal
        isShow={isShowModal}
        closeModal={() => setIsShowModal(false)}
        setReloading={setReloading}
      />
    </>
  )
}

export default StudentList