import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Create Your Profile',
      subtitle: 'Less profile setup, more time building connections',
      benefits: [
        'Answer a few quick questions to personalize your experience',
        'Showcase your skills, experience, and career goals',
        'Set your preferences for collaboration and opportunities',
        'Get matched with the right community and projects'
      ],
      mockup: {
        type: 'profile',
        title: 'Profile Creation',
        elements: ['Personal Information', 'Skills & Expertise', 'Career Goals', 'Collaboration Style']
      }
    },
    {
      step: '02',
      title: 'Discover Opportunities',
      subtitle: 'Find your perfect match in the builder ecosystem',
      benefits: [
        'Explore live startups and freelance opportunities',
        'Join specialized pods based on your interests',
        'Connect with founders and fellow builders',
        'Discover projects that match your skills and ambitions'
      ],
      mockup: {
        type: 'discovery',
        title: 'Opportunity Discovery',
        elements: ['Startup Listings', 'Freelance Gigs', 'Community Pods', 'Matching Algorithm']
      }
    },
    {
      step: '03',
      title: 'Collaborate & Build',
      subtitle: 'Turn connections into meaningful partnerships',
      benefits: [
        'Apply to opportunities that resonate with your goals',
        'Connect directly with founders and team members',
        'Use Creator Rooms for seamless collaboration',
        'Build lasting relationships and partnerships'
      ],
      mockup: {
        type: 'collaboration',
        title: 'Collaboration Hub',
        elements: ['Project Management', 'Team Communication', 'File Sharing', 'Progress Tracking']
      }
    },
    {
      step: '04',
      title: 'Scale & Launch',
      subtitle: 'From collaboration to launching your own venture',
      benefits: [
        'Access mentorship from experienced founders',
        'Get support for team building and recruitment',
        'Connect with investors and accelerators',
        'Launch your own startup with our ecosystem'
      ],
      mockup: {
        type: 'launch',
        title: 'Launch Platform',
        elements: ['Mentorship Network', 'Funding Access', 'Team Building', 'Launch Support']
      }
    }
  ];

  // Track which step is in view
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = steps.map(() => useRef<HTMLDivElement>(null));

  // Detect which step is active
  const inViewArray = stepRefs.map(ref => useInView(ref, { amount: 0.6 }));

  useEffect(() => {
    inViewArray.forEach((inView, idx) => {
      if (inView) setActiveStep(idx);
    });
  }, [inViewArray]);

  // NEW: refs for the scroll column + CTA
  const scrollColRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // NEW: give focus to the scrollable column so Arrow keys control it
  useEffect(() => {
    scrollColRef.current?.focus();
  }, []);

  // NEW: handle ArrowUp/ArrowDown to snap steps, then go to CTA
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeStep < steps.length - 1) {
          e.preventDefault();
          stepRefs[activeStep + 1].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // last step -> jump to CTA
          if (ctaRef.current) {
            e.preventDefault();
            ctaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (activeStep > 0) {
          e.preventDefault();
          stepRefs[activeStep - 1].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // if at first step, let default scroll up to header
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeStep, steps.length]); // stepRefs order is stable; no need to include it

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">How It Works</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Your journey from <span className="text-emerald-600 dark:text-emerald-400">builder to founder</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Four simple steps to transform your skills into meaningful opportunities and partnerships.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Steps (Snap Scroll) */}
          <div
            ref={scrollColRef}
            tabIndex={0}
            aria-label="How it works steps"
            className="flex-1 snap-y snap-mandatory h-screen overflow-y-scroll space-y-32 pr-8 focus:outline-none focus-visible:outline-none
                       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                ref={stepRefs[index]}
                className="h-screen flex flex-col justify-center snap-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{step.title}</h3>
                  </div>

                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{step.subtitle}</h4>

                  <ul className="space-y-3">
                    {step.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start space-x-3 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.05 }}
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Fixed Mockup */}
          <div className="flex-1 sticky top-0 h-screen flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-96 bg-gray-900 rounded-3xl p-2 shadow-2xl"
              >
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
                      <h4 className="font-bold text-gray-800 dark:text-white text-sm">{steps[activeStep].mockup.title}</h4>
                      <div className="w-8 h-1 bg-emerald-500 rounded-full mx-auto mt-2"></div>
                    </div>

                    {/* Content Elements */}
                    <div className="space-y-3">
                      {steps[activeStep].mockup.elements.map((element, idx) => (
                        <motion.div
                          key={idx}
                          className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex items-center justify-between"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: idx * 0.05 }}
                        >
                          <span className="text-xs text-gray-600 dark:text-gray-300">{element}</span>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          ref={ctaRef} // NEW: used to jump here from last step
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-lime-400/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your journey?</h3>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Join thousands of builders already creating meaningful connections and opportunities.
              </p>

              <motion.a
                href="/discover"
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
