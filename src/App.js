import './index.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profiles'
import SignUp from './pages/SignUp'
import SignIn from './pages/Signin'
import Offers from './pages/Offers'
import ForgotPassword from './pages/ForgotPassword'
const App=()=>{
  return(
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Sign-in' element={<SignIn/>}/>
        <Route path='/Sign-up' element={<SignUp/>}/>
        <Route path='/Forgot-password' element={<ForgotPassword/>}/>
        <Route path='/Offers' element={<Offers/>}/>
      </Routes>
    </Router>
    </div>
  )
}
export default App