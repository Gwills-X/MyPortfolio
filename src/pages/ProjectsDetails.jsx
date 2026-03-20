import { useParams } from "react-router-dom";
import projects from "../data/projects";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className='p-10'>Project not found</p>;

  return (
    <Container>
      <section className='py-24 max-w-4xl'>
        {/* TITLE */}
        <motion.h1
          className='text-4xl md:text-5xl font-bold mb-6'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}>
          {project.title}
        </motion.h1>

        {/* DESCRIPTION */}
        <p className='text-[var(--color-muted)] mb-10 text-lg'>
          {project.description}
        </p>

        {/* IMAGE */}
        <div className='h-[400px] bg-white/5 rounded-xl overflow-hidden mb-12'>
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover'
          />
        </div>

        {/* SECTIONS */}
        <div className='space-y-12'>
          {/* OVERVIEW */}
          <Section title='Overview' content={project.overview} />

          {/* PROBLEM */}
          <Section title='Problem' content={project.problem} />

          {/* SOLUTION */}
          <Section title='Solution' content={project.solution} />

          {/* FEATURES */}
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Key Features</h2>
            <ul className='space-y-2 text-[var(--color-muted)]'>
              {project.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>

          {/* TECH STACK */}
          <div>
            <h2 className='text-2xl font-semibold mb-4'>Tech Stack</h2>
            <div className='flex flex-wrap gap-3'>
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className='px-3 py-1 border border-white/10 rounded-md text-sm text-[var(--color-muted)]'>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div className='flex gap-4 pt-6'>
            <a
              href={project.live}
              className='bg-[var(--color-accent)] px-6 py-3 rounded-lg text-white hover:opacity-90 transition'>
              Live Site
            </a>

            <a
              href={project.github}
              className='border border-white/10 px-6 py-3 rounded-lg hover:bg-white/5 transition'>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}

/* REUSABLE SECTION */
function Section({ title, content }) {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-3'>{title}</h2>
      <p className='text-[var(--color-muted)] leading-relaxed'>{content}</p>
    </div>
  );
}
