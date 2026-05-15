import getAll from "./service/data";


function App() {
  const cities = getAll()
  return(
    <>
    <div className="container mt-5">
      <h2 className="my-5">DANH SÁCH THÀNH PHỐ TRỰC THUỘC</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Tên thành phố</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(({ id, name }, i) => (
            <tr key={id}>
              <td>{i+1}</td>
              <td>{id}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>    
    </div>
    </>
   
  )
}

export default App
