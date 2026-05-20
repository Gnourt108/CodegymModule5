const students = [
    {id: 1, name: "Nguyễn Văn A", phone: "0912345678", email:"nguyentritruong2005@gmail.com"},
    {id: 2, name: "Nguyễn Văn B", phone: "0912345671", email:"nguyenanhthu2004@gmail.com"},
    {id: 3, name: "Nguyễn Văn C", phone: "0912345672", email:"nguyenc@gmail.com"}
]

const getAll = () => students

export function deleteStudent(id) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            students.splice(i, 1)
        }
    }
}

export default getAll;
