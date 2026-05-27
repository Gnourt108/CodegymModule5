import { useEffect, useState } from 'react'
import { Alert, Button, Form, InputGroup, Table } from 'react-bootstrap'
import StudentModal from './StudentModal'
import { getAllStudents, searchStudent } from '../services/studentsService'
import DeleteModal from './DeleteModal'

const StudentList = () => {
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [studentList, setStudentList] = useState([])
  const [reloading, setReloading] = useState(false)
  const [editStudent, setEditStudent] = useState(null)
  const [deleteStudent, setDeleteStudent] = useState(null)
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const data = keyword 
                  ? await searchStudent(keyword)
                  : await getAllStudents()
      setStudentList(data)
    }
    fetchData()
  }, [reloading, keyword])

  const handleCloseModal = () => {
    setIsShowModal(false)
    setEditStudent(null)
  }

  const handleOpenDeleteModal = (student) => {
    setDeleteStudent(student)
    setIsShowDeleteModal(true)
  }

  const handleOpenEdit = (student) => {
    setEditStudent(student)
    setIsShowModal(true)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Quản lý Sinh Viên</h2>
        <Button variant="primary" onClick={() => setIsShowModal(true)}>
          Thêm sinh viên
        </Button>
      </div>
      <InputGroup className='mb-3'>
          <Form.Control 
              placeholder='Tìm kiếm theo tên...'
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
          />
          {keyword && (
              <Button variant='outline-secondary' onClick={() => setKeyword('')}>Xóa</Button>
          )}
      </InputGroup>
      

      {studentList.length === 0 ? (
        <Alert variant="info">Chưa có sinh viên nào!</Alert>
      ) : (
        <Table bordered hover>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Họ tên</th>
              <th>Giới tính</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>Lớp học</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((s, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{s.name}</td>
                <td>{s.gender ? 'Nam' : 'Nữ'}</td>
                <td>{s.phone}</td>
                <td>{s.email}</td>
                <td>{s.class?.name}</td>
                <td>
                  <Button size='sm' variant='warning' className='me-2' onClick={() => handleOpenEdit(s)}>Sửa</Button>
                  <Button size='sm' variant='danger' onClick={() => handleOpenDeleteModal(s)}>Xóa</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <StudentModal
        isShow={isShowModal}
        closeModal={handleCloseModal}
        setReloading={setReloading}
        editStudent={editStudent}
      />

      <DeleteModal
        isShow={isShowDeleteModal}
        closeModal={() => setIsShowDeleteModal(false)}
        setReloading={setReloading}
        selectStudent={deleteStudent}
      />
    </>
  )
}

export default StudentList