import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='bg-transparent dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-20'>
      <div className='max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10'>
        {/* About Brand */}
        <div>
          <h3 className='text-xl font-bold mb-4'>GWTeck Solutions</h3>
          <p className='text-gray-600 dark:text-gray-400 mb-2'>
            Founded by Godswill Eguavoen, GWTeck Solutions builds modern,
            responsive, and interactive web applications tailored to businesses
            and individuals.
          </p>
          <p className='text-gray-600 dark:text-gray-400'>
            From corporate websites, e-commerce platforms, to fullstack web
            apps, we deliver clean code, scalable solutions, and engaging user
            experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <a
                href='/'
                className='hover:text-[var(--color-accent)] transition-colors'>
                Home
              </a>
            </li>
            <li>
              <a
                href='/projects'
                className='hover:text-[var(--color-accent)] transition-colors'>
                Projects
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='hover:text-[var(--color-accent)] transition-colors'>
                About
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='hover:text-[var(--color-accent)] transition-colors'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className='text-xl font-bold mb-4'>Get in Touch</h3>
          <p className='flex items-center gap-2 mb-2'>
            <FaEnvelope />
            <a
              href='mailto:contact@gwtecksolutions.com'
              className='hover:text-[var(--color-accent)] transition-colors'>
              contact@gwtecksolutions.com
            </a>
          </p>
          <p className='mb-4'>Follow us on social media:</p>
          <div className='flex gap-4 text-xl'>
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/gwtecksolutions",
                color: "hover:text-gray-900 dark:hover:text-white",
              },
              {
                icon: <FaLinkedin />,
                href: "https://linkedin.com/company/gwtecksolutions",
                color: "hover:text-blue-600",
              },
              {
                icon: <FaTwitter />,
                href: "https://twitter.com/gwtecksolutions",
                color: "hover:text-blue-400",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95, rotate: -5 }}
                className={`transition-colors ${item.color}`}>
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='border-t border-gray-300 dark:border-gray-700 py-6 mt-10 text-center text-gray-600 dark:text-gray-400 text-sm'>
        &copy; 2026 GWTeck Solutions. All rights reserved. Designed & Built with
        ❤️ using React, TailwindCSS & Vite.
        <br />
        Godswill Eguavoen — Founder & Lead Developer
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
