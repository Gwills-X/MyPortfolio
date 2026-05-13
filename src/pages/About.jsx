import Container from "../components/layout/Container";
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Wrench,
  Coffee,
  User,
  Briefcase,
  Award,
} from "lucide-react";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Container>
      {/* --- Section 1: Hero & Profile --- */}
      <section className='py-20 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto'>
        <motion.div
          className='relative w-64 h-64 md:w-80 md:h-80 shrink-0'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}>
          {/* Circular Frame for Profile Picture */}
          <div className='absolute inset-0 rounded-full border-2 border-dashed border-[var(--color-accent)] animate-spin-slow' />
          <div className='absolute inset-2 rounded-full overflow-hidden border-4 border-gray-900 shadow-2xl'>
            <img
              src='/path-to-your-photo.jpg' // REPLACE WITH YOUR IMAGE
              alt='Godswill Eguavoen'
              className='w-full h-full object-cover'
            />
          </div>
          {/* Decorative tag */}
          <div className='absolute -bottom-4 right-0 bg-[var(--color-accent)] text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg'>
            Founder & CEO
          </div>
        </motion.div>

        <motion.div
          className='flex-1 text-center md:text-left'
          variants={fadeIn}
          initial='hidden'
          animate='visible'>
          <h1 className='text-5xl font-extrabold mb-6 tracking-tight'>
            I’m Godswill{" "}
            <span className='text-[var(--color-accent)]'>Eguavoen.</span>
          </h1>
          <p className='text-[var(--color-muted)] text-lg leading-relaxed mb-6'>
            A Fullstack Web Developer and the creative force behind{" "}
            <strong>GWTeck Solutions</strong>. I build digital environments that
            are as functional as they are beautiful. My goal is to turn complex
            technical challenges into seamless user experiences.
          </p>
          <div className='flex flex-wrap justify-center md:justify-start gap-4'>
            <span className='flex items-center gap-2 text-sm bg-gray-900 px-3 py-1 rounded-full border border-gray-800'>
              <User size={14} className='text-[var(--color-accent)]' /> Lagos,
              Nigeria
            </span>
            <span className='flex items-center gap-2 text-sm bg-gray-900 px-3 py-1 rounded-full border border-gray-800'>
              <Coffee size={14} className='text-[var(--color-accent)]' />{" "}
              Fullstack Dev
            </span>
          </div>
        </motion.div>
      </section>

      {/* --- Section 2: Brand Vision --- */}
      <section className='py-16 grid md:grid-cols-2 gap-8 items-center bg-[#0d0d0d] border border-gray-800 p-8 md:p-12 rounded-[2rem] max-w-5xl mx-auto mb-20'>
        <div className='order-2 md:order-1'>
          <motion.h2
            className='text-3xl font-bold mb-6'
            variants={fadeIn}
            initial='hidden'
            whileInView='visible'>
            About GWTeck Solutions
          </motion.h2>
          <p className='text-[var(--color-muted)] leading-relaxed mb-6'>
            GWTeck Solutions is more than a brand—it's a commitment to
            excellence. We focus on creating high-performance digital assets
            that don't just sit on the web, but actually work for your business.
          </p>
          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm'>
            <li className='flex items-center gap-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]' />{" "}
              Corporate Portfolios
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]' />{" "}
              E-commerce Stores
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]' />{" "}
              Custom Web Apps
            </li>
            <li className='flex items-center gap-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]' />{" "}
              UI/UX Optimization
            </li>
          </ul>
        </div>
        <div className='order-1 md:order-2 rounded-xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500'>
          <img
            src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
            alt='Workspace'
            className='w-full h-64 object-cover'
          />
        </div>
      </section>

      {/* --- Section 3: Visual Skills Grid --- */}
      <section className='py-16 max-w-5xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4'>Expertise</h2>
          <div className='h-1 w-20 bg-[var(--color-accent)] mx-auto rounded-full' />
        </div>

        <div className='grid sm:grid-cols-3 gap-8'>
          <SkillCard
            icon={<Code />}
            title='Frontend'
            list='React, Vite, JavaScript, TailwindCSS, Framer Motion'
          />
          <SkillCard
            icon={<Server />}
            title='Backend'
            list='PHP, Laravel, Node.js, MySQL, REST API Architecture'
          />
          <SkillCard
            icon={<Wrench />}
            title='Dev Tools'
            list='Git, GitHub, NPM, CI/CD, Rufus, Windows System Optimization'
          />
        </div>
      </section>

      {/* --- Section 4: Experience Timeline --- */}
      <section className='py-20 bg-gradient-to-b from-transparent to-[#0a0a0a] rounded-3xl max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12 flex items-center gap-3'>
          <Briefcase className='text-[var(--color-accent)]' /> My Journey
        </h2>

        <div className='space-y-12 border-l-2 border-gray-800 ml-4 pl-8'>
          <TimelineItem
            year='2026 - Present'
            title='Founder of GWTeck Solutions'
            desc='Leading fullstack projects and delivering professional digital solutions for diverse clients, specifically focusing on VTU and management platforms.'
          />
          <TimelineItem
            year='2025'
            title='Fullstack Intern @ SmartTeck Consult'
            desc='Developed real-world applications and gained deep expertise in API integration and backend routing using Laravel.'
          />
          <TimelineItem
            year='The Beginning'
            title='The Spark'
            desc='Started with basic HTML/CSS, driven by a deep curiosity for computer architecture and how software interacts with hardware.'
          />
        </div>
      </section>
    </Container>
  );
}

// Helper Components
function SkillCard({ icon, title, list }) {
  return (
    <div className='p-8 bg-[#111] border border-gray-800 rounded-2xl hover:border-[var(--color-accent)] transition-colors group'>
      <div className='p-3 bg-gray-900 inline-block rounded-xl mb-4 group-hover:scale-110 transition-transform'>
        {React.cloneElement(icon, {
          className: "text-[var(--color-accent)]",
          size: 28,
        })}
      </div>
      <h3 className='text-xl font-bold mb-3'>{title}</h3>
      <p className='text-sm text-[var(--color-muted)] leading-relaxed'>
        {list}
      </p>
    </div>
  );
}

function TimelineItem({ year, title, desc }) {
  return (
    <motion.div
      className='relative'
      initial='hidden'
      whileInView='visible'
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}>
      <div className='absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[#0a0a0a]' />
      <span className='text-[var(--color-accent)] font-bold text-sm uppercase tracking-widest'>
        {year}
      </span>
      <h4 className='text-xl font-bold mt-1 mb-2'>{title}</h4>
      <p className='text-[var(--color-muted)]'>{desc}</p>
    </motion.div>
  );
}
