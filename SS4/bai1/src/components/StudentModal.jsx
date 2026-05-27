import { useEffect, useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { saveStudent, updateStudent } from '../services/studentsService'
import { ErrorMessage, Field, Formik } from 'formik'
import * as Yup from 'yup'
import { getAllClasses } from '../services/classService'
import { toast } from 'react-toastify'

const StudentModal = ({ isShow, closeModal, setReloading, editStudent }) => {
  const isEdit = !!editStudent
  const [classList, setClassList] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      let list = await getAllClasses();
      setClassList(list)
    }
    fetchData();
  }, [])

  const initialValues = {
    name: editStudent?.name || '',
    phone: editStudent?.phone || '',
    email: editStudent?.email || '',
    gender: editStudent?.gender !== undefined ? String(editStudent.gender) : 'true',
    class: editStudent?.class ? JSON.stringify(editStudent.class) : ''
  }


  const handleClose = () => {
    closeModal()
  }

  const handleSubmit = async (values, {resetForm}) => {
    const payload = {
      ...values,
      gender: values.gender === 'true',
      class: JSON.parse(values.class)
    }
    try {
      if(isEdit){
        await updateStudent({...payload, id:editStudent.id})
        toast.success('Cập nhật sinh viên thành công')
      }else{
        await saveStudent(payload)
        toast.success('Thêm sinh viên thành công')
      }
      resetForm()
      setReloading(pre => !pre)
      closeModal()
    } catch (error) {
      toast.error('Có lỗi xảy ra, vui lòng thử lại', error)
    }
  }

  const validate = Yup.object({
    name: Yup.string().required("Họ tên không được để trống"),
    phone: Yup.string().matches(/^\d+$/, 'Số điện thoại chỉ được nhập số')
              .min(10, 'Số điện thoại tối thiểu 10 số')
              .required('Số điện thoại không được để trống'),
    email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    gender: Yup.string().required('Vui lòng chọn giới tính'),
    class: Yup.string().required('Lớp không được để trống'),
  })

  return (
    <Modal show={isShow} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thêm sinh viên</Modal.Title>
      </Modal.Header>

      <Formik initialValues={initialValues}
              validationSchema={validate}
              onSubmit={handleSubmit}
              enableReinitialize
      >
        {({handleSubmit, values, setFieldValue}) => (
          <>
            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Họ tên</Form.Label>
                <Field type="text" name="name" className="form-control" placeholder="Nhập họ và tên..."/>
                <ErrorMessage name="name" component="div" className="text-danger small mt-1" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Số điện thoại</Form.Label>
                <Field type="text" name="phone" className="form-control" placeholder="Nhập số điện thoại..."/>
                <ErrorMessage name="phone" component="div" className="text-danger small mt-1" />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Field type="email" name="email" className="form-control" placeholder="Nhập email..."/>
                <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Giới tính</Form.Label>
                    <div className="d-flex gap-3">
                        <Form.Check
                            type="radio"
                            label="Nam"
                            name="gender"
                            value="true"
                            checked={values.gender === 'true' || values.gender === true}
                            onChange={() => setFieldValue('gender', 'true')}
                        />
                        <Form.Check
                            type="radio"
                            label="Nữ"
                            name="gender"
                            value="false"
                            checked={values.gender === 'false' || values.gender === false}
                            onChange={() => setFieldValue('gender', 'false')}
                        />
                    </div>
                    <ErrorMessage name="gender" component="div" className="text-danger small mt-1" />
                </Form.Group>

              <Field as="select" name="class" className="form-select">
                   <option value="">-- Chọn lớp --</option>
                    {classList.map(c => (
                        <option key={c.id} value={JSON.stringify(c)}>{c.name}</option>
                    ))}
              </Field>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Huỷ</Button>
              <Button variant="primary" onClick={handleSubmit}>{isEdit ? "Cập nhật" : "Thêm"}</Button>
            </Modal.Footer>
          </>
        )}
      </Formik>                                                                    
    </Modal>
  )
}

export default StudentModal