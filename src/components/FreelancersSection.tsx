import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Target, Handshake, Eye, CreditCard, Sparkles, Zap, Users, TrendingUp, Award, Globe, Building2, ArrowRight, CheckCircle } from 'lucide-react';

const FreelancersSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Build Your Reputation",
      description: "Create a profile that showcases your expertise, not just your skills",
    },
    {
      icon: Handshake,
      title: "Long-term Partnerships",
      description: "Move beyond one-off gigs to meaningful, lasting collaborations",
    },
    {
      icon: Star,
      title: "Premium Opportunities",
      description: "Access high-value projects that match your expertise and goals",
      
    },
    {
      icon: Eye,
      title: "Get Discovered",
      description: "Be featured on talent walls visible to founders and hiring managers",
    },
    {
      icon: CreditCard,
      title: "Seamless Management",
      description: "Handle contracts, payments, and collaboration in one place",
    },
    {
      icon: Users,
      title: "Community & Growth",
      description: "Connect with other professionals and access learning resources",
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "3x Higher Earnings",
      description: "Average freelancers earn 3x more through direct relationships"
    },
    {
      icon: Award,
      title: "Quality Clients",
      description: "Work with serious founders, not bargain hunters"
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access projects from startups worldwide"
    },
    {
      icon: Building2,
      title: "Career Growth",
      description: "Transition from freelancer to co-founder or team lead"
    }
  ];

  const howToUse = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Build a comprehensive profile showcasing your expertise, portfolio, and career goals. Include your preferred collaboration style and long-term aspirations."
    },
    {
      step: "02",
      title: "Set Your Preferences",
      description: "Define your ideal projects, preferred rates, availability, and whether you're open to equity partnerships or long-term contracts."
    },
    {
      step: "03",
      title: "Get Matched",
      description: "Our AI matches you with startups and projects that align with your skills, goals, and preferences. No more endless proposal writing."
    },
    {
      step: "04",
      title: "Build Relationships",
      description: "Connect directly with founders, discuss project scope, and build lasting partnerships that grow with their success."
    }
  ];

  return (
    <section id="freelancers" className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
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
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">For Freelancers</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Build your career, not just{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              another gig
            </span>
          </h2>
          
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-emerald-500/20 h-full relative overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:border-emerald-500/40">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl flex items-center justify-center mb-4 relative">
                    <feature.icon className="w-6 h-6 text-white" />
                    <div className="absolute inset-0 bg-emerald-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Why EarnBuddy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                
                <motion.a
                  href="/discover"
                  className="px-8 py-4 border-2 border-emerald-600/30 text-emerald-600 font-bold rounded-2xl hover:bg-emerald-400/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Waitlist
                </motion.a>
              </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreelancersSection;
