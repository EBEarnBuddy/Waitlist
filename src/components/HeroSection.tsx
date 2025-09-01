import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Users, GitBranch, TrendingUp, Calendar, ArrowRight, Star, Zap, Globe, Building2, GraduationCap } from 'lucide-react';

// Animated Counter Component
const AnimatedCounter: React.FC<{ end: number; duration?: number; prefix?: string; suffix?: string }> = ({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Feature Badge Component
const FeatureBadge: React.FC<{ icon: React.ReactNode; text: string; delay: number }> = ({ icon, text, delay }) => (
  <motion.div
    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-600 dark:text-emerald-400 font-medium"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05 }}
  >
    {icon}
    <span>{text}</span>
  </motion.div>
);

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

  const words = ['Build.', 'Collaborate.', 'Earn.', 'Scale.', 'Innovate.'];

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
          {/* Enhanced Header Content */}
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16 pt-12 sm:pt-20 md:pt-24"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            {/* Premium Badges */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FeatureBadge 
                icon={<Star className="w-4 h-4" />} 
                text="Join the Waitlist" 
                delay={0.1} 
              />
            </motion.div>

            {/* Enhanced Typography */}
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

            {/* Enhanced Subtext */}
            <motion.p
              className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6 sm:mb-10 md:mb-12 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The revolutionary platform where GenZ builders, freelancers, and startup founders connect to create the future. 
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> Join 100+ innovators</span> already building tomorrow.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="/auth"
                className="group relative px-8 xs:px-10 py-4 xs:py-5 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded-2xl overflow-hidden text-base xs:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                href="https://tally.so/r/nPN7GP"
                className="group px-8 xs:px-10 py-4 xs:py-5 border-2 border-emerald-500/30 text-emerald-700 dark:text-emerald-400 font-bold rounded-2xl hover:bg-emerald-500/10 transition-all duration-300 relative overflow-hidden text-base xs:text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="relative z-10">Get Early Access</span>
                <motion.div
                  className="absolute inset-0 bg-emerald-500/5"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
      </motion.div>
        
        </div>
      </div>


      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-20 md:h-32 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;