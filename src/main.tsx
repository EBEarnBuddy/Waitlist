import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import App from './App.tsx';
import AuthPage from './pages/AuthPage.tsx';
import DiscoverPage from './pages/DiscoverPage.tsx';
import HelpUsPage from './pages/HelpUsPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          {/* Landing page - only accessible when not logged in */}
          <Route path="/" element={<App />} />
          
          {/* Auth page */}
          <Route path="/auth" element={<AuthPage />} />
          
          {/* Help page - accessible to everyone */}
          <Route path="/help-us-make-it-better" element={<HelpUsPage />} />
          
          {/* Protected waitlist page - redirect to /discover when logged in */}
          <Route path="/discover" element={
            <ProtectedRoute>
              <DiscoverPage />
            </ProtectedRoute>
          } />
          
          {/* Catch all route - redirect to landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  </StrictMode>
);