import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const Fotter = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      transition="transition"
      viewport={{ once: true }}
      className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'
    >
      <motion.div {...fadeUp} className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
        <motion.div {...fadeUp}>
          <img src={assets.logo} alt="logo" className='h-8 md:h-9' />
          <p className='max-w-80 mt-3'>
            Drive luxury, earn effortlessly – list your car and let us handle the rest.
          </p>
          <div className='flex items-center gap-3 mt-6'>
            <a href="#"><img src={assets.facebook_logo} className='w-5 h-5' alt="facebook" /></a>
            <a href="#"><img src={assets.instagram_logo} className='w-5 h-5' alt="instagram" /></a>
            <a href="#"><img src={assets.twitter_logo} className='w-5 h-5' alt="twitter" /></a>
            <a href="#"><img src={assets.gmail_logo} className='w-5 h-5' alt="gmail" /></a>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Browse Car</a></li>
            <li><a href="#">List Your Car</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Insurance</a></li>
          </ul>
        </motion.div>

        <motion.div {...fadeUp}>
          <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
          <ul className='mt-3 flex flex-col gap-1.5'>
            <li>1234 Luxury Drive</li>
            <li>Kanpur, India</li>
            <li>+91 89786935</li>
            <li>vishal@gmail.com</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div {...fadeUp} className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className='flex items-center gap-4'>
          <li><a href="#">Privacy</a></li>
          <li>|</li>
          <li><a href="#">Terms</a></li>
          <li>|</li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default Fotter
