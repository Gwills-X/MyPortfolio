import Container from "../components/layout/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Laptop,
  ShoppingBag,
  Zap,
  Rocket,
  Layers,
  ArrowRight,
  Monitor,
} from "lucide-react"; // Modern, clean icons

const services = [
  {
    title: "Portfolio & Personal Brands",
    icon: <Monitor />,
    color: "from-blue-500 to-cyan-400",
    description:
      "Your digital handshake. We build sleek, high-performance portfolios that turn visitors into collaborators.",
  },
  {
    title: "High-Conversion Landing Pages",
    icon: <Zap />,
    color: "from-purple-600 to-pink-500",
    description:
      "One page, one goal. We craft hyper-focused marketing pages designed to capture leads and drive sales.",
  },
  {
    title: "E-Commerce Ecosystems",
    icon: <ShoppingBag />,
    color: "from-orange-500 to-yellow-400",
    description:
      "Scale your revenue. Custom online stores with seamless checkout, inventory logic, and secure payments.",
  },
  {
    title: "Business & Corporate Hubs",
    icon: <Layers />,
    color: "from-indigo-600 to-blue-700",
    description:
      "Establish authority. Professional, scalable websites built to represent your corporate identity globally.",
  },
  {
    title: "Fullstack Web Applications",
    icon: <Rocket />,
    color: "from-green-500 to-emerald-400",
    description:
      "Custom software. From VTU platforms to management systems, we build the engine your business runs on.",
  },
  {
    title: "API & Backend Architecture",
    icon: <Laptop />,
    color: "from-red-500 to-rose-400",
    description:
      "The hidden power. Secure, robust REST APIs and server-side logic built with Laravel and Node.js.",
  },
];

export default function Services() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <Container className='overflow-hidden'>
      {/* --- CRAZY HEADER SECTION --- */}
      <section className='relative min-h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden rounded-[3rem] mt-10'>
        {/* Animated Slideshow-like Background */}
        <motion.div style={{ y: backgroundY }} className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-[#0a0a0a]' />
          <div className='absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] animate-pulse' />
          <div className='absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] animate-pulse delay-700' />
        </motion.div>

        <div className='relative z-10 max-w-4xl'>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className='mb-6 inline-block bg-white/5 border border-white/10 px-4 py-1 rounded-full backdrop-blur-md'>
            <span className='text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest'>
              Digital Solutions
            </span>
          </motion.div>

          <motion.h1
            className='text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            SERVICES <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500'>
              WITHOUT LIMITS.
            </span>
          </motion.h1>

          <motion.p
            className='text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}>
            We don't just build websites; we engineer high-performance digital
            weapons for <span className='text-white'>GWTeck Solutions</span>.
          </motion.p>
        </div>
      </section>

      {/* --- COLORFUL SERVICES GRID --- */}
      <section className='py-32'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* --- CRAZY ABOUT BRAND SECTION --- */}
      <section className='py-24 relative'>
        <div className='absolute inset-0 bg-[var(--color-accent)]/5 rounded-[4rem] -skew-y-2' />

        <div className='relative z-10 grid md:grid-cols-2 gap-16 items-center p-12'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}>
            <h2 className='text-5xl font-black mb-8 leading-tight'>
              ENGINEERED BY <br />
              <span className='text-[var(--color-accent)]'>GODSWILL.</span>
            </h2>
            <p className='text-lg text-gray-400 mb-6'>
              GWTeck Solutions is the intersection of raw technical power and
              modern design aesthetic. Led by Godswill Eguavoen, we focus on the
              "Fullstack Reality"—ensuring your backend is as solid as your
              frontend is beautiful.
            </p>
            <div className='flex gap-4'>
              <div className='bg-gray-900 p-4 rounded-2xl border border-white/5'>
                <p className='text-2xl font-bold text-white'>100%</p>
                <p className='text-xs text-gray-500'>Responsive</p>
              </div>
              <div className='bg-gray-900 p-4 rounded-2xl border border-white/5'>
                <p className='text-2xl font-bold text-white'>Scale</p>
                <p className='text-xs text-gray-500'>Ready</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className='relative aspect-square bg-gray-900 rounded-3xl overflow-hidden border border-white/10'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}>
            <img
              src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80'
              className='w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700'
              alt='Server/Tech'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />
            <div className='absolute bottom-8 left-8'>
              <p className='text-white font-mono text-sm tracking-widest'>
                SYSTEMS_ACTIVE // GWTECK
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PULSING CTA --- */}
      <section className='py-32 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-[3rem] inline-block'>
          <div className='bg-[#0a0a0a] rounded-[2.9rem] px-12 py-16'>
            <h3 className='text-4xl md:text-5xl font-black mb-8 text-white'>
              Ready to break <br /> the internet?
            </h3>
            <p className='text-gray-400 mb-10 max-w-sm mx-auto'>
              Let's stop talking and start building your next high-impact
              digital asset.
            </p>
            <a
              href='/contact'
              className='inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black text-lg hover:bg-[var(--color-accent)] hover:text-white transition-all hover:scale-110'>
              HIRE GWTECK <ArrowRight />
            </a>
          </div>
        </motion.div>
      </section>
    </Container>
  );
}

/* --- HELPER SERVICE CARD --- */
function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -15 }}
      className='group relative bg-[#111] border border-white/5 p-10 rounded-[2.5rem] overflow-hidden'>
      {/* Colorful Glow Background on Hover */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
      />

      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-black/50`}>
        {service.icon}
      </div>

      <h3 className='text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all'>
        {service.title}
      </h3>

      <p className='text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors'>
        {service.description}
      </p>

      <div className='mt-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold text-white tracking-widest uppercase'>
        Explore <ArrowRight size={14} />
      </div>
    </motion.div>
  );
}
