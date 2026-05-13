import Container from "../components/layout/Container";
import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Code2, Sparkles, Globe, Cpu, Zap } from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

/* ================= VIDEO CARD COMPONENT ================= */
function VideoProjectCard({ project }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='group relative bg-[#0f0f0f] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-[var(--color-accent)]/50'>
      <div className='relative h-64 overflow-hidden'>
        <video
          ref={videoRef}
          src={project.video}
          muted
          loop
          playsInline
          autoPlay={isHovered}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"}`}>
          <div className='bg-white/10 backdrop-blur-md p-4 rounded-full'>
            <Zap className='text-white' fill='white' size={24} />
          </div>
        </div>
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors'>
          {project.title}
        </h3>
        <p className='text-sm text-[var(--color-muted)] mt-2 line-clamp-2'>
          {project.description}
        </p>
        <div className='mt-4 flex items-center text-[var(--color-accent)] font-semibold text-sm'>
          View Case Study{" "}
          <ArrowRight
            size={16}
            className='ml-2 group-hover:translate-x-2 transition-transform'
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ================= MAIN HOME PAGE ================= */
export default function Home() {
  return (
    <Container>
      {/* --- HERO SECTION --- */}
      <section className='relative pt-20 pb-32 flex flex-col md:flex-row items-center gap-12'>
        <motion.div
          className='flex-1 text-center md:text-left z-10'
          initial='hidden'
          animate='visible'
          variants={fadeInUp}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-6'>
            <Sparkles size={14} /> Available for new projects
          </motion.div>

          <h1 className='text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter'>
            DIGITAL <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-400'>
              ARCHITECT.
            </span>
          </h1>

          <p className='text-lg md:text-xl text-[var(--color-muted)] max-w-xl leading-relaxed mb-10'>
            Founder of{" "}
            <span className='text-white font-semibold'>GWTeck Solutions</span>.
            I engineer high-performance web applications with
            <span className='text-white'> React, PHP, and Laravel</span>.
          </p>

          <div className='flex flex-wrap gap-5 justify-center md:justify-start'>
            <Link
              to='/projects'
              className='bg-[var(--color-accent)] px-8 py-4 rounded-full text-white font-bold shadow-[0_10px_20px_rgba(99,102,241,0.3)] hover:scale-105 transition-all'>
              Explore Work
            </Link>
            <Link
              to='/contact'
              className='bg-white/5 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full text-white font-bold hover:bg-white/10 transition-all'>
              Let's Talk
            </Link>
          </div>
        </motion.div>

        {/* Hero Image / Profile Space */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='relative w-72 h-72 md:w-[450px] md:h-[450px]'>
          <div className='absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)] to-purple-500 rounded-full blur-[80px] opacity-20 animate-pulse' />
          <div className='relative w-full h-full rounded-3xl border border-white/10 overflow-hidden bg-gray-900 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500'>
            <img
              src='/myPicture.png'
              alt='Godswill Eguavoen'
              className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700'
            />
          </div>
        </motion.div>
      </section>

      {/* --- SERVICES / OFFERINGS --- */}
      <motion.section
        className='py-24'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={staggerContainer}>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>What I Bring to the Table</h2>
          <div className='h-1.5 w-20 bg-[var(--color-accent)] mx-auto rounded-full' />
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <ServiceCard
            icon={<Globe />}
            title='Web Development'
            desc='Scalable apps built with the TALL or MERN stack.'
          />
          <ServiceCard
            icon={<Cpu />}
            title='Backend Systems'
            desc='Secure API architecture and database optimization.'
          />
          <ServiceCard
            icon={<Code2 />}
            title='UI/UX Motion'
            desc='Interactive interfaces that keep users engaged.'
          />
        </div>
      </motion.section>

      {/* --- FEATURED PROJECTS --- */}
      <section className='py-24'>
        <div className='flex justify-between items-end mb-12'>
          <div>
            <h2 className='text-4xl font-bold'>Selected Works</h2>
            <p className='text-[var(--color-muted)] mt-2'>
              A glimpse into my recent code commits.
            </p>
          </div>
          <Link
            to='/projects'
            className='hidden md:flex items-center gap-2 text-[var(--color-accent)] font-bold group'>
            View Gallery{" "}
            <ArrowRight
              size={18}
              className='group-hover:translate-x-2 transition-transform'
            />
          </Link>
        </div>

        <motion.div
          className='grid md:grid-cols-2 gap-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={staggerContainer}>
          {projects.slice(0, 4).map((project) => (
            <VideoProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </section>

      {/* --- CATCHY CTA --- */}
      <motion.section
        className='py-20 mb-20 relative rounded-[3rem] overflow-hidden text-center bg-[#0a0a0a] border border-white/5'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        <h2 className='text-4xl md:text-6xl font-bold mb-8 px-6'>
          Have a vision for a <br />{" "}
          <span className='text-[var(--color-accent)]'>game-changing</span> app?
        </h2>
        <Link
          to='/contact'
          className='inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black text-lg hover:scale-110 transition-transform'>
          Let's Build It <Zap size={20} fill='black' />
        </Link>
      </motion.section>
    </Container>
  );
}

/* --- HELPER COMPONENT --- */
function ServiceCard({ icon, title, desc }) {
  return (
    <motion.div
      variants={fadeInUp}
      className='p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/10 transition-all group'>
      <div className='w-14 h-14 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] mb-6 group-hover:scale-110 transition-transform'>
        {React.cloneElement(icon, { size: 30 })}
      </div>
      <h3 className='text-xl font-bold mb-3'>{title}</h3>
      <p className='text-[var(--color-muted)] leading-relaxed'>{desc}</p>
    </motion.div>
  );
}
