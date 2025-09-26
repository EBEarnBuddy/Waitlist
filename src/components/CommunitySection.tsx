import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Zap, Lock, Trophy, Cpu, Leaf, DollarSign, Globe,HandshakeIcon, ArrowRight, Users, Building2, Handshake } from 'lucide-react';

const CommunitiesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: MessageCircle,
      title: "Dynamic chat threads for each pod",
      description: "Organized conversations that keep projects moving forward"
    },
    {
      icon: Zap,
      title: "Real-time messages, likes, mentions",
      description: "Stay connected with instant notifications and engagement"
    },
    {
      icon: Lock,
      title: "Private Creator Rooms for async co-building",
      description: "Dedicated spaces for deep work and collaboration"
    },
    {
      icon: Trophy,
      title: "Leaderboards & trust badges inside each community",
      description: "Build reputation and recognition for your contributions"
    }
  ];

  const pods = [
    { icon: Cpu, name: "AI", color: "from-blue-500 to-purple-600"},
    { icon: Globe, name: "Web3", color: "from-purple-500 to-pink-600" },
    { icon: HandshakeIcon, name: "Startups", color: "from-blue-700 via-blue-500 to-cyan-400" },
    { icon: Zap, name: "Tech", color: "from-yellow-500 to-orange-600" },
    { icon: DollarSign, name: "Finance", color: "from-emerald-500 to-emerald-600" }
  ];

  return (
    <section id="communities" className="py-20 bg-gray-50 dark:bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl animate-pulse"></div>
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
           
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">Communities</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Built for real{' '}
            <span className="text-emerald-600 dark:text-emerald-400">
              momentum
            </span>.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Join Pods around AI, Web3, Startups, Tech, Finance and more, Or Create rooms to connect with builders who share your vision and drive.
          </p>
        </motion.div>

        {/* Pod Categories */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {pods.map((pod, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className={`bg-gradient-to-r ${pod.color} rounded-2xl p-4 sm:p-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex flex-col items-center text-center space-y-2 relative z-10">
                  <pod.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">{pod.name}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community CTA Section */}
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
                Bring your community to our platform.
              </h3>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                We're partnering with innovation communities worldwide to connect builders through our platform. Let's discuss how we can help your community grow.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="mailto:business@earnbuddy.com?subject=Community Partnership Inquiry"
                  className="group px-8 py-4 bg-white text-emerald-600 font-bold rounded-2xl flex items-center gap-2 hover:bg-emerald-50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Partner with Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="/discover"
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

export default CommunitiesSection;