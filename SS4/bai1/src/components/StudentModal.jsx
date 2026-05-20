import { useState } from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { saveStudent } from '../services/students'

const StudentModal = ({ isShow, closeModal, setReloading }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState('')

  const handleClose = () => {
    setName('')
    setPhone('')
    setEmail('')
    setError('')
    closeModal()
  }

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Vui lòng nhập đầy đủ thông tin.')
      return
    }
    if (!/^\d+$/.test(phone)) {
      setError('Số điện thoại chỉ được nhập số.')
      return
    }

    saveStudent({ name, email, phone })
    setName('')
    setPhone('')
    setEmail('')
    setError('')
    setReloading(pre => !pre)
    closeModal()
  }

  return (
    <Modal show={isShow} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thêm sinh viên</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="mb-3">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập họ tên..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập số điện thoại..."
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Huỷ</Button>
        <Button variant="primary" onClick={handleSubmit}>Thêm</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default StudentModal