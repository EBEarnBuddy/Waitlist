import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, GraduationCap, DollarSign, ArrowRight, Sparkles, Zap, Building2, Target, Rocket, Handshake, Award, TrendingUp, CheckCircle } from 'lucide-react';

const StartupsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Users,
      title: "Co-founder Matching",
      features: [
        "Verified profiles with detailed background checks",
        "Structured co-founder discovery process",
        "Legal framework templates for equity splits"
      ],
      color: "emerald"
    },
    {
      icon: Building2,
      title: "Talent Acquisition",
      features: [
        "Student talent from top institutions",
        "Freelancers ready for long-term commitments",
        "Skill-based filtering and portfolio reviews"
      ],
      color: "blue"
    },
    {
      icon: Rocket,
      title: "Growth & Mentorship",
      features: [
        "1:1 mentorship from successful founders and VCs",
        "Access to our network of investors and accelerators",
        "Workshop series on fundraising, GTM, and scaling",
        "Community-driven feedback and validation"
      ],
      color: "purple"
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Faster Time to Market",
      description: "Reduce hiring time by 70% with our pre-vetted talent pool"
    },
    {
      icon: Handshake,
      title: "Long-term Partnerships",
      description: "Build lasting relationships, not just one-off hires"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every candidate is verified and skill-tested"
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Scale your team as you grow with flexible engagement models"
    }
  ];

  return (
    <section id="startups" className="py-20 bg-white dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
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
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">For Startups</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Build your startup with{' '}
            <span className="text-emerald-600 dark:text-emerald-400">
              world-class talent
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            From finding co-founders to building your dream team, we provide everything you need to scale your startup from idea to unicorn.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-emerald-500/20 h-full relative overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 group-hover:border-emerald-500/40">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-lime-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r from-${service.color}-600 to-${service.color}-500 rounded-xl flex items-center justify-center mb-6 relative`}>
                    <service.icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-emerald-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    {service.title}
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {feature}
                    </span>
                    </li>
                  ))}
                  </ul>

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
            Why startups choose EarnBuddy
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50"
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
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-lime-400/20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build your dream team?
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
                  href="mailto:business@earnbuddy.tech?subject=Startup Partnership Inquiry"
                  className="group px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl flex items-center gap-2 hover:bg-emerald-50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
                  <span>Partner with Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a
                  href="https://tally.so/r/nPN7GP"
                  className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
                >
                  Join Waitlist
          </motion.a>
              </div>
              
             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsSection;
