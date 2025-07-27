import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, GitBranch, TrendingUp, Calendar } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const mockupY = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const mockupRotateX = useTransform(scrollYProgress, [0, 0.5], [0, 15]);

  const words = ['Build.', 'Collaborate.', 'Earn.'];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentWord.length) {
          setTypedText(currentWord.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex, words]);

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    size: 2 + Math.random() * 4,
  }));

  return (
    <section className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-emerald-500/30"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `clamp(1px,${element.size}px,6vw)`,
              height: `clamp(1px,${element.size}px,6vw)`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-4 sm:top-10 right-4 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-32 h-32 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-tr from-lime-400/20 to-emerald-400/10 rounded-full blur-2xl sm:blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Circular particle animations */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-emerald-500 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 4) * (window.innerWidth < 640 ? 80 : 200)],
                y: [0, Math.sin(i * Math.PI / 4) * (window.innerWidth < 640 ? 80 : 200)],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-full mx-auto px-2 xs:px-4 sm:px-6 md:px-8 py-10 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Content */}
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16 pt-12 sm:pt-20 md:pt-24"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-emerald-600 dark:text-emerald-400 text-sm sm:text-base font-medium">Join the Waitlist</span>
            </motion.div>

            <motion.div
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight min-h-[60px] xs:min-h-[80px] sm:min-h-[120px] md:min-h-[200px] flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                {typedText}
                <motion.span
                  className="inline-block w-0.5 xs:w-1 h-8 xs:h-12 sm:h-16 md:h-20 bg-emerald-500 ml-1 xs:ml-2"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.div>

            <motion.p
              className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-10 md:mb-12 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Be among the first to experience the future of collaboration. Join our exclusive waitlist.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="/auth"
                className="group relative px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-2xl overflow-hidden text-base xs:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10">Join Waitlist</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-lime-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-emerald-500/30 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </motion.a>

              <motion.a
                href="/help-us-make-it-better"
                className="group px-6 xs:px-8 py-3 xs:py-4 border-2 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-semibold rounded-2xl hover:bg-emerald-500/10 transition-all duration-300 relative overflow-hidden text-base xs:text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10">Help Us Make It Better</span>
                <motion.div
                  className="absolute inset-0 bg-emerald-500/5"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            {/* User Avatars Stack */}
            <motion.div
              className="flex flex-col items-center gap-2 sm:gap-4 mt-4 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center -space-x-2">
                {/* Sample user avatars */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-900 shadow-lg"
                />
                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white dark:border-gray-900 shadow-lg bg-emerald-500 flex items-center justify-center text-white text-xs xs:text-sm font-bold">
                  +2.4k
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs xs:text-sm">
                Join 2,400+ builders already on the waitlist
              </p>
            </motion.div>
          </motion.div>

          {/* Mockup Dashboard */}
          <motion.div
            className="relative max-w-full md:max-w-4xl lg:max-w-6xl mx-auto"
            style={{
              y: mockupY,
              scale: mockupScale,
              rotateX: mockupRotateX,
              transformPerspective: 1200
            }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 dark:border-emerald-500/20 overflow-hidden glow-border">
              {/* Dashboard Header */}
              <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-500 p-4 sm:p-6 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                      <img src="/logofinal.png" alt="EarnBuddy" className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-xl font-bold">EarnBuddy - Coming Soon</h3>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="relative p-3 xs:p-4 sm:p-8 bg-gray-50 dark:bg-black">
                <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
                  {/* Waitlist Stats */}
                  <div className="lg:col-span-2">
                    <motion.div
                      className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-emerald-500/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-6 gap-2 sm:gap-0">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">Waitlist Progress</h4>
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-xs sm:text-sm font-medium">Early Access</span>
                      </div>

                      <div className="space-y-2 sm:space-y-4">
                        {[
                          { name: "Builders Joined", count: "2,847", progress: 75, color: "emerald" },
                          { name: "Startups Registered", count: "156", progress: 45, color: "blue" },
                          { name: "Communities Formed", count: "89", progress: 90, color: "purple" }
                        ].map((stat, idx) => (
                          <motion.div
                            key={idx}
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 xs:p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-lg sm:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer border border-transparent hover:border-emerald-500/20"
                            whileHover={{ scale: 1.02, x: 5 }}
                            transition={{ duration: 0.2 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            // Only one transition prop
                          >
                            <div className="flex items-center space-x-2 sm:space-x-4">
                              <div className={`w-2 h-2 sm:w-3 sm:h-3 bg-${stat.color}-400 rounded-full animate-pulse`}></div>
                              <div>
                                <p className="font-medium text-gray-800 dark:text-gray-200 text-xs sm:text-base">{stat.name}</p>
                                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{stat.count} and counting</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-3 mt-2 sm:mt-0">
                              <div className="w-12 sm:w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                                <motion.div
                                  className={`h-1.5 sm:h-2 bg-${stat.color}-400 rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${stat.progress}%` }}
                                  transition={{ duration: 1, delay: 1.2 + idx * 0.2 }}
                                ></motion.div>
                              </div>
                              <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">{stat.progress}%</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Coming Soon Features */}
                  <div className="space-y-3 sm:space-y-6">
                    {/* Feature Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-4">
                      {[
                        { icon: Users, label: "Collaboration", value: "Soon", color: "emerald" },
                        { icon: GitBranch, label: "Projects", value: "Q2 2025", color: "blue" },
                        { icon: TrendingUp, label: "Opportunities", value: "Beta", color: "purple" },
                        { icon: Calendar, label: "Launch", value: "2025", color: "orange" }
                      ].map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-white dark:bg-gray-900 rounded-lg sm:rounded-xl p-2 xs:p-3 sm:p-4 shadow-sm border border-gray-100 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ duration: 0.2 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          // Only one transition prop
                        >
                          <div className={`w-7 h-7 sm:w-10 sm:h-10 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-lg flex items-center justify-center mb-2 sm:mb-3`}>
                            <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 text-${feature.color}-600 dark:text-${feature.color}-400`} />
                          </div>
                          <p className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200">{feature.value}</p>
                          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{feature.label}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Waitlist Position */}
                    <motion.div
                      className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-emerald-500/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 }}
                    >
                      <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-4">Your Position</h4>
                      <div className="text-center">
                        <div className="text-xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 sm:mb-2">#247</div>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">in the waitlist</p>
                        <div className="mt-2 sm:mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                          <motion.div
                            className="h-1.5 sm:h-2 bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "85%" }}
                            transition={{ duration: 1.5, delay: 1.6 }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">85% to early access</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 md:h-32 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;