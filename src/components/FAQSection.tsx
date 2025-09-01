import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const FAQSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
const faqs = [
  {
    question: "Is EarnBuddy secure?",
    answer: "Yes. While payments won't happen directly on our platform during the early stage, all user data, interactions, and connections will be handled securely. We’re prioritizing safety and trust from day one."
  },
  {
    question: "Will I find the right people for my projects?",
    answer: "That’s the goal! We're actively reaching out to students, freelancers, founders, and creators across multiple domains to ensure EarnBuddy launches with a strong, diverse network of collaborators."
  },
  {
    question: "Who is EarnBuddy for?",
    answer: "For students, beginners, freelancers, and early-stage founders who want to build real projects, startups, or side hustles—without waiting for ‘someday’."
  },
  {
    question: "I’m just a student/teenager. Can I still join?",
    answer: "Absolutely. EarnBuddy is designed for curious builders at all stages, including students and teenagers who are just starting out."
  },
  {
    question: "Why join the waitlist now?",
    answer: "Because you’ll be part of the founding community shaping EarnBuddy. Early members get updates, early invites, and influence over how the platform evolves."
  }
];


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Got{' '}
            <span className="text-emerald-600 dark:text-emerald-400">
              Questions
            </span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about building with EarnBuddy
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <motion.button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 group"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white pr-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-emerald-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                      )}
                    </motion.div>
                  </div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-emerald-200 dark:from-emerald-800 to-transparent mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* We Need Your Help CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-emerald-50 dark:from-emerald-900/20 to-lime-50 dark:to-lime-900/20 rounded-2xl p-8 border border-emerald-100 dark:border-emerald-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                The future is being built. The question is, are you on the team?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Join the Waitlist, apply for the Beta, and follow us on LinkedIn to see what unfolds. 
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tally.so/r/nPN7GP"
                  className="group relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Help Us Make It Better
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-lime-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-emerald-500/30 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/company/earnbuddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">Follow Us On LinkedIn</span>
                  <motion.div
                    className="absolute inset-0 bg-emerald-500/5"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;