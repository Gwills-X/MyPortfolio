import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='max-w-7xl mx-auto px-6 py-20'>
      {/* Heading */}
      <h2 className='text-4xl font-bold mb-6 text-center'>Contact Me</h2>
      <p className='text-center text-gray-600 dark:text-gray-400 mb-12'>
        Have a project in mind or just want to say hi? I’d love to hear from
        you!
      </p>

      <div className='grid md:grid-cols-2 gap-12'>
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-6 bg-transparent border dark:bg-gray-800 p-8 rounded-2xl shadow-lg'>
          <div>
            <label className='block mb-2 font-semibold'>Name</label>
            <input
              type='text'
              placeholder='Your Name'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all'
            />
          </div>

          <div>
            <label className='block mb-2 font-semibold'>Email</label>
            <input
              type='email'
              placeholder='you@example.com'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all'
            />
          </div>

          <div>
            <label className='block mb-2 font-semibold'>Message</label>
            <textarea
              rows='5'
              placeholder='Your message...'
              className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none'></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors w-full'>
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='space-y-6'>
          <div className='flex items-center gap-4'>
            <FaMapMarkerAlt className='text-blue-600 text-xl' />
            <p>Bauchi, Nigeria</p>
          </div>
          <div className='flex items-center gap-4'>
            <FaPhoneAlt className='text-blue-600 text-xl' />
            <p>+234 801 234 5678</p>
          </div>
          <div className='flex items-center gap-4'>
            <FaEnvelope className='text-blue-600 text-xl' />
            <p>hello@gwtecksolutions.com</p>
          </div>

          <p className='mt-6 text-gray-600 dark:text-gray-400'>
            Feel free to reach out for collaborations, freelance work, or just a
            friendly chat. I’m always open to exciting web development projects!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
