'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Lagos Modern Residential Complex',
    category: 'Residential',
    location: 'Lagos, Nigeria',
    year: '2023',
    client: 'Private Developer',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A luxury 50-unit residential complex featuring modern amenities and sustainable design.',
    features: ['50 Units', 'Green Technology', 'Swimming Pool', 'Parking Garage']
  },
  {
    id: 2,
    title: 'Abuja Corporate Headquarters',
    category: 'Commercial',
    location: 'Abuja, Nigeria',
    year: '2022',
    client: 'TechCorp Nigeria',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A 15-story modern office building with state-of-the-art facilities and smart building technology.',
    features: ['15 Floors', 'Smart Technology', '500 Employees', 'LEED Certified']
  },
  {
    id: 3,
    title: 'Port Harcourt Shopping Mall',
    category: 'Commercial',
    location: 'Port Harcourt, Nigeria',
    year: '2023',
    client: 'Retail Ventures Ltd',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'A comprehensive shopping and entertainment complex serving the greater Port Harcourt area.',
    features: ['200 Stores', 'Food Court', 'Cinema Complex', '2000 Parking']
  },
  {
    id: 4,
    title: 'Kano Bridge Infrastructure',
    category: 'Infrastructure',
    location: 'Kano, Nigeria',
    year: '2021',
    client: 'Kano State Government',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    description: 'A critical infrastructure project connecting communities and improving regional transportation.',
    features: ['2.5km Length', 'Heavy Traffic', 'Modern Design', 'Flood Resistant']
  },
  {
    id: 5,
    title: 'Luxury Villa Estate',
    category: 'Residential',
    location: 'Abuja, Nigeria',
    year: '2023',
    client: 'Private Client',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
    description: 'An exclusive collection of luxury villas with premium finishes and landscaped gardens.',
    features: ['12 Villas', 'Premium Finishes', 'Landscaped Gardens', 'Private Security']
  },
  {
    id: 6,
    title: 'Hospital Complex',
    category: 'Healthcare',
    location: 'Ibadan, Nigeria',
    year: '2022',
    client: 'Ministry of Health',
    image: 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
    description: 'A modern healthcare facility designed to serve the growing medical needs of the region.',
    features: ['300 Beds', 'Modern Equipment', 'Emergency Wing', 'Research Center']
  }
]

const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Healthcare']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="section-padding bg-gray-50">
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
            Our Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured Projects
            <span className="text-primary-600 block">That Define Excellence</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our diverse portfolio of successful projects across Nigeria, 
            showcasing our expertise in various construction sectors.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* View Project Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  <ExternalLink size={16} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2 text-primary-600" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2 text-primary-600" />
                    Completed {project.year}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={16} className="mr-2 text-primary-600" />
                    {project.client}
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 font-medium rounded-lg transition-all duration-300 border border-gray-200 hover:border-primary-200"
                >
                  View Project Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            View All Projects
          </motion.button>
          <p className="text-gray-600 mt-4">
            Interested in starting your own project? Let's discuss your vision.
          </p>
        </motion.div>
      </div>
    </section>
  )
}