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

// App component
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
              <Routes>
                {/* ... (your existing routes) */}
                <Route path="/" element={<Home />} />
              </Routes>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
