import './App.css';
import MiniDrawer from './pages/dashboard/Dashboard';
import ForgotPass from './pages/forgot-password/ForgotPass';
import ResetPass from './pages/reset-password/ResetPass';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Signin' element={<SignIn />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Dashboard' element={<MiniDrawer />} />
          <Route path='/ResetPassword' element={<ResetPass />} />
          <Route path='/ForgotPassword' element={<ForgotPass />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
