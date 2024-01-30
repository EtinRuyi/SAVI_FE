// Import necessary dependencies
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/common/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import AuthLayout from './layouts/AuthLayout';
import { GlobalProvider } from './context/GlobalState';
//import { useAuth } from './context/auth/AuthState'; // Import useAuth hook
import 'react-toastify/dist/ReactToastify.css';
import Kyc from './pages/Kyc';
import ForgetPassword from './pages/Reset/ForgetPassword';
import ResetPassword from './pages/Reset/ResetPassword';
import DashBoard from './pages/DashBoard';
import GlobalStyles from './global';
import Sidebar from './components/navs/Sidebar';
import LandingPage from './pages/landingPage/LandingPage';
import Signin from './pages/signinSignup/SignIn';
import Signup from './pages/signinSignup/SignUp';
import PersonalSavings from './pages/PersonalSavings';
import PersonalSavingsNoGoals from './pages/PersonalSavingsNoGoals';
import PersonalSaving from './pages/savings/PersonalSaving';

// App component
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <GlobalStyles />
            <Routes>
              {/* ... (your existing routes) */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/kyc-verification" element={<Kyc />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/resetpassword" element={<ForgetPassword />} />
              <Route path="/confirmpassword" element={<ResetPassword />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/personalsaving" element={<PersonalSavings />} />
              <Route
                path="/personalsavingnogoal"
                element={<PersonalSavingsNoGoals />}
              />
              <Route path="/personalsavings" element={<PersonalSaving />} />
            </Routes>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
