'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Wrench, Clock } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Every project undergoes rigorous quality checks to ensure excellence.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our skilled professionals bring decades of combined experience.'
  },
  {
    icon: Wrench,
    title: 'Modern Equipment',
    description: 'We use state-of-the-art machinery and construction technology.'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We respect deadlines and deliver projects on schedule.'
  }
]

export default function About() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
            >
              About Akason's Construction
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Building Nigeria's
              <span className="text-primary-600 block">Future Together</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Since 2010, Akason's Construction has been at the forefront of Nigeria's construction industry. 
              We've built our reputation on delivering exceptional quality, innovative solutions, and unmatched 
              customer service across residential, commercial, and infrastructure projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary">Learn More About Us</button>
              <button className="btn-secondary">View Our Projects</button>
            </motion.div>
          </motion.div>

          {/* Right Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Construction Team"
                width={600}
                height={400}
                className="object-cover"
              />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border border-gray-100"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">13+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-primary-600 text-white p-4 rounded-xl shadow-2xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-xs">Completed Projects</div>
              </div>
            </motion.div>

            {/* Background Decorative Elements */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-primary-200 rounded-full opacity-20 -z-10"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                scale: [1, 0.9, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary-300 rounded-full opacity-10 -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}