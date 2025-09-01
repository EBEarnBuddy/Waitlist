import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jay Agarwal",
    role: "Student and Founder",
    avatar: "./public/testimonies/jay.png",
    content: "As a founder, I'm excited by EarnBuddy's vision for building the right team and would love early access.",
    rating: 5,
    company: "Ganges"
  },
  {
    id: 2,
    name: "Mrinal",
    role: "Student and Freelancer",
    avatar: "./public/testimonies/mrinal.png",
    content: "As a freelancer and hackathon enthusiast, I'm genuinely wish to transform my solo project struggles into powerful teamwork.",
    rating: 5,
    company: "Independent"
  },
  {
    id: 3,
    name: "Elvis Osano",
    role: "Freelancer and Founder",
    avatar: "./public/testimonies/elvis.jpg",
    content: "As a freelancer, I'm genuinely excited about EarnBuddy's potential to connect me with like-minded builders and mentors who truly care about shared projects.",
    rating: 5,
    company: "Upshift Ecommerce"
  },
  {
    id: 4,
    name: "Aditi Bansal",
    role: "Student and Full-stack Developer",
    avatar: "./public/testimonies/aditi.jpg",
    content: "EarnBuddy solved a problem I faced, and I'm genuinely excited to be a part of the journey as we build it together.",
    rating: 5,
    company: "EarnBuddy"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            What <span className="text-emerald-600 dark:text-emerald-400">Builders</span> Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Stories from the innovators who are already buzzing about the future we're building.          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-2xl border border-gray-100 dark:border-emerald-500/20 relative overflow-hidden"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {/* Gradient Background */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-600 to-emerald-400"></div>
                
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full blur-lg opacity-30"></div>
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="relative w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                    />
                  </motion.div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div>
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500/40 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </motion.button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-emerald-500 w-8'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500/40 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Something big is brewing. Join the innovators already on board to build the future of work.
          </p>
          <motion.a
            href="/discover"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Join EarnBuddy Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};