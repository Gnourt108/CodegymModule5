import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllStudents = async () => {
    const res = await axios.get(`${API_URL}/students`);
    return res.data;
}

export const saveStudent = async (student) => {
    const res = await axios.post(`${API_URL}/students`, student);
    return res.data;
}

export const deleteStudent = async (id) => {
    const res = await axios.delete(`${API_URL}/students/${id}`)
    return res.data
}

export const updateStudent = async (student) => {
    const res = await axios.put(`${API_URL}/students/${student.id}`, student)
    return res.data;
}

export const searchStudent = async (keyword) => {
    const res = await axios.get(`${API_URL}/students?name=${keyword}`)
    return res.data
}