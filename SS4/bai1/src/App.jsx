import 'bootstrap/dist/css/bootstrap.min.css'
import StudentList from './components/StudentList'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header/>
      <div className='container mt-4'>
         <Routes>
          <Route path='/students' element={<StudentList />} />
        </Routes>
      </div>
    </>
  )
}

export default App
