// import './App.css'
import './styles/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Dashboard from './pages/dashboard/Dashboard'
import { Navbar } from './components/NavBar'
import { SuperTokensWrapper } from 'supertokens-auth-react'
import initializeSuperTokens from './lib/superTokens';
import { ToastContainer } from 'react-toastify';

function App() {
  initializeSuperTokens();

  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Login />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </SuperTokensWrapper>
  )
}

export default App
