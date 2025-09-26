import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Create Your Profile',
      subtitle: 'Less profile setup, more time building connections',
    
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
     
      mockup: {
        type: 'launch',
        title: 'Launch Platform',
        elements: ['Mentorship Network', 'Funding Access', 'Team Building', 'Launch Support']
      }
    }
  ];

  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = steps.map(() => useRef<HTMLDivElement>(null));
  const inViewArray = stepRefs.map(ref => useInView(ref, { amount: 0.6 }));

  useEffect(() => {
    inViewArray.forEach((inView, idx) => {
      if (inView) setActiveStep(idx);
    });
  }, [inViewArray]);

  const scrollColRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollColRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (activeStep < steps.length - 1) {
          e.preventDefault();
          stepRefs[activeStep + 1].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
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
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeStep, steps.length]);

  return (
    <section id="how-it-works" className="relative w-full h-screen bg-white dark:bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 h-full">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Zap className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">How It Works</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 dark:text-white">
            Your journey from <span className="text-emerald-600 dark:text-emerald-400">builder to founder</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Four simple steps to transform your skills into meaningful opportunities and partnerships.
          </p>
        </motion.div>

        {/* Main Horizontal Layout */}
        <div className="flex flex-row w-full h-[calc(100%-8rem)] gap-4">
          {/* Left Column - Steps */}
          <div
            ref={scrollColRef}
            tabIndex={0}
            aria-label="How it works steps"
            className="w-1/2 h-full overflow-y-scroll snap-y snap-mandatory pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                ref={stepRefs[idx]}
                className="h-full flex flex-col justify-center snap-start mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">{step.step}</div>
                    <h5 className=" font-bold text-gray-800 dark:text-white">{step.title}</h5>
                  </div>
                  <h6 className="ml-4 text-gray-800 dark:text-white">{step.subtitle}</h6>
                  
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Mockup */}
          <div className="w-1/2 h-full flex items-center justify-center sticky top-0">
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
                  <div className="h-6 bg-gray-100 dark:bg-gray-700 flex items-center justify-between px-4 text-xs">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="text-center">
                      <h4 className="font-bold text-gray-800 dark:text-white text-sm">{steps[activeStep].mockup.title}</h4>
                      <div className="w-8 h-1 bg-emerald-500 rounded-full mx-auto mt-1"></div>
                    </div>
                    <div className="space-y-2">
                      {steps[activeStep].mockup.elements.map((el, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 flex items-center justify-between">
                          <span className="text-xs text-gray-600 dark:text-gray-300">{el}</span>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        </div>
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
          ref={ctaRef}
          className="text-center mt-12"
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
