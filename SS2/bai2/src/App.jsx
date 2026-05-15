import getAll from "../../bai2/src/service/data"
function App() {
  const students = getAll()

  return (
    <>
      <div className="container mt-5">
        <h2 className="my-5">DANH SÁCH SINH VIÊN TIỀM NĂNG</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {students.map(({company, contact, country }, i) => (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{company}</td>
                <td>{contact}</td>
                <td>{country}</td>
              </tr>
            ))}
          </tbody>
        </table>    
      </div>
    </>
  )
}

export default App
