'use client'

import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight,
  Clock,
  Award
} from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  services: [
    { name: 'Residential Construction', href: '/services/residential' },
    { name: 'Commercial Construction', href: '/services/commercial' },
    { name: 'Infrastructure Development', href: '/services/infrastructure' },
    { name: 'Renovation & Remodeling', href: '/services/renovation' },
    { name: 'Interior Design', href: '/services/interior-design' },
    { name: 'Project Management', href: '/services/project-management' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Safety Standards', href: '/safety' },
    { name: 'Quality Assurance', href: '/quality' },
  ],
  resources: [
    { name: 'Project Gallery', href: '/gallery' },
    { name: 'Client Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Construction Blog', href: '/blog' },
    { name: 'Download Brochure', href: '/brochure' },
    { name: 'Request Quote', href: '/quote' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container section-padding">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div>
                <div className="text-2xl font-bold">Akason's</div>
                <div className="text-primary-400 font-medium">Construction</div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 leading-relaxed mb-6"
            >
              Nigeria's premier construction company, building exceptional structures since 2010. 
              We combine traditional craftsmanship with modern technology to deliver projects that 
              stand the test of time.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 mb-6"
            >
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors" />
                <Link href="tel:+2341234567890" className="text-gray-300 hover:text-white transition-colors">
                  +234 (0) 123 456 7890
                </Link>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors" />
                <Link href="mailto:info@akasonconstruction.com" className="text-gray-300 hover:text-white transition-colors">
                  info@akasonconstruction.com
                </Link>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors mt-0.5" />
                <div className="text-gray-300">
                  123 Construction Avenue<br />
                  Lagos, Nigeria
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg"
            >
              <Clock className="w-5 h-5 text-primary-400" />
              <div>
                <div className="font-semibold text-sm">Business Hours</div>
                <div className="text-gray-400 text-sm">Mon-Fri: 8AM-6PM | Sat: 9AM-2PM</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="p-4 bg-gray-800 rounded-lg"
            >
              <div className="flex items-center space-x-3 mb-2">
                <Award className="w-5 h-5 text-primary-400" />
                <span className="font-semibold text-sm">Certified & Licensed</span>
              </div>
              <p className="text-gray-400 text-xs">
                CAC Registered • COREN Certified • ISO 9001:2015
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-12 mt-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest news about our projects, industry insights, and construction tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white placeholder-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Akason's Construction Company. All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                <Link href="/privacy" className="text-gray-500 hover:text-primary-400 text-xs transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/terms" className="text-gray-500 hover:text-primary-400 text-xs transition-colors">
                  Terms of Service
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/sitemap" className="text-gray-500 hover:text-primary-400 text-xs transition-colors">
                  Sitemap
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}