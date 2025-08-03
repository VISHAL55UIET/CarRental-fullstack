import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className='text-white'
      >
        <h2 className='text-3xl font-medium'>Do You Own A Luxury Car?</h2>
        <p className='mt-2'>
          Monetize your vehicle effortlessly by listing it on CarRental.
        </p>
        <p className='max-w-130'>
          We take care of insurance, driver verification, and secure payments —
          so you can earn passive income, stress-free.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer'
        >
          List Your Car
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.img
        src={assets.banner_car_image}
        alt="car"
        initial={{ opacity: 0, x:50}}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className='max-h-45 mt-10'
      />
    </motion.div>
  );
};

export default Banner;
