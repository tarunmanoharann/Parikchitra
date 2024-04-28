import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom"


import Slogin from './assets/student/s_components/Slogin'
import Choice from './components/Choice'
import Shome from './assets/student/Shome'

function App() {

  return (
    <>
    <Router>

    <Routes>
      <Route path='/' element={<Choice/>}/>
      <Route path='/slogin' element={<Slogin/>}/>
      <Route path='/shome' element={<Shome/>}/>
    </Routes>
    </Router>
  </>    
  )
}

export default App
