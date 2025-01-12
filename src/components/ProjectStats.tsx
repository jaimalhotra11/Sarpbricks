import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Building2, Home, CheckCircle, Construction } from 'lucide-react';

const ProjectStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Building2,
      value: 60,
      label: 'Total Inventory',
      suffix: '+'
    },
    {
      icon: Home,
      value: 35,
      label: 'Ready to Move',
      suffix: '+'
    },
    {
      icon: CheckCircle,
      value: 25,
      label: 'Under Construction',
      suffix: '+'
    },
    {
      icon: Construction,
      value: 15,
      label: 'New Launches',
      suffix: '+'
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Project Portfolio</h2>
          <p className="text-xl text-blue-100">Leading Real Estate Developer in Noida</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">
                {inView && (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                )}
                {stat.suffix}
              </div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;