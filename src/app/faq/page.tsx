'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone } from 'lucide-react'

const faqData = [
  {
    category: 'General',
    questions: [
      {
        question: 'How long has Akason\'s Construction been in business?',
        answer: 'Akason\'s Construction has been proudly serving Nigeria since 2010. With over 13 years of experience, we have successfully completed more than 500 projects across residential, commercial, and infrastructure sectors.'
      },
      {
        question: 'What types of construction projects do you handle?',
        answer: 'We specialize in a wide range of construction projects including residential homes and complexes, commercial buildings, office spaces, shopping centers, hospitals, schools, hotels, bridges, roads, and other infrastructure projects. We also offer renovation, remodeling, and interior design services.'
      },
      {
        question: 'Do you provide construction services outside Lagos?',
        answer: 'Yes, we provide construction services across Nigeria. Our projects span major cities including Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu, and other locations nationwide. We have the capacity and logistics to handle projects anywhere in Nigeria.'
      },
      {
        question: 'Are you licensed and insured?',
        answer: 'Absolutely. We are fully licensed by the Corporate Affairs Commission (CAC), certified by the Council for the Regulation of Engineering in Nigeria (COREN), and hold ISO 9001:2015 certification. We carry comprehensive insurance coverage for all our projects and workers.'
      }
    ]
  },
  {
    category: 'Project Planning',
    questions: [
      {
        question: 'How do I get started with my construction project?',
        answer: 'Starting your project is simple. Contact us for a free consultation where we\'ll discuss your vision, requirements, and budget. We\'ll then conduct a site visit, provide detailed proposals, and work with you to finalize the design and construction plan.'
      },
      {
        question: 'Do you provide architectural and design services?',
        answer: 'Yes, we have in-house architects and designers who can handle everything from initial concept design to detailed architectural plans. We also work with external architects if you prefer to use your own design team.'
      },
      {
        question: 'How long does it typically take to complete a project?',
        answer: 'Project timelines vary depending on size and complexity. Residential homes typically take 6-12 months, commercial buildings 12-24 months, and large infrastructure projects can take 2-5 years. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Can you help with obtaining building permits?',
        answer: 'Yes, we assist with all necessary permits and approvals. Our team is familiar with local building codes and regulations across Nigeria, and we handle the permit application process to ensure your project complies with all requirements.'
      }
    ]
  },
  {
    category: 'Costs & Payment',
    questions: [
      {
        question: 'How do you determine project costs?',
        answer: 'Project costs are determined based on factors including project size, complexity, materials specified, location, and current market rates. We provide detailed cost estimates after site evaluation and design finalization. Our quotes are comprehensive and transparent.'
      },
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes, we provide free initial consultations and cost estimates for all potential projects. Our team will visit your site, discuss your requirements, and provide a detailed written estimate with no obligation.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including bank transfers, checks, and cash payments. Payments are typically structured in phases aligned with project milestones. We discuss payment schedules during contract negotiation.'
      },
      {
        question: 'Do you offer financing options?',
        answer: 'While we don\'t directly provide financing, we work with several financial institutions that offer construction loans. We can refer you to trusted partners and assist with documentation required for loan applications.'
      }
    ]
  },
  {
    category: 'Construction Process',
    questions: [
      {
        question: 'How do you ensure quality throughout construction?',
        answer: 'Quality is our top priority. We implement rigorous quality control measures including regular inspections, use of premium materials, skilled craftsmen, adherence to international standards, and continuous supervision by experienced project managers.'
      },
      {
        question: 'Will I be kept informed about project progress?',
        answer: 'Absolutely. We provide regular updates through weekly progress reports, photos, and scheduled site meetings. You\'ll have direct communication with your project manager and can visit the site anytime during construction hours.'
      },
      {
        question: 'What happens if there are delays or changes?',
        answer: 'We plan meticulously to avoid delays, but if they occur due to weather, permit issues, or change requests, we communicate immediately and adjust timelines accordingly. Any changes to scope or cost are discussed and approved before implementation.'
      },
      {
        question: 'Do you clean up after construction?',
        answer: 'Yes, complete site cleanup is included in all our projects. We remove all construction debris, clean the completed structure, and ensure the site is ready for occupancy or landscaping as planned.'
      }
    ]
  },
  {
    category: 'After Completion',
    questions: [
      {
        question: 'Do you provide warranties on your work?',
        answer: 'Yes, we provide comprehensive warranties on all our construction work. Structural work comes with a 10-year warranty, while other components have warranties ranging from 1-5 years depending on the type of work and materials used.'
      },
      {
        question: 'What if I need repairs or maintenance after completion?',
        answer: 'We offer post-completion maintenance services and respond quickly to any warranty issues. Our team remains available for ongoing support, repairs, or future modifications to your property.'
      },
      {
        question: 'Can you help with future expansions or modifications?',
        answer: 'Absolutely. As the original builders, we\'re ideally positioned to handle future expansions, renovations, or modifications. We maintain detailed records of all projects and can seamlessly integrate new work with existing structures.'
      }
    ]
  }
]

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [openQuestions, setOpenQuestions] = useState<number[]>([])

  const categories = ['All', ...faqData.map(cat => cat.category)]

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const filteredFAQs = faqData.filter(category => 
    activeCategory === 'All' || category.category === activeCategory
  ).map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  let questionIndex = 0

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
            Frequently Asked Questions
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Got Questions?
            <span className="text-primary-600 block">We Have Answers</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Find answers to common questions about our construction services, processes, and policies. 
            Can't find what you're looking for? Contact us directly.
          </motion.p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-gray-900 placeholder-gray-500 shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.6 + index * 0.1 }}
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
          </div>
        </motion.div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto mb-16">
          {filteredFAQs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + categoryIndex * 0.1 }}
              className="mb-12"
            >
              {activeCategory === 'All' && (
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-1 h-8 bg-primary-600 rounded-full mr-4"></div>
                  {category.category}
                </h2>
              )}
              
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const currentQuestionIndex = questionIndex++
                  const isOpen = openQuestions.includes(currentQuestionIndex)
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                    >
                      <motion.button
                        onClick={() => toggleQuestion(currentQuestionIndex)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        whileHover={{ backgroundColor: '#f9fafb' }}
                      >
                        <h3 className="font-semibold text-gray-900 text-lg pr-8">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-6 h-6 text-primary-600" />
                        </motion.div>
                      </motion.button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6">
                          <div className="w-full h-px bg-gray-200 mb-6"></div>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse different categories.
              </p>
            </motion.div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-12 shadow-lg border border-gray-100 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <MessageCircle className="w-8 h-8 text-primary-600" />
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our experts are here to help. Get in touch for personalized answers to your construction questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Live Chat
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}