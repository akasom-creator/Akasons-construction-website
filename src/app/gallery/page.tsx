'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn, Filter, Grid, List } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Commercial',
    title: 'Modern Office Complex',
    description: 'State-of-the-art 15-story office building in Abuja'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Residential',
    title: 'Luxury Residential Complex',
    description: 'Premium 50-unit residential development in Lagos'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    category: 'Infrastructure',
    title: 'Kano Bridge Project',
    description: 'Major infrastructure connecting communities'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    category: 'Residential',
    title: 'Exclusive Villa Estate',
    description: 'Luxury villas with premium finishes'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80',
    category: 'Healthcare',
    title: 'Modern Hospital Complex',
    description: '300-bed healthcare facility with modern equipment'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Commercial',
    title: 'Shopping Mall Complex',
    description: 'Comprehensive retail and entertainment center'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
    category: 'Infrastructure',
    title: 'Urban Development',
    description: 'Large-scale urban infrastructure project'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Industrial',
    title: 'Manufacturing Plant',
    description: 'Industrial construction with modern facilities'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Residential',
    title: 'Contemporary Homes',
    description: 'Modern residential architecture with clean lines'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'Commercial',
    title: 'Corporate Headquarters',
    description: 'Premium office space with modern amenities'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    category: 'Educational',
    title: 'University Campus',
    description: 'Modern educational facility design'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    category: 'Hospitality',
    title: 'Luxury Hotel',
    description: 'Five-star hotel with premium amenities'
  }
]

const categories = ['All', 'Residential', 'Commercial', 'Infrastructure', 'Healthcare', 'Industrial', 'Educational', 'Hospitality']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid')

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory)

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
          >
            Project Gallery
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Our Work
            <span className="text-primary-600 block">In Pictures</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our extensive portfolio of completed projects across Nigeria. 
            From residential developments to large-scale infrastructure, witness the quality and craftsmanship that defines our work.
          </motion.p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* View Controls */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'masonry' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <List className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="text-sm text-gray-600">
              {filteredImages.length} projects
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6'
        } mb-16`}>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className={`group cursor-pointer ${
                viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`relative ${
                  viewMode === 'grid' ? 'aspect-[4/3]' : 'aspect-auto'
                }`}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    width={400}
                    height={viewMode === 'grid' ? 300 : 600}
                    className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <ZoomIn className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded">
                      {image.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4"
          >
            Load More Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="object-contain max-h-[80vh] rounded-lg"
            />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200 mb-2">{selectedImage.description}</p>
              <span className="text-primary-400 text-sm">{selectedImage.category}</span>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}