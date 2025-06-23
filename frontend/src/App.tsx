// import './App.css'
import './styles/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
