import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Thanks from './pages/Thanks'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
    </Routes>
  )
}

export default App
