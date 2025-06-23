// import './App.css'
import './styles/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
