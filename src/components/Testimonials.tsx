'use client'

import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Adebayo Johnson',
    title: 'CEO, Johnson Properties',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    rating: 5,
    text: "Akason's Construction transformed our vision into a magnificent reality. Their attention to detail, professional approach, and commitment to quality exceeded all our expectations. The residential complex they built for us has become a landmark in Lagos.",
    project: 'Lagos Residential Complex'
  },
  {
    id: 2,
    name: 'Fatima Abubakar',
    title: 'Project Manager, TechCorp Nigeria',
    location: 'Abuja, Nigeria',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    rating: 5,
    text: "Working with Akason's was an absolute pleasure. They delivered our corporate headquarters on time and within budget, despite the complex requirements. Their team's expertise in modern construction techniques and smart building systems is truly impressive.",
    project: 'Abuja Corporate Headquarters'
  },
  {
    id: 3,
    name: 'Chief Emmanuel Okafor',
    title: 'Private Homeowner',
    location: 'Enugu, Nigeria',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 5,
    text: "I've worked with several construction companies over the years, but Akason's stands out for their integrity and craftsmanship. They built my family home with such care and attention to detail. Every corner reflects their commitment to excellence.",
    project: 'Custom Family Home'
  },
  {
    id: 4,
    name: 'Dr. Sarah Ogbonna',
    title: 'Medical Director, Ibadan General Hospital',
    location: 'Ibadan, Nigeria',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 5,
    text: "The hospital complex they built for us is not just a building; it's a testament to their understanding of healthcare needs. From specialized medical infrastructure to patient comfort areas, every aspect was perfectly executed.",
    project: 'Ibadan Hospital Complex'
  },
  {
    id: 5,
    name: 'Muhammed Hassan',
    title: 'State Commissioner for Works',
    location: 'Kano, Nigeria',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    rating: 5,
    text: "Akason's Construction proved their capability on our major infrastructure project. The bridge they constructed not only meets all engineering standards but will serve our community for generations. Their professionalism throughout the project was exemplary.",
    project: 'Kano Bridge Infrastructure'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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
            Client Testimonials
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our Clients
            <span className="text-primary-600 block">Say About Us</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            their experience working with Akason's Construction.
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 md:p-12 shadow-lg border border-primary-100 relative overflow-hidden">
            {/* Background Decoration */}
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
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full opacity-50"
            />
            
            {/* Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-8 left-8 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center"
            >
              <Quote className="w-8 h-8 text-white" />
            </motion.div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              {/* Client Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex justify-center md:justify-start mb-4"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic"
                >
                  "{testimonials[currentIndex].text}"
                </motion.p>

                {/* Client Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-600 font-medium mb-1">
                    {testimonials[currentIndex].title}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    {testimonials[currentIndex].location}
                  </p>
                  <p className="text-gray-600 text-sm font-medium">
                    Project: {testimonials[currentIndex].project}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8">Trusted by leading organizations across Nigeria</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="h-16 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500 font-semibold">Client {i}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}