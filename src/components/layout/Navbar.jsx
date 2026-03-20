import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/Gemini_Generated_Image_s80ehts80ehts80e-removebg-preview.png";
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
      {/* Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full z-40 transition-colors duration-500 ${
          scrolled
            ? "bg-black/90 border-b border-white/20 backdrop-blur-md"
            : "bg-black/60"
        }`}>
        <Container>
          <nav className='flex justify-between items-center py-4 md:py-6'>
            {/* Brand / Logo */}
            <Link to='/' className='flex items-center gap-2'>
              <img
                src={logo} // replace with your logo path
                alt='GWTeck Solutions'
                className='w-50'
              />
            </Link>

            {/* Desktop Links */}
            <div className='hidden md:flex gap-8 text-sm'>
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    to={link.path}
                    className={`transition-colors ${
                      location.pathname === link.path
                        ? "text-[var(--color-accent)] font-semibold"
                        : "text-[var(--color-muted)] hover:text-white"
                    }`}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className='md:hidden'>
              <button
                onClick={() => setMobileOpen(true)}
                className='text-white text-2xl'>
                <FaBars />
              </button>
            </div>
          </nav>
        </Container>
      </motion.div>

      {/* Mobile Sidebar + Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='fixed inset-0 bg-black z-40'
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300 }}
              className='fixed top-0 right-0 h-full w-64 z-50 p-6 flex flex-col bg-black/95 backdrop-blur-lg shadow-2xl'>
              <button
                onClick={() => setMobileOpen(false)}
                className='self-end text-white text-2xl mb-8'>
                <FaTimes />
              </button>

              <div className='flex flex-col gap-6'>
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-lg transition-colors ${
                      location.pathname === link.path
                        ? "text-[var(--color-accent)] font-semibold"
                        : "text-gray-300 hover:text-white"
                    }`}>
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
