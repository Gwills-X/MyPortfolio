import Container from "../components/layout/Container";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ================= ANIMATIONS ================= */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

/* ================= VIDEO CARD ================= */
let activeVideo = null;

function VideoProjectCard({ project }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    if (activeVideo && activeVideo !== videoRef.current) {
      activeVideo.pause();
    }

    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      activeVideo = videoRef.current;
    }

    setPlaying(!playing);
  };

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const stop = () => setPlaying(false);
    vid.addEventListener("ended", stop);

    return () => vid.removeEventListener("ended", stop);
  }, []);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className='bg-gray-900 rounded-xl overflow-hidden shadow-lg group'>
      {/* VIDEO */}
      <div className='relative'>
        <video
          ref={videoRef}
          src={project.video}
          className='w-full h-[240px] object-cover'
        />

        {/* overlay */}
        <div
          onClick={handlePlay}
          className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition cursor-pointer'>
          <div className='bg-white/90 p-4 rounded-full text-xl shadow-lg'>
            {playing ? "⏸" : "▶"}
          </div>
        </div>
      </div>

      {/* TEXT */}
      <div className='p-4'>
        <h3 className='text-lg font-semibold'>{project.title}</h3>
        <p className='text-sm text-[var(--color-muted)] mt-1'>{project.desc}</p>
      </div>
    </motion.div>
  );
}

/* ================= MAIN PAGE ================= */
export default function Home() {
  return (
    <Container>
      {/* HERO */}
      <motion.section
        className='py-24 text-center md:text-left'
        initial='hidden'
        animate='visible'
        variants={fadeInUp}>
        <h1 className='text-5xl md:text-6xl font-bold leading-tight mb-6'>
          I build modern web apps <br />
          <span className='text-[var(--color-accent)]'>React & PHP</span>
        </h1>

        <p className='text-[var(--color-muted)] max-w-xl mx-auto md:mx-0 mb-8'>
          Fullstack developer and founder of{" "}
          <span className='font-semibold'>GWTeck Solutions</span>, creating
          scalable and user-friendly applications.
        </p>

        <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
          <Link
            to='/projects'
            className='bg-[var(--color-accent)] px-6 py-3 rounded-lg text-white font-medium hover:scale-105 transition'>
            View Projects
          </Link>

          <Link
            to='/contact'
            className='border border-white/10 px-6 py-3 rounded-lg hover:bg-white/5 transition font-medium'>
            Contact Me
          </Link>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        className='py-24 bg-gray-900 rounded-xl px-6 md:px-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeInUp}>
        <h2 className='text-3xl font-semibold mb-6'>About Me</h2>
        <p className='text-[var(--color-muted)] mb-4'>
          Hi, I’m Godswill, a passionate Fullstack Developer specializing in
          React, PHP, Laravel, and modern web technologies.
        </p>
        <p className='text-[var(--color-muted)]'>
          I build scalable, high-performing applications with clean UI/UX.
        </p>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        className='py-24 px-6 md:px-12'
        initial='hidden'
        whileInView='visible'
        variants={stagger}>
        <h2 className='text-3xl font-semibold mb-6'>What I Offer</h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {[
            "Web Development",
            "UI/UX Design",
            "E-Commerce",
            "API Integration",
            "Consultation",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className='bg-gray-900 p-6 rounded-lg hover:scale-105 transition'>
              <h3 className='font-semibold'>{item}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FEATURED PROJECTS */}
      <motion.section
        className='py-24 px-6 md:px-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}>
        <div className='flex justify-between items-center mb-10'>
          <motion.h2 className='text-3xl font-semibold'>
            Featured Projects
          </motion.h2>
          <Link
            to='/projects'
            className='text-sm text-[var(--color-muted)] hover:text-white'>
            View all →
          </Link>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {projects.slice(0, 3).map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className='bg-gray-800 rounded-xl overflow-hidden shadow-lg'>
              {/* Video */}
              <video
                src={project.video}
                controls
                className='w-full h-[250px] object-cover'
              />

              {/* Project Info */}
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mb-2'>
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className='bg-[var(--color-accent)] text-white px-2 py-1 rounded-full text-xs'>
                      {tech}
                    </span>
                  ))}
                </div>

                <p className='text-[var(--color-muted)]'>
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className='py-24 bg-[var(--color-accent)] text-white text-center rounded-xl px-6'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}>
        <h2 className='text-3xl font-semibold mb-4'>
          Ready to Start Your Project?
        </h2>

        <Link
          to='/contact'
          className='bg-white text-[var(--color-accent)] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition'>
          Contact Me
        </Link>
      </motion.section>
    </Container>
  );
}
