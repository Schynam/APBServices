import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, SignIn, RedirectToSignIn } from '@clerk/clerk-react';
import Landing from './pages/Landing';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Identity from './pages/Identity';
import Taxes from './pages/Taxes';
import Transport from './pages/Transport';
import Education from './pages/Education';
import Business from './pages/Business';
import Passport from './pages/Passport';
import Diaspora from './pages/Diaspora';
import Contact from './pages/Contact';
import About from './pages/About';
import Help from './pages/Help';
import Admin from './pages/Admin';
import './App.css';

const PUBLISHABLE_KEY = "pk_test_YWN0aXZlLWZyb2ctMjUuY2xlcmsuYWNjb3VudHMuZGV2JA";

function App() {
  if (!PUBLISHABLE_KEY) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#F8FAFC', textAlign: 'center', padding: '2rem' }}>
        <div>
          <h2>Authentication Setup Required</h2>
          <p>Please add your <strong>VITE_CLERK_PUBLISHABLE_KEY</strong> to Vercel Environment Variables to enable the Login screen.</p>
        </div>
      </div>
    );
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Landing />} />
          
          {/* Secure Dashboard Route */}
          <Route path="/dashboard" element={
            <>
              <SignedIn>
                <DashboardLayout />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }>
            <Route index element={<Dashboard />} />
            <Route path="identity" element={<Identity />} />
            <Route path="taxes" element={<Taxes />} />
            <Route path="transport" element={<Transport />} />
            <Route path="education" element={<Education />} />
            <Route path="business" element={<Business />} />
            <Route path="diaspora" element={<Diaspora />} />
            <Route path="passport" element={<Passport />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<Help />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<div style={{ textAlign: 'center', padding: '4rem 0' }}>Page not found or under construction.</div>} />
          </Route>

          {/* Catch all for invalid root paths */}
          <Route path="*" element={<div style={{ textAlign: 'center', padding: '4rem 0' }}>Page not found.</div>} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;
