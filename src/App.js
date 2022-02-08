import './App.css';
import MiniDrawer from './pages/dashboard/Dashboard';
import ForgotPass from './pages/forgot-password/ForgotPass';
import ResetPass from './pages/reset-password/ResetPass';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <ForgotPass /> */}
      <ResetPass />
      {/* <MiniDrawer /> */}
    </div>
  );
}

export default App;
