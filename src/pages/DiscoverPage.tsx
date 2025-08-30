import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Heart, 
  ExternalLink, 
  MessageCircle, 
  Lightbulb, 
  Share2, 
  Target,
  Rocket,
  Star,
  ArrowRight,
  CheckCircle,
  Linkedin,
  Send,
  Award,
  TrendingUp,
  Zap,
  Globe,
  User,
  LogOut,
  ChevronDown,
  Sun
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const DiscoverPage: React.FC = () => {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [suggestion, setSuggestion] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const partners = [
    { name: "TechCorp", logo: "🚀", description: "Leading tech accelerator" },
    { name: "InnovateLab", logo: "💡", description: "Innovation hub" },
    { name: "StartupVentures", logo: "🌟", description: "Venture capital firm" },
    { name: "CodeAcademy", logo: "💻", description: "Coding bootcamp" },
    { name: "DesignStudio", logo: "🎨", description: "Creative agency" },
    { name: "AI Research", logo: "🤖", description: "AI research institute" }
  ];

  const recentAddOns = [
    {
      title: "AI-Powered Matching",
      description: "Smart algorithm to match builders with perfect collaborators",
      icon: "🤖",
      status: "New"
    },
    {
      title: "Video Collaboration Rooms",
      description: "Real-time video chat integrated into project rooms",
      icon: "📹",
      status: "Beta"
    },
    {
      title: "Skill Verification System",
      description: "Blockchain-based skill verification and badges",
      icon: "🏆",
      status: "Coming Soon"
    }
  ];

  const news = [
    {
      title: "EarnBuddy Raises $2M Seed Round",
      date: "Dec 15, 2024",
      summary: "Led by top VCs to accelerate platform development",
      link: "#"
    },
    {
      title: "Partnership with Major Tech Accelerator",
      date: "Dec 10, 2024", 
      summary: "Expanding our network of startup mentors and resources",
      link: "#"
    },
    {
      title: "10,000+ Builders Join Waitlist",
      date: "Dec 5, 2024",
      summary: "Community growth exceeds all expectations",
      link: "#"
    }
  ];

  const handleSurveyClick = () => {
    window.open('https://tally.so/r/nPN7GP', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/company/earnbuddy/', '_blank');
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'EarnBuddy - Join the Waitlist',
        text: 'Join me on the EarnBuddy waitlist - the future of collaboration is coming!',
        url: window.location.origin
      });
    } else {
      navigator.clipboard.writeText(window.location.origin);
      alert('Link copied to clipboard!');
    }
  };

  const handleSuggestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (suggestion.trim()) {
      console.log('Suggestion submitted:', suggestion);
      setSuggestion('');
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 3000);
    }
  };

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Profile Dropdown */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <motion.button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="flex items-center gap-2 p-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-emerald-500/20 dark:border-emerald-400/20 rounded-xl shadow-lg hover:shadow-xl hover:border-emerald-500/40 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={userProfile?.photoURL || currentUser?.photoURL || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"}
              alt="Profile"
              className="w-8 h-8 rounded-lg object-cover border border-emerald-500/30"
            />
            <div className="hidden sm:flex items-center gap-1">
              <div className="text-left">
                <p className="text-xs font-medium text-gray-800 dark:text-white">
                  {(userProfile?.displayName || currentUser?.displayName || 'Builder').split(' ')[0]}
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  Waitlist
                </p>
              </div>
              <ChevronDown className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${showProfileDropdown ? 'rotate-180' : ''}`} />
            </div>
            <div className="sm:hidden">
              <ChevronDown className={`w-3 h-3 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${showProfileDropdown ? 'rotate-180' : ''}`} />
            </div>
          </motion.button>

          <AnimatePresence>
            {showProfileDropdown && (
              <motion.div
                className="absolute top-full right-0 mt-2 w-72 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-emerald-500/20 dark:border-emerald-400/20 rounded-xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* Profile Details */}
                <div className="p-4 border-b border-emerald-500/10 dark:border-emerald-400/10 bg-gradient-to-r from-emerald-50/30 to-lime-50/30 dark:from-emerald-900/10 dark:to-lime-900/10">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={userProfile?.photoURL || currentUser?.photoURL || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"}
                      alt="Profile"
                      className="w-12 h-12 rounded-lg object-cover border border-emerald-500/30 shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 dark:text-white truncate">
                        {userProfile?.displayName || currentUser?.displayName || 'Builder'}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                        {userProfile?.email || currentUser?.email}
                      </p>
                      <div className="mt-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium rounded-full">
                          <CheckCircle className="w-3 h-3 text-emerald-600" />
                          Member
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {userProfile?.bio && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                      {userProfile.bio}
                    </p>
                  )}
                  
                  {userProfile?.skills && userProfile.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {userProfile.skills.slice(0, 2).map((skill, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                      {userProfile.skills.length > 2 && (
                        <span className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                          +{userProfile.skills.length - 2}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Menu Options */}
                <div className="p-1">
                  <motion.button
                    onClick={() => {
                      setShowProfileDropdown(false);
                      // TODO: Navigate to profile details page when implemented
                      console.log('View Profile Details clicked');
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors group"
                    whileHover={{ x: 3 }}
                  >
                    <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 transition-colors">
                      <User className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">Profile Details</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Manage settings</p>
                    </div>
                  </motion.button>

                  <motion.div
                    className="px-3 py-2 border-t border-emerald-500/10 dark:border-emerald-400/10"
                    whileHover={{ x: 3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800 dark:text-white">Theme</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Light/Dark mode</p>
                        </div>
                      </div>
                      <ThemeToggle />
                    </div>
                  </motion.div>

                  <motion.button
                    onClick={() => {
                      setShowProfileDropdown(false);
                      handleLogout();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors group"
                    whileHover={{ x: 3 }}
                  >
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-colors">
                      <LogOut className="w-4 h-4 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">Log Out</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Return to main site</p>
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showProfileDropdown && (
        <div
          className="fixed inset-0 z-40 bg-black/10 dark:bg-black/20"
          onClick={() => setShowProfileDropdown(false)}
        />
      )}

      {/* Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-2 h-2 bg-emerald-500/30 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 pt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/logofinal.png" alt="EarnBuddy" className="w-10 h-10 sm:w-12 sm:h-12" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              EarnBuddy
            </h1>
          </div>
          
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm sm:text-base">You're on the waitlist!</span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to the Future of Collaboration
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Welcome, {userProfile?.displayName || currentUser?.displayName || 'Builder'}! 
            Congratulations on being part of the change!
          </p>
        </motion.div>





        {/* Survey Section */}
        <motion.section
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Survey Card */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Help Shape EarnBuddy
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                Take our quick 5-minute survey to influence our development priorities.
              </p>
              <motion.button
                onClick={handleSurveyClick}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                Take Survey
                <ExternalLink className="w-3 h-3" />
              </motion.button>
            </motion.div>

            {/* Share Card */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Spread the Word
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                Share EarnBuddy with fellow builders and entrepreneurs in your network.
              </p>
              <motion.button
                onClick={handleShareClick}
                className="w-full px-4 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-4 h-4" />
                Share EarnBuddy
              </motion.button>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Follow Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                Stay updated with our latest developments and community highlights.
              </p>
              <motion.button
                onClick={handleLinkedInClick}
                className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4" />
                Follow on LinkedIn
                <ExternalLink className="w-3 h-3" />
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Suggestions Section */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-emerald-500/20">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Share Your Ideas
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
                  Have a feature idea or suggestion? We'd love to hear from you! Your input helps us build exactly what you need.
                </p>
              </div>

              <form onSubmit={handleSuggestionSubmit} className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <textarea
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="What feature would you love to see in EarnBuddy? How can we make collaboration better?"
                    className="w-full px-4 py-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                    rows={4}
                    required
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={!suggestion.trim()}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Submit Suggestion
                </motion.button>
              </form>

              <AnimatePresence>
                {showThankYou && (
                  <motion.div
                    className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 rounded-lg text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                    <p className="text-emerald-800 dark:text-emerald-200 font-medium text-sm sm:text-base">
                      Thank you for your suggestion! We'll review it carefully.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* Stay Tuned Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
                  <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                  The Future is Collaborative
                </h3>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
                  We're working around the clock to bring you something amazing. 
                  Thank you for being part of this journey from the very beginning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/help-us-make-it-better"
                    className="px-6 sm:px-8 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Help Us Build Better
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                  <motion.button
                    onClick={handleLinkedInClick}
                    className="px-6 sm:px-8 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-4 h-4" />
                    Follow Updates
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DiscoverPage;