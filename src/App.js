// Import necessary dependencies
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/common/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import AuthLayout from './layouts/AuthLayout';
import { GlobalProvider } from './context/GlobalState';
//import { useAuth } from './context/auth/AuthState'; // Import useAuth hook
import 'react-toastify/dist/ReactToastify.css';
import Home from '../src/pages/home/Home';
import Kyc from './pages/Kyc';
import ForgetPassword from './pages/Reset/ForgetPassword';
import ResetPassword from './pages/Reset/ResetPassword';
import DashBoard from './pages/DashBoard';
import GlobalStyles  from './global';



// App component
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <GlobalStyles/>
            <Routes>
              {/* ... (your existing routes) */}
              <Route path="/" element={<Home />} />
              <Route path="/kyc-verification" element={<Kyc />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/resetpassword" element={<ForgetPassword />} />
              <Route path="/confirmpassword" element={<ResetPassword />} />
            </Routes>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
