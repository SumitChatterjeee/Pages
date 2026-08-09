import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Thanks from './pages/Thanks'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Thanks/>} />
    </Routes>
  )
}

export default App
