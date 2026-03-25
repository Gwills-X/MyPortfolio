import Container from "../components/layout/Container";
import ProjectCard from "../components/ui/ProjectCard";
import projects from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Container>
      {/* Hero / Intro */}
      <section className='py-24 max-w-4xl mx-auto text-center'>
        <motion.h1
          className='text-4xl md:text-5xl font-bold mb-6'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}>
          Our Projects
        </motion.h1>

        <motion.p
          className='text-[var(--color-muted)] text-lg md:text-xl mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
          At <strong>GWTeck Solutions</strong>, we bring ideas to life by
          building modern, interactive, and scalable web applications. Each
          project reflects our focus on performance, design, and user
          experience.
        </motion.p>

        <motion.p
          className='text-[var(--color-muted)] max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}>
          From corporate websites and portfolios to e-commerce platforms and
          management systems, our projects showcase the versatility and
          expertise of our team. We take pride in delivering clean code,
          beautiful design, and solutions that scale.
        </motion.p>
      </section>

      {/* Projects Grid */}
      <motion.section
        className='py-20'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}>
        <div className='flex justify-between items-center mb-10'>
          <motion.h2 className='text-3xl font-semibold'>
            Featured Projects
          </motion.h2>
        </div>

        <motion.div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className='bg-gray-900 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition'
              onClick={() => (window.location.href = `/projects/${project.id}`)} // navigate to project details
            >
              {/* Video Preview */}
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className='w-full h-60 object-cover'
                  poster={project.image || ""}
                />
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-60 object-cover'
                />
              )}

              {/* Project Info */}
              <div className='p-4'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className='text-sm bg-blue-600 text-white px-2 py-1 rounded-full'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* About Our Work Section */}
      <section className='py-24 bg-transparent border shadow-2xl dark:bg-gray-800 px-6 rounded-xl max-w-4xl mx-auto'>
        <motion.h2
          className='text-3xl font-bold mb-6 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          Why Choose GWTeck Solutions
        </motion.h2>

        <div className='space-y-4 text-[var(--color-muted)] text-center'>
          <p>
            Every project we build at <strong>GWTeck Solutions</strong> is
            designed with your business goals in mind. We don’t just write
            code—we create solutions that engage users, simplify processes, and
            grow your brand online.
          </p>

          <p>Our team focuses on:</p>

          <ul className='  space-y-6 flex flex-col justify-center items-center  w-full text-start [&_li]:border [&_li]:p-3 [&_li]:rounded-[5px]  [&_li]:w-full  '>
            <li>Modern, clean design with responsive layouts</li>
            <li>Interactive and user-friendly experiences</li>
            <li>Optimized performance and scalability</li>
            <li>Custom solutions tailored to each client</li>
            <li>Seamless integration with existing systems</li>
          </ul>

          <p>
            We combine creativity, technical expertise, and attention to detail
            to deliver projects that stand out in today’s digital landscape.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className='py-16 text-center'>
        <motion.h3
          className='text-2xl md:text-3xl font-semibold mb-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}>
          Want to Collaborate or See More?
        </motion.h3>

        <motion.p
          className='text-[var(--color-muted)] mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
          Reach out and let’s create something amazing together.
        </motion.p>

        <motion.div
          className='flex justify-center gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}>
          <a
            href='/contact'
            className='bg-[var(--color-accent)] px-6 py-3 rounded-lg text-white hover:scale-105 transition-transform'>
            Contact Us
          </a>
          <a
            href='/about'
            className='border border-[var(--color-accent)] px-6 py-3 rounded-lg text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition'>
            Learn More
          </a>
        </motion.div>
      </section>
    </Container>
  );
}
