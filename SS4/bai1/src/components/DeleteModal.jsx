import { Button, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { deleteStudent } from '../services/studentsService'

const DeleteModal = ({isShow, closeModal, setReloading, selectStudent}) => {
    const handleDelete = async () => {
        try {
            await deleteStudent(selectStudent?.id)
            toast.success(`Xóa sinh viên ${selectStudent?.name} thành công!`)
            setReloading(pre => !pre)
            closeModal()
        } catch (error) {
            toast.error('Xóa thất bại, vui lòng thử lại ',error)
        }
    }
    
  return (
    <Modal show={isShow} onHide={closeModal} centered>
        <Modal.Header closeButton>
            <Modal.Title>Xác nhận xóa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Bạn có muốn xóa sinh viên <strong>{selectStudent?.name}</strong> không?
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={closeModal}>Hủy</Button>
            <Button variant='danger' onClick={handleDelete}>Xóa</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
