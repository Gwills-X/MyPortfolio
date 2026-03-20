import Container from "../components/layout/Container";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <Container>
      {/* HERO */}
      <motion.section
        className='py-24 text-center md:text-left'
        initial='hidden'
        animate='visible'
        variants={fadeInUp}>
        <motion.h1 className='text-5xl md:text-6xl font-bold leading-tight mb-6'>
          I build modern web apps <br />
          <span className='text-[var(--color-accent)]'>React & PHP</span>
        </motion.h1>

        <motion.p className='text-[var(--color-muted)] max-w-xl mx-auto md:mx-0 mb-8'>
          Fullstack developer and founder of{" "}
          <span className='font-semibold'>GWTeck Solutions</span>, creating
          scalable, clean, and user-friendly web applications for businesses and
          individuals.
        </motion.p>

        <motion.div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start'>
          <Link
            to='/projects'
            className='bg-[var(--color-accent)] px-6 py-3 rounded-lg text-white font-medium hover:scale-105 transition-transform'>
            View Projects
          </Link>

          <Link
            to='/contact'
            className='border border-white/10 px-6 py-3 rounded-lg hover:bg-white/5 transition-transform font-medium'>
            Contact Me
          </Link>
        </motion.div>
      </motion.section>

      {/* ABOUT ME */}
      <motion.section
        className='py-24 bg-gray-900 rounded-xl px-6 md:px-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}>
        <motion.h2 className='text-3xl font-semibold mb-6'>About Me</motion.h2>
        <motion.p className='text-[var(--color-muted)] mb-4'>
          Hi, I’m Godswill, a passionate Fullstack Developer with hands-on
          experience in building dynamic web applications. I specialize in
          React, PHP, Laravel, Tailwind CSS, and modern web technologies.
        </motion.p>
        <motion.p className='text-[var(--color-muted)]'>
          During my industrial training at SmartTeck Consult and Dev Solutions,
          I contributed to real-world projects involving fullstack development,
          including responsive web designs, backend APIs, and complex
          interactive applications. My mission is to deliver elegant,
          high-performing solutions that bring ideas to life on the web.
        </motion.p>
      </motion.section>

      {/* BRAND */}
      <motion.section
        className='py-24 px-6 md:px-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}>
        <motion.h2 className='text-3xl font-semibold mb-6'>
          About{" "}
          <span className='text-[var(--color-accent)]'>GWTeck Solutions</span>
        </motion.h2>
        <motion.p className='text-[var(--color-muted)] mb-4'>
          <span className='font-semibold'>GWTeck Solutions</span> helps
          businesses and individuals build modern, responsive, and interactive
          web experiences.
        </motion.p>
        <motion.p className='text-[var(--color-muted)] mb-4'>
          From corporate websites to web apps, our focus is clean code,
          scalability, and user-centric designs that elevate brands.
        </motion.p>
        <motion.p className='text-[var(--color-muted)]'>
          Combining frontend and backend expertise, we deliver polished web
          solutions optimized for performance, responsiveness, and modern UX
          standards.
        </motion.p>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        className='py-24 bg-gray-900 rounded-xl px-6 md:px-12'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}>
        <motion.h2 className='text-3xl font-semibold mb-6'>
          What I Offer
        </motion.h2>
        <motion.div className='grid md:grid-cols-3 gap-8'>
          {[
            {
              title: "Web Development",
              desc: "Fullstack apps with React, PHP, and Laravel",
            },
            {
              title: "UI/UX Design",
              desc: "Modern interfaces enhancing user engagement",
            },
            {
              title: "E-Commerce Solutions",
              desc: "Responsive online stores with payment integration",
            },
            {
              title: "API Integration",
              desc: "Connect web apps to external services seamlessly",
            },
            {
              title: "Consultation & Freelance",
              desc: "Guidance for businesses and individuals building online presence",
            },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className='bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform cursor-pointer'
              variants={fadeInUp}>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-[var(--color-muted)]'>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* FEATURED PROJECTS */}
      <motion.section
        className='py-24 px-6 md:px-0'
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
              transition={{ type: "spring", stiffness: 300 }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className='py-24 bg-[var(--color-accent)] text-white text-center rounded-xl px-6 md:px-12'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.8 } }}
        viewport={{ once: true }}>
        <h2 className='text-3xl font-semibold mb-4'>
          Ready to Start Your Project?
        </h2>
        <p className='mb-6'>
          Let’s build something amazing together. I’ll help bring your ideas to
          life on the web.
        </p>
        <Link
          to='/contact'
          className='bg-white text-[var(--color-accent)] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform'>
          Contact Me
        </Link>
      </motion.section>
    </Container>
  );
}
