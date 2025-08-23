import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Search, Users, Rocket, ArrowRight, Sparkles, Zap, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      step: "01",
      title: "Create Your Profile",
      subtitle: "Less profile setup, more time building connections",
      description: "From skills to aspirations, your journey starts here.",
      benefits: [
        "Answer a few quick questions to personalize your experience",
        "Showcase your skills, experience, and career goals",
        "Set your preferences for collaboration and opportunities",
        "Get matched with the right community and projects"
      ],
      mockup: {
        type: "profile",
        title: "Profile Creation",
        elements: [
          "Personal Information",
          "Skills & Expertise",
          "Career Goals",
          "Collaboration Style"
        ]
      }
    },
    {
      step: "02",
      title: "Discover Opportunities",
      subtitle: "Find your perfect match in the builder ecosystem",
      description: "Browse startups, gigs, and communities that align with your goals.",
      benefits: [
        "Explore live startups and freelance opportunities",
        "Join specialized pods based on your interests",
        "Connect with founders and fellow builders",
        "Discover projects that match your skills and ambitions"
      ],
      mockup: {
        type: "discovery",
        title: "Opportunity Discovery",
        elements: [
          "Startup Listings",
          "Freelance Gigs",
          "Community Pods",
          "Matching Algorithm"
        ]
      }
    },
    {
      step: "03",
      title: "Collaborate & Build",
      subtitle: "Turn connections into meaningful partnerships",
      description: "Apply, collaborate, and build something amazing together.",
      benefits: [
        "Apply to opportunities that resonate with your goals",
        "Connect directly with founders and team members",
        "Use Creator Rooms for seamless collaboration",
        "Build lasting relationships and partnerships"
      ],
      mockup: {
        type: "collaboration",
        title: "Collaboration Hub",
        elements: [
          "Project Management",
          "Team Communication",
          "File Sharing",
          "Progress Tracking"
        ]
      }
    },
    {
      step: "04",
      title: "Scale & Launch",
      subtitle: "From collaboration to launching your own venture",
      description: "Ready to build? We've got your back with comprehensive support.",
      benefits: [
        "Access mentorship from experienced founders",
        "Get support for team building and recruitment",
        "Connect with investors and accelerators",
        "Launch your own startup with our ecosystem"
      ],
      mockup: {
        type: "launch",
        title: "Launch Platform",
        elements: [
          "Mentorship Network",
          "Funding Access",
          "Team Building",
          "Launch Support"
        ]
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
            </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">How It Works</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Your journey from{' '}
            <span className="text-emerald-600 dark:text-emerald-400">
              builder to founder
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Four simple steps to transform your skills into meaningful opportunities and partnerships.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
            </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                    {step.title}
                  </h3>
        </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {step.subtitle}
                  </h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                  </p>
            </div>
              
              <ul className="space-y-3">
                  {step.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start space-x-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
              </ul>

                {index === steps.length - 1 && (
                  <motion.div
                    className="pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  >
                    <motion.a
                      href="https://tally.so/r/nPN7GP"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </motion.div>
                )}
              </div>

              {/* Mockup */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Phone Frame */}
                  <div className="relative w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="h-6 bg-gray-100 dark:bg-gray-700 flex items-center justify-between px-4 text-xs">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                          <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>

                      {/* App Content */}
                      <div className="p-4 space-y-4">
                        {/* Header */}
                        <div className="text-center">
                          <h4 className="font-bold text-gray-800 dark:text-white text-sm">
                            {step.mockup.title}
                          </h4>
                          <div className="w-8 h-1 bg-emerald-500 rounded-full mx-auto mt-2"></div>
        </div>

                        {/* Content Elements */}
                        <div className="space-y-3">
                          {step.mockup.elements.map((element, idx) => (
                            <motion.div
                              key={idx}
                              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center justify-between"
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                            >
                              <span className="text-xs text-gray-600 dark:text-gray-300">
                                {element}
                              </span>
                              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            </motion.div>
                          ))}
            </div>

                        {/* Bottom Navigation */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex justify-around bg-gray-100 dark:bg-gray-700 rounded-lg p-2">
                            {['Home', 'Search', 'Profile', 'Chat'].map((item, idx) => (
                              <div
                                key={idx}
                                className={`text-xs px-2 py-1 rounded ${
                                  idx === (index % 4) 
                                    ? 'bg-emerald-500 text-white' 
                                    : 'text-gray-500'
                                }`}
                              >
                                {item}
                              </div>
                            ))}
                          </div>
            </div>
          </div>
        </div>

                    {/* Glow Effect */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
            </div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-lime-400/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to start your journey?
              </h3>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Join thousands of builders already creating meaningful connections and opportunities.
              </p>
              
              <motion.a
                href="https://tally.so/r/nPN7GP"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
        </div>
    </section>
  );
};

export default HowItWorks;