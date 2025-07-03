// import './App.css'
import './styles/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import LoginSignUp from './pages/loginSignUp/LoginSignUp'
import Dashboard from './pages/dashboard/Dashboard'
import { Navbar } from './components/NavBar'
import { SuperTokensWrapper } from 'supertokens-auth-react'

function App() {

  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<LoginSignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </SuperTokensWrapper>
  )
}

export default App
