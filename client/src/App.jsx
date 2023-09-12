import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Map from './pages/Map'
import Battalions from './pages/Battalions'
import { Routes, Route } from 'react-router-dom'
//import SignUpForm from './components/SignUpForm'
function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='map' element={<Map/>}/>
        <Route path='battalions' element={<Battalions/>}/>
      </Routes>
    </div>
  )
}

export default App
