import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Thanks from './pages/Thanks'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  )
}

export default App
