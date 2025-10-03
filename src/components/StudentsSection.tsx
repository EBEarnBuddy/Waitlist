import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, Building2, Users, Star, Zap, ArrowRight, Sparkles, Target, Award, Globe, CheckCircle, Rocket, Handshake 
} from 'lucide-react';

const StudentsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const opportunities = [
    {
      icon: Building2,
      title: "Hands-on Startup Experience",
      description: "Work directly with real startups on meaningful projects",
      details: [
        "Internships with early-stage and funded startups",
        "Real-world project experience with actual impact",
      ]
    },
    {
      icon: Users,
      title: "Exclusive Student Network",
      description: "Connect with top talent from India's premier institutions",
      details: [
        "Network with students from various IIITs, IITs, and NITs",
        "Collaborate on projects and hackathons",
      ]
    },
    {
      icon: Star,
      title: "Premium Opportunities",
      description: "Access high-quality gigs and long-term contracts",
      details: [
        "Flexible schedules that work with your academic commitments",
        "Pathway to full-time roles and co-founder opportunities"
      ]
    }
  ];

  const partnerships = [
    {
      name: "E-Cell IIT-BHU",
      description: "Official partnership for student opportunities and innovation",
      logo: "./partners/iitbhu/ecell iit bhu.webp"
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "Career Acceleration",
      description: "Build your resume with real startup experience"
    },
    {
      icon: Award,
      title: "Skill Development",
      description: "Learn from industry experts and mentors"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with founders and developers worldwide"
    },
    {
      icon: Rocket,
      title: "Future Opportunities",
      description: "Pathway to internships, jobs, and co-founder roles"
    }
  ];

  const testimonials = [
    {
      name: "Gourav Pandey",
      position: "Startup Assistance Head, E-Cell IIT BHU",
      avatar: "./partners/iitbhu/gourav.jpeg",
      quote: "Earnbuddy is the kind of platform every startup ecosystem needs today. It connects ambitious campus talent with budding startups, making collaboration easier and more impactful. Platforms like these create a self-sufficient ecosystem where both sides support and grow with each other, raising the overall entrepreneurial culture. Having been closely connected with student founders myself, I know how valuable this support truly is — and Earnbuddy is driven to prove its impact"},
  
    {
      name: "Oppilan",
      position: "Startup Assistance   Head, E-Cell IIT BHU",
      avatar: "./partners/iitbhu/oppilan.png",
      quote: "EarnBuddy has been instrumental in strengthening the founder–developer ecosystem for student entrepreneurs at IIT BHU. By connecting builders, founders, and innovators on one platform, it has made collaboration easier and more impactful. As someone closely working with student founders, I’ve seen how EarnBuddy accelerates their journey from ideas to execution."
    
    }
  ];

  return (
    <section id="students" className="py-20 bg-white dark:bg-black relative overflow-hidden">
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
            <GraduationCap className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">For Students</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
            Launch your career with{' '}
            <span className="text-emerald-600 dark:text-emerald-400">
              real startup experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            We've been collecting the top talents from India's premier institutions. Get exclusive access to internships, gigs, and long-term contracts that will accelerate your career like no other platform.
          </p>
        </motion.div>

        {/* Institutional Partnerships */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
         
          <div className="flex justify-center">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-2xl border border-gray-100 dark:border-emerald-500/30 text-center cursor-pointer transform transition-transform duration-300"
                whileHover={{ scale: 1.03, y: -3, boxShadow: "0 25px 50px rgba(0,0,0,0.2)" }}
              >  <h3 className="text-3xl font-extrabold text-center text-emerald-600 dark:text-white mb-12">
            Partnering with India's Top Institutions
          </h3>

                <div className="w-28 h-28 bg-gradient-to-tr from-emerald-100 to-emerald-200 dark:from-emerald-800 dark:to-emerald-900 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="w-16 h-16 object-contain"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-bold text-2xl text-gray-800 dark:text-white mb-3">
                  {partner.name}
                </h4>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
                  {partner.description}
                </p>
                <span className="inline-block bg-emerald-100 dark:bg-emerald-700 text-emerald-800 dark:text-emerald-200 text-sm font-medium px-4 py-2 rounded-full">
                  Verified Partner
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            What our institutional partners say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-emerald-500/20"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    
                  </div>
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => {
            const OpportunityIcon = opportunity.icon;
            return (
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
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-xl flex items-center justify-center mb-6 relative">
                      <OpportunityIcon className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 bg-emerald-500/30 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      {opportunity.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {opportunity.description}
                    </p>

                    <ul className="space-y-3">
                      {opportunity.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
