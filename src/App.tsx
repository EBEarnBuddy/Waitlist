import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import StartupsSection from './components/StartupsSection';
import FreelancersSection from './components/FreelancersSection';
import StudentsSection from './components/StudentsSection';
import CommunitiesSection from './components/CommunitySection';
import { Testimonials } from './components/Testimonials';
import FAQSection from './components/FAQSection';
import { ModernFooter } from './components/ui/modern-footer';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

function App() {
  const { currentUser, loading, isFirebaseReady } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only redirect if user is authenticated, Firebase is ready, and we're on the landing page
    // Also ensure we're not in a loading state
    if (currentUser && isFirebaseReady && !loading && location.pathname === '/') {
      navigate('/discover');
    }
  }, [currentUser, isFirebaseReady, loading, navigate, location.pathname]);

  // Show loading only when Firebase is ready and we're actually loading auth state
  

  // Show the landing page for non-authenticated users or when Firebase is not configured
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <HowItWorks />
        <StudentsSection />
        <StartupsSection />
        <FreelancersSection />
        <CommunitiesSection />
        <Testimonials />
        <FAQSection />
      </main>
      <ModernFooter />
    </div>
  );
}

export default App;