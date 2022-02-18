import './App.css';
import SignUp from './pages/signup/SignUp';
import SignIn from './pages/signin/SignIn';
import ForgotPass from './pages/forgot-password/ForgotPass';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MiniDrawer from './pages/dashboard/Dashboard';
import ResetPass from './pages/reset-password/ResetPass';
import Archive from './pages/archive/Archive';
import Trash from './pages/trash/Trash';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/Signup' element={<SignUp />} />
          <Route path='/Dashboard/*' element={<MiniDrawer />}>
            <Route path='archive' element={<Archive />} />
            <Route path='trash' element={<Trash />} />
          </Route>
          <Route path='/ResetPassword/:id' element={<ResetPass />} />
          <Route path='/ForgotPassword' element={<ForgotPass />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
