import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Rocket, Users, Zap, Heart, ArrowRight, CheckCircle, Instagram, Linkedin, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HelpUsPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showThankYou, setShowThankYou] = useState(false);
  const [featureRequest, setFeatureRequest] = useState('');

  const questions = [
    {
      id: 0,
      category: 'Startups',
      icon: Rocket,
      title: 'What stops you from starting or joining a startup?',
      options: [
        'Finding the right co-founder',
        'Lack of funding or resources',
        'Fear of failure or uncertainty',
        'Not knowing where to start'
      ]
    },
    {
      id: 1,
      category: 'Freelancing',
      icon: Zap,
      title: 'What\'s your biggest freelancing struggle?',
      options: [
        'Finding quality clients',
        'Pricing my work correctly',
        'Managing multiple projects',
        'Building long-term relationships'
      ]
    },
    {
      id: 2,
      category: 'Community',
      icon: Users,
      title: 'How do you currently find collaborators?',
      options: [
        'Social media and networking',
        'Professional platforms like LinkedIn',
        'Friends and referrals',
        'I struggle to find the right people'
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setShowThankYou(true);
      }, 500);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  if (showThankYou) {
    return (
      <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
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

        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
              You're Amazing! 🎉
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Thanks for helping us build something incredible. Your insights will shape the future of EarnBuddy!
            </p>

            {/* Social Follow Section */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-emerald-500/20 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                Stay Connected for Perks!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Follow us for exclusive updates, early access, and special community perks
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </motion.div>

            {/* Referral Section */}
            <motion.div
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8 text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Share2 className="w-6 h-6" />
                Invite Friends = Unlock Powers!
              </h3>
              <p className="mb-6 opacity-90">
                Refer 3 friends and get the power to create your own community room + early access to all features
              </p>
              <motion.button
                className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share EarnBuddy
              </motion.button>
            </motion.div>

            {/* Feature Request */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-emerald-500/20 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                One More Thing... 💡
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                What's one feature you'd love to see in EarnBuddy?
              </p>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={featureRequest}
                  onChange={(e) => setFeatureRequest(e.target.value)}
                  placeholder="e.g., AI-powered project matching..."
                  className="flex-1 px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </div>
            </motion.div>

            {/* Back to Home */}
            <motion.button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const IconComponent = currentQuestionData.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Early Access</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">
              You're Early. Help Us Build This Right. ⚡
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Your insights will shape the future of collaboration. Answer a few quick questions and get exclusive perks!
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-emerald-600 to-lime-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-emerald-500/20"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${
                    currentQuestionData.category === 'Startups' ? 'from-blue-600 to-blue-500' :
                    currentQuestionData.category === 'Freelancing' ? 'from-emerald-600 to-emerald-500' :
                    'from-purple-600 to-purple-500'
                  } rounded-full flex items-center justify-center mx-auto mb-4`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  currentQuestionData.category === 'Startups' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                  currentQuestionData.category === 'Freelancing' ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200' :
                  'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                }`}>
                  {currentQuestionData.category}
                </span>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  {currentQuestionData.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentQuestionData.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="p-6 text-left bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 border border-transparent hover:border-emerald-500/40 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 rounded-full group-hover:border-emerald-500 transition-colors flex items-center justify-center">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {option}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Back Button */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              ← Back to Home
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HelpUsPage;