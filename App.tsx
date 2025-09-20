
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Toaster } from './components/ui/sonner';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import Dashboard from './pages/Dashboard';
import Internships from './pages/Internships';
import ResumeBuilder from './pages/ResumeBuilder';
import Mentorship from './pages/Mentorship';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import InternshipDetails from './pages/InternshipDetails';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/internships/:id" element={<InternshipDetails />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
