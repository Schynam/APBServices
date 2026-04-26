import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
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
          {/* Catch all for unbuilt pages */}
          <Route path="*" element={<div style={{ textAlign: 'center', padding: '4rem 0' }}>Page not found or under construction.</div>} />
        </Route>
      </Routes>
    </Router>
  );
}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="identity" element={<Identity />} />
          <Route path="taxes" element={<Taxes />} />
          <Route path="transport" element={<Transport />} />
          <Route path="education" element={<Education />} />
          <Route path="business" element={<Business />} />
          <Route path="diaspora" element={<Diaspora />} />
          <Route path="passport" element={<Passport />} />
          <Route path="contact" element={<Contact />} />
          {/* Catch all for unbuilt pages */}
          <Route path="*" element={<div style={{ textAlign: 'center', padding: '4rem 0' }}>Page not found or under construction.</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
