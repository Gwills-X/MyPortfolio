import Container from "../components/layout/Container";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Container>
      {/* About Me Section */}
      <section className='py-24 max-w-4xl mx-auto'>
        <motion.h1
          className='text-4xl font-bold mb-8'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}>
          About Me
        </motion.h1>

        <div className='space-y-6 text-[var(--color-muted)] leading-relaxed'>
          <p>
            I’m <strong>Godswill Eguavoen</strong>, a passionate fullstack web
            developer and founder of <strong>GWTeck Solutions</strong>. I
            specialize in building modern, scalable, and interactive web
            applications using <strong>React, PHP, Laravel</strong>, and other
            cutting-edge technologies.
          </p>

          <p>
            My journey into web development started with a curiosity for how
            websites work. Over the years, I’ve honed my skills through hands-on
            projects, internships, and real-world applications. I am always
            learning and adapting to stay ahead in this fast-evolving field.
          </p>

          <p>
            I thrive on solving complex problems and transforming ideas into
            functional, user-friendly digital experiences. From small personal
            projects to full-fledged web platforms, I aim to deliver solutions
            that are clean, efficient, and impactful.
          </p>
        </div>
      </section>

      {/* Brand Section */}
      <section className='py-24  bg-transparent border shadow-2xl dark:bg-gray-800 px-6 rounded-xl max-w-4xl mx-auto'>
        <motion.h2
          className='text-3xl font-bold mb-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          About GWTeck Solutions
        </motion.h2>

        <div className='space-y-4 text-[var(--color-muted)]'>
          <p>
            <strong>GWTeck Solutions</strong> is my web development brand
            focused on creating modern websites, web apps, and digital solutions
            that help businesses and individuals establish their online presence
            effectively.
          </p>

          <p>We specialize in building:</p>

          <ul className='list-disc list-inside space-y-2'>
            <li>Corporate websites and portfolios</li>
            <li>E-commerce platforms</li>
            <li>Job and project management platforms</li>
            <li>Custom web applications tailored to client needs</li>
            <li>Interactive user interfaces with focus on UX/UI</li>
          </ul>

          <p>
            Our mission is to combine clean code, modern design, and
            performance-driven development to deliver solutions that stand out.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className='py-18 my-6  bg-transparent border shadow-2xl dark:bg-gray-800 px-6 rounded-xl max-w-4xl mx-auto '>
        <motion.h2
          className='text-3xl font-bold mb-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          Skills & Expertise
        </motion.h2>

        <div className='grid sm:grid-cols-2 gap-6 text-[var(--color-muted)]'>
          <div>
            <h3 className='font-semibold mb-2'>Frontend</h3>
            <p>
              React, JavaScript, TailwindCSS, HTML5, CSS3, Responsive Design
            </p>
          </div>
          <div>
            <h3 className='font-semibold mb-2'>Backend</h3>
            <p>PHP, Laravel, Node.js, MySQL, REST APIs</p>
          </div>
          <div>
            <h3 className='font-semibold mb-2'>Tools & DevOps</h3>
            <p>Git, GitHub, Vite, NPM, Deployment, CI/CD</p>
          </div>
          <div>
            <h3 className='font-semibold mb-2'>Soft Skills</h3>
            <p>
              Problem Solving, Communication, Project Management, Team
              Collaboration
            </p>
          </div>
        </div>
      </section>

      {/* Experience / Journey Section */}
      <section className='py-24 bg-transparent border shadow-2xl dark:bg-gray-800 px-6 rounded-xl max-w-4xl mx-auto'>
        <motion.h2
          className='text-3xl font-bold mb-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          My Journey
        </motion.h2>

        <div className='space-y-4 text-[var(--color-muted)]'>
          <p>
            My professional journey started with frontend development and
            quickly expanded into fullstack engineering through internships and
            freelance projects. I’ve worked with clients to build functional,
            scalable, and interactive web solutions for diverse industries.
          </p>
          <p>Notable experiences include:</p>
          <ul className='list-disc list-inside space-y-2'>
            <li>Internship at SmartTeck Consult – Fullstack Development</li>
            <li>
              Developed job platforms, management systems, and personal projects
            </li>
            <li>
              Founded GWTeck Solutions – delivering professional web solutions
              for clients
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
}
