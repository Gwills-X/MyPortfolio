import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // A sleeker menu icon
import logo from "../../assets/Gemini_Generated_Image_s80ehts80ehts80e-removebg-preview.png";

/* ================= ANIMATION VARIANTS ================= */
const sidebarVariants = {
  closed: {
    x: "100%",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  opened: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const linkVariants = {
  closed: { x: 50, opacity: 0 },
  opened: { x: 0, opacity: 1 },
};

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}>
        <Container>
          <div
            className={`relative flex justify-between items-center px-6 py-3 transition-all duration-500 rounded-full ${
              scrolled
                ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                : "bg-transparent"
            }`}>
            {/* Brand / Logo */}
            <Link to='/' className='relative z-10 group'>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={logo}
                alt='GWTeck Solutions'
                className={`transition-all duration-500 ${scrolled ? "w-32" : "w-40"}`}
              />
            </Link>

            {/* Desktop Links (Magnetic Feel) */}
            <div className='hidden md:flex items-center gap-1'>
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className='relative px-5 py-2 group'>
                    <span
                      className={`relative z-10 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-gray-400 group-hover:text-white"
                      }`}>
                      {link.name}
                    </span>

                    {/* Active Indicator (The "Blob") */}
                    {isActive && (
                      <motion.div
                        layoutId='nav-active'
                        className='absolute inset-0 bg-[var(--color-accent)] rounded-full -z-0'
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover Indicator */}
                    {!isActive && (
                      <div className='absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    )}
                  </Link>
                );
              })}

              <Link
                to='/contact'
                className='ml-4 bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-[var(--color-accent)] hover:text-white transition-all'>
                Hire Us
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className='md:hidden'>
              <button
                onClick={() => setMobileOpen(true)}
                className='w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-white text-2xl hover:bg-white/10 transition-all'>
                <HiOutlineMenuAlt3 />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* --- ELITE MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark Blur Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/40 backdrop-blur-md z-[60]'
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              variants={sidebarVariants}
              initial='closed'
              animate='opened'
              exit='closed'
              className='fixed top-0 right-0 h-full w-full max-w-[400px] z-[70] bg-[#0a0a0a] border-l border-white/5 shadow-2xl p-10 flex flex-col'>
              <div className='flex justify-between items-center mb-16'>
                <span className='text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase'>
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className='w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white text-xl'>
                  <FaTimes />
                </button>
              </div>

              <div className='flex flex-col gap-8'>
                {links.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div key={index} variants={linkVariants}>
                      <Link
                        to={link.path}
                        onClick={() => setMobileOpen(false)}
                        className='group flex items-end gap-4'>
                        <span className='text-gray-600 font-mono text-sm group-hover:text-[var(--color-accent)] transition-colors'>
                          0{index + 1}
                        </span>
                        <span
                          className={`text-5xl font-black tracking-tighter transition-all ${
                            isActive
                              ? "text-[var(--color-accent)]"
                              : "text-white group-hover:pl-4 group-hover:text-[var(--color-accent)]"
                          }`}>
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Sidebar Footer */}
              <div className='mt-auto pt-10 border-t border-white/5'>
                <p className='text-xs text-gray-500 uppercase tracking-widest mb-4'>
                  Social Systems
                </p>
                <div className='flex gap-6 text-white font-bold text-sm'>
                  <a
                    href='#'
                    className='hover:text-[var(--color-accent)] transition-colors'>
                    GitHub
                  </a>
                  <a
                    href='#'
                    className='hover:text-[var(--color-accent)] transition-colors'>
                    LinkedIn
                  </a>
                  <a
                    href='#'
                    className='hover:text-[var(--color-accent)] transition-colors'>
                    Twitter
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
