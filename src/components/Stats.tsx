'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { 
    number: 500, 
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successfully delivered across Nigeria'
  },
  { 
    number: 13, 
    suffix: '+',
    label: 'Years Experience',
    description: 'Building excellence since 2010'
  },
  { 
    number: 1000, 
    suffix: '+',
    label: 'Happy Clients',
    description: 'Satisfied customers nationwide'
  },
  { 
    number: 150, 
    suffix: '+',
    label: 'Expert Team',
    description: 'Skilled professionals at your service'
  }
]

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)
      
      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return count
}

function Particles({ count = 20 }) {
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
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{ left: particle.left, top: particle.top }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </>
  );
}

export default function Stats() {
  return (
    <section className="section-padding gradient-bg text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <Particles count={20} />
        </div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-lg"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            These numbers represent our commitment to excellence and the trust our clients place in us.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
              }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className="text-center group"
            >
              {/* Number Container */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative inline-block mb-4"
              >
                {/* Animated Background Circle */}
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{ 
                    delay: index * 0.2 + 0.5,
                    duration: 1,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                  className="absolute inset-0 w-24 h-24 mx-auto border-2 border-white/30 rounded-full -top-2 -left-2"
                />
                
                {/* Counter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                  className="relative z-10 text-5xl md:text-6xl font-bold mb-2"
                >
                  <AnimatedCounter end={stat.number} />
                  <span className="text-primary-300">{stat.suffix}</span>
                </motion.div>
              </motion.div>

              {/* Label */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 1 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-2 group-hover:text-primary-300 transition-colors"
              >
                {stat.label}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 1.1 }}
                viewport={{ once: true }}
                className="text-gray-300 text-sm leading-relaxed"
              >
                {stat.description}
              </motion.p>

              {/* Hover Effect Lines */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className="h-0.5 bg-primary-300 mx-auto mt-4"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
          >
            <span className="text-lg font-medium">Ready to be our next success story?</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}