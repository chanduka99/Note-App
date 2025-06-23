// import './App.css'
import './styles/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginSignUp from './pages/loginSignUp/LoginSignUp'
import Dashboard from './pages/dashboard/Dashboard'
import { Navbar } from './components/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<LoginSignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
