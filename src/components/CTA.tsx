'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Particles({ count = 15 }) {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: particle.left, top: particle.top }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -50, -100],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
}

export default function CTA() {
  return (
    <section className="section-padding gradient-bg text-white relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 opacity-20">
        <Particles count={15} />
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-white/30 rounded-full"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-lg"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-20 h-20 border border-white/20 rounded-full"
        animate={{ 
          x: [0, 20, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
            >
              Ready to Start Your Project?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let's Build Something
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-primary-300 block"
              >
                Amazing Together
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Transform your vision into reality with Nigeria's leading construction company. 
              Get a free consultation and detailed project quote today.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="tel:+2341234567890"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                info: '+234 (0) 123 456 7890',
                subtitle: 'Mon-Fri, 8AM-6PM',
                action: 'tel:+2341234567890'
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'info@akasonconstruction.com',
                subtitle: '24/7 Email Support',
                action: 'mailto:info@akasonconstruction.com'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                info: '123 Construction Ave, Lagos',
                subtitle: 'Nigeria',
                action: '/contact'
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05
                }}
                transition={{ 
                  delay: 0.9 + index * 0.1,
                  duration: 0.3
                }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Link href={contact.action}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary-300 transition-colors duration-300"
                    >
                      <contact.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">{contact.title}</h3>
                    <p className="text-primary-200 font-medium mb-1">{contact.info}</p>
                    <p className="text-gray-300 text-sm">{contact.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
          >
            <p className="text-lg mb-2">
              🏗️ <strong>Free Consultation Available</strong>
            </p>
            <p className="text-gray-200">
              Our experts are ready to discuss your project requirements and provide personalized solutions. 
              No obligation, just professional advice to help you make informed decisions.
            </p>
          </motion.div>

          {/* Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 1.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 mt-8 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-200"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-6 bg-primary-400 rounded-full flex items-center justify-center mr-3"
            >
              ✓
            </motion.div>
            100% Satisfaction Guaranteed • Licensed & Insured
          </motion.div>
        </div>
      </div>
    </section>
  )
}
