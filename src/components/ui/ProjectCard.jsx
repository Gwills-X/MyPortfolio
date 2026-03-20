import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}>
      <Link to={`/projects/${project.id}`}>
        <div className='group border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition duration-300'>
          <div className='h-52 bg-white/5 overflow-hidden'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
            />
          </div>

          <div className='p-5'>
            <h3 className='text-lg font-semibold mb-2'>{project.title}</h3>

            <p className='text-sm text-[var(--color-muted)] mb-4'>
              {project.description}
            </p>

            <div className='flex flex-wrap gap-2'>
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className='text-xs px-2 py-1 border border-white/10 rounded-md text-[var(--color-muted)]'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
