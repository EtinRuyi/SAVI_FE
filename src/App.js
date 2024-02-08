// Import necessary dependencies
import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/common/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import AuthLayout from './layouts/AuthLayout';
import { GlobalProvider } from './context/GlobalState';
//import { useAuth } from './context/auth/AuthState'; // Import useAuth hook
import 'react-toastify/dist/ReactToastify.css';
import KYC from './pages/Kyc';
import ForgetPassword from './pages/Reset/ForgetPassword';
import ResetPassword from './pages/Reset/ResetPassword';
import DashBoard from './pages/Frame_Dashboard';
import GlobalStyles from './global';
import Sidebar from './components/navs/Sidebar';
import LandingPage from './pages/landingPage/LandingPage';
import Signin from './pages/signinSignup/SignIn';
import Signup from './pages/signinSignup/SignUp';
import FundSavings from './components/modal/FundSavings';
import PersonalSavings from './pages/Frame_PersonalSavings';
import ExploreGroup from './pages/Frame_Group';
import MyGoalsEmpty from './pages/Frame_MyGoalsEmpty';
import Groupsempty from './pages/Frame_GroupEmpty';
import PersonalSavingDetails from './pages/Frame_PersonalSavingDetails';
import CreateSavingsGroupForm from './pages/Group/CreateNewSavingsGroup';
import CreateGroupSuccessModal from './components/modal/CreateGroupSuccess';
// import PersonalSavings from './pages/PersonalSavings';
// import PersonalSavingsNoGoals from './pages/PersonalSavingsNoGoals';
// import PersonalSaving from './pages/savings/PersonalSaving';
import Savings from './pages/Savings/Savings';
import GroupSavings from './pages/GroupSavings/GroupSavings';

import PersonalSaving from './pages/Savings/PersonalSaving';
// import ExploreGroup from './pages/Group/ExploreGroup';
// App component
function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router>
          <GlobalProvider>
            <GlobalStyles />
            <Routes>
              {/* <Route path="/dash" element={<Dash />} /> */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/mygoals" element={<MyGoalsEmpty />} />
              <Route path="/kyc-verification" element={<KYC />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/resetpassword" element={<ForgetPassword />} />
              <Route path="/confirmpassword" element={<ResetPassword />} />
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/fundsaving" element={<FundSavings />} />
              <Route path="/personalsaving" element={<PersonalSavings />} />
              <Route path="/groupsavings" element={<GroupSavings />} />
              {/* <Route
                path="/personalsavingnogoal"
                element={<PersonalSavingsNoGoals />}
              /> */}
              {/* <Route path="/personalsavings" element={<PersonalSaving />} /> */}
              <Route path="/savings" element={<Savings />} />
              <Route path="/personalsavings" element={<PersonalSaving />} />
              <Route path="/exploregroup" element={<ExploreGroup />} />
              <Route path="/groups" element={<Groupsempty />} />
              <Route
                path="/personal-saving-details"
                element={<PersonalSavingDetails />}
              />
              <Route path="/explore-groups" element={<ExploreGroup />} />
              <Route
                path="/CreateSavingsGroupForms"
                element={<CreateSavingsGroupForm />}
              />
              <Route
                path="/CreateGroupSuccessModals"
                element={<CreateGroupSuccessModal />}
              />
            </Routes>
          </GlobalProvider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
