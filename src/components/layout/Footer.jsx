import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Corrected imports for React Icons
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Zap } from "lucide-react"; // Keeping Zap for the button, or swap to FaBolt

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className='relative mt-32 border-t border-white/5 bg-[#050505]'>
      {/* --- TOP CTA BRIDGE --- */}
      <div className='max-w-7xl mx-auto px-6 -mt-16'>
        <div className='bg-gradient-to-r from-[var(--color-accent)] to-purple-600 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8'>
          <div>
            <h3 className='text-3xl font-black text-white tracking-tighter uppercase'>
              Let's build the future.
            </h3>
            <p className='text-white/80 mt-2 font-medium'>
              Start your journey with GWTeck Solutions today.
            </p>
          </div>
          <Link
            to='/contact'
            className='bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform'>
            Start a Project <Zap size={18} fill='black' />
          </Link>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12'>
        {/* Brand Identity */}
        <div className='md:col-span-2'>
          <Link
            to='/'
            className='text-2xl font-black tracking-tighter text-white mb-6 block'>
            GW<span className='text-[var(--color-accent)]'>TECK.</span>
          </Link>
          <p className='text-gray-400 max-w-sm leading-relaxed mb-8'>
            Architecting high-performance digital experiences. From complex
            backend logic to pixel-perfect interfaces, we bring your vision to
            life.
          </p>

          {/* Fixed Social Buttons */}
          <div className='flex gap-3'>
            <SocialButton
              href='https://github.com/gwtecksolutions'
              icon={<FaGithub size={20} />}
            />
            <SocialButton
              href='https://linkedin.com/company/gwtecksolutions'
              icon={<FaLinkedin size={20} />}
            />
            <SocialButton
              href='https://twitter.com/gwtecksolutions'
              icon={<FaTwitter size={20} />}
            />
            <SocialButton
              href='mailto:contact@gwtecksolutions.com'
              icon={<FaEnvelope size={18} />}
            />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className='text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50'>
            Navigation
          </h4>
          <ul className='space-y-4'>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to='/projects'>Projects</FooterLink>
            <FooterLink to='/about'>About</FooterLink>
            <FooterLink to='/contact'>Contact</FooterLink>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className='text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em] opacity-50'>
            Office
          </h4>
          <p className='text-gray-400 text-sm mb-4 leading-loose'>
            Bauchi State, <br />
            Nigeria, West Africa
          </p>
          <p className='text-xs text-gray-500 font-mono'>
            Available for Global Remote Work
          </p>
        </div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className='border-t border-white/5 py-10 text-center'>
        <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6'>
          <p className='text-gray-500 text-[10px] tracking-[0.1em] uppercase'>
            &copy; {currentYear} GWTECK SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <p className='text-gray-500 text-[10px] font-mono tracking-tighter'>
            BUILT BY <span className='text-white'>GODSWILL EGUAVOEN</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

/* --- HELPER COMPONENTS --- */

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className='text-gray-400 hover:text-[var(--color-accent)] transition-all duration-300 flex items-center group text-sm'>
      <span className='w-0 group-hover:w-4 h-px bg-[var(--color-accent)] mr-0 group-hover:mr-2 transition-all'></span>
      {children}
    </Link>
  </li>
);

const SocialButton = ({ href, icon }) => (
  <motion.a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    whileHover={{
      y: -5,
      backgroundColor: "var(--color-accent)",
      color: "#fff",
    }}
    className='w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300'>
    {icon}
  </motion.a>
);

export default Footer;
