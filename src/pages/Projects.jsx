import Container from "../components/layout/Container";
import projects from "../data/projects";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Rocket,
  Layout,
  Smartphone,
  Zap,
} from "lucide-react"; // Optional: npm install lucide-react

export default function Projects() {
  return (
    <Container>
      {/* Hero Section - Refined Typography */}
      <section className='py-28 max-w-4xl mx-auto text-center'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-[var(--color-accent)] font-semibold tracking-widest uppercase text-sm mb-4 block'>
          Our Portfolio
        </motion.span>
        <motion.h1
          className='text-5xl md:text-7xl font-extrabold mb-8 tracking-tight'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}>
          Digital Excellence <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            Realized.
          </span>
        </motion.h1>

        <motion.p
          className='text-[var(--color-muted)] text-xl leading-relaxed mb-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
          At{" "}
          <strong className='text-[var(--color-text)]'>GWTeck Solutions</strong>
          , we blend technical precision with creative vision to build scalable,
          high-performance web applications.
        </motion.p>
      </section>

      {/* Projects Grid - Enhanced Cards */}
      <motion.section
        className='pb-32'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}>
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-3xl font-bold'>Featured Work</h2>
          <div className='h-[1px] flex-1 bg-gray-800'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-10'>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -10 }}
              className='group relative bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:shadow-[0_20px_50px_rgba(99,102,241,0.1)]'
              onClick={() =>
                (window.location.href = `/projects/${project.id}`)
              }>
              {/* Media Container */}
              <div className='relative h-72 overflow-hidden'>
                <div className='absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10' />
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                )}
                {/* View Details Overlay */}
                <div className='absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity'>
                  <div className='bg-white text-black p-3 rounded-full shadow-xl'>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='p-8'>
                <h3 className='text-2xl font-bold mb-4 group-hover:text-[var(--color-accent)] transition-colors'>
                  {project.title}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className='text-xs font-medium tracking-wider uppercase border border-gray-700 text-gray-400 px-3 py-1 rounded-md group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)] transition-all'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us - Modern Feature Grid */}
      <section className='py-24 relative overflow-hidden'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[var(--color-accent)]/5 blur-[120px] rounded-full' />

        <div className='relative z-10'>
          <h2 className='text-4xl font-bold mb-16 text-center'>
            Why GWTeck Solutions?
          </h2>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <FeatureCard
              icon={<Layout />}
              title='Responsive Layouts'
              desc='Flawless experiences across mobile, tablet, and desktop.'
            />
            <FeatureCard
              icon={<Zap />}
              title='Optimized Speed'
              desc='Lightning-fast performance using modern tools like Vite and React.'
            />
            <FeatureCard
              icon={<Code2 />}
              title='Clean Architecture'
              desc='Maintainable, scalable codebases using Laravel and Node.js.'
            />
            <FeatureCard
              icon={<Smartphone />}
              title='Mobile First'
              desc="Design centered around the modern user's primary device."
            />
            <FeatureCard
              icon={<Rocket />}
              title='Scalable Logic'
              desc='Applications built to grow with your business traffic.'
            />
            <FeatureCard
              icon={<Zap />}
              title='Seamless API'
              desc='Deep integration with payment gateways and 3rd party services.'
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Dark & Focused */}
      <section className='py-32 text-center'>
        <div className='max-w-2xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-[#121212] to-transparent border border-gray-800'>
          <h3 className='text-3xl font-bold mb-6'>
            Ready to build something iconic?
          </h3>
          <p className='text-[var(--color-muted)] mb-10'>
            Whether it's a VTU platform or a high-end portfolio, we have the
            tools to make it happen.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <a
              href='/contact'
              className='bg-[var(--color-accent)] px-8 py-4 rounded-xl text-white font-bold hover:brightness-110 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all'>
              Start a Project
            </a>
            <a
              href='/about'
              className='border border-gray-700 px-8 py-4 rounded-xl text-white font-bold hover:bg-gray-800 transition-all'>
              About the Team
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}

// Helper Component for the Feature Grid
function FeatureCard({ icon, title, desc }) {
  return (
    <div className='p-8 rounded-2xl bg-[#0a0a0a] border border-gray-900 hover:border-gray-700 transition-colors'>
      <div className='text-[var(--color-accent)] mb-4'>{icon}</div>
      <h4 className='text-lg font-bold mb-2'>{title}</h4>
      <p className='text-sm text-[var(--color-muted)] leading-relaxed'>
        {desc}
      </p>
    </div>
  );
}
