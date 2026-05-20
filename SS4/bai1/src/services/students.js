const students = [
    {id: 1, name: 'John', phone: '1234567890', email: 'john@example.com'},
    {id: 2, name: 'Jane', phone: '0987654321', email: 'jane@example.com'},
    {id: 3, name: 'Bob', phone: '5555555555', email: 'bob@example.com'},
]

export const getAllStudents = () => students

export const saveStudent = (student) => {
    const newStudent = {id: students.length + 1, ...student}
    students.push(newStudent)
    return newStudent
}