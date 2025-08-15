'use client'

import { motion } from 'framer-motion'
import { Home, Building2, Construction, Wrench, Palette, Shield } from 'lucide-react'

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: 'Residential Construction',
    description: 'Custom homes, apartments, and residential complexes built to your exact specifications.',
    features: ['Custom Design', 'Quality Materials', 'Modern Finishes', 'Energy Efficient'],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, and commercial complexes for growing businesses.',
    features: ['Corporate Standards', 'Fast Delivery', 'Scalable Design', 'Cost Effective'],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Construction,
    title: 'Infrastructure Development',
    description: 'Roads, bridges, and public infrastructure projects that connect communities.',
    features: ['Heavy Machinery', 'Large Scale', 'Public Works', 'Durability Focus'],
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description: 'Transform existing structures with modern upgrades and improvements.',
    features: ['Structural Updates', 'Modern Systems', 'Aesthetic Improvements', 'Value Addition'],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Complete interior solutions that blend functionality with beautiful aesthetics.',
    features: ['Space Planning', 'Custom Furniture', 'Lighting Design', 'Color Consultation'],
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Shield,
    title: 'Project Management',
    description: 'End-to-end project management ensuring quality, timeline, and budget control.',
    features: ['Timeline Management', 'Quality Control', 'Budget Optimization', 'Risk Management'],
    color: 'from-indigo-500 to-indigo-600'
  }
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
          >
            Our Services
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Construction
            <span className="text-primary-600 block">Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From residential homes to large-scale infrastructure, we deliver exceptional 
            construction services tailored to meet your specific needs and exceed expectations.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-lg`}
              >
                <service.icon className="w-8 h-8" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Call to Action */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Learn more about ${service.title}`}
                className="w-full py-3 px-4 bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 font-medium rounded-lg transition-all duration-300 border border-gray-200 hover:border-primary-200"
              >
                Learn More
              </motion.button>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
            </button>
          </motion.div>
          <p className="text-gray-600 mt-4">
            Not sure which service you need? Let's discuss your project requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}