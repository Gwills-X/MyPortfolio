"use client";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import { ArrowLeft, Globe, Cpu, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project)
    return (
      <div className='h-screen flex items-center justify-center text-white bg-[#050505]'>
        <p className='p-10 border border-white/10 rounded-2xl bg-white/5'>
          Project not found
        </p>
      </div>
    );

  return (
    <div className='bg-[#050505] min-h-screen text-white pb-32'>
      {/* 1. CINEMATIC HERO SECTION */}
      <section className='relative h-[60vh] md:h-[70vh] w-full overflow-hidden'>
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className='absolute inset-0'>
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover opacity-50'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent' />
        </motion.div>

        <Container className='relative h-full flex flex-col justify-end pb-12 z-10'>
          <Link
            to='/projects'
            className='flex items-center gap-2 text-sm text-gray-400 hover:text-indigo-400 transition-colors mb-8 w-fit'>
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <motion.h1
            className='text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase'
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}>
            {project.title}
          </motion.h1>

          <motion.p
            className='max-w-2xl text-xl text-gray-300 leading-relaxed font-light'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}>
            {project.description}
          </motion.p>
        </Container>
      </section>

      {/* 2. PROJECT CONTENT GRID */}
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16'>
          {/* Main Narrative (Left) */}
          <div className='lg:col-span-2 space-y-20'>
            <div className='grid md:grid-cols-2 gap-12'>
              <Section title='The Problem' content={project.problem} />
              <Section title='The Solution' content={project.solution} />
            </div>

            <div className='p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5'>
              <Section title='Overview' content={project.overview} isLarge />
            </div>

            {/* Key Features Bento */}
            <div>
              <h2 className='text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3'>
                <CheckCircle2 className='text-indigo-500' /> Key Features
              </h2>
              <div className='grid sm:grid-cols-2 gap-4'>
                {project.features.map((f, i) => (
                  <motion.div
                    key={i}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className='p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-indigo-500/30 transition-colors'>
                    <p className='text-gray-400 text-sm leading-relaxed'>
                      <span className='text-indigo-500 font-bold mr-2'>/</span>{" "}
                      {f}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (Right) */}
          <aside className='space-y-8'>
            <div className='sticky top-32 space-y-6'>
              {/* Tech Card */}
              <div className='p-8 rounded-[2rem] bg-[#111] border border-white/10'>
                <h3 className='text-xs font-black uppercase tracking-widest text-indigo-500 mb-6 flex items-center gap-2'>
                  <Cpu size={14} /> Technology Stack
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-300'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex flex-col gap-3 mt-10'>
                  <a
                    href={project.live}
                    className='flex items-center justify-center gap-3 w-full bg-indigo-600 px-6 py-4 rounded-xl text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all shadow-lg shadow-indigo-600/20'>
                    Live Preview <Globe size={14} />
                  </a>

                  <a
                    href={project.github}
                    className='flex items-center justify-center gap-3 w-full border border-white/10 px-6 py-4 rounded-xl text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all'>
                    Github Source <FaGithub size={14} />
                  </a>
                </div>
              </div>

              {/* Status Card */}
              <div className='p-8 rounded-[2rem] border border-white/5 bg-white/[0.01]'>
                <p className='text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-2'>
                  Project Status
                </p>
                <p className='text-sm font-bold text-white uppercase tracking-tighter'>
                  Completed & Deployed
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}

/* REUSABLE SECTION COMPONENT */
function Section({ title, content, isLarge = false }) {
  return (
    <div className='space-y-4'>
      <h2
        className={`font-black uppercase tracking-tighter ${isLarge ? "text-3xl" : "text-xl text-indigo-400"}`}>
        {title}
      </h2>
      <p
        className={`text-gray-400 leading-relaxed ${isLarge ? "text-lg font-light" : "text-sm font-medium"}`}>
        {content}
      </p>
    </div>
  );
}
