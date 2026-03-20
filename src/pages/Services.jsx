import Container from "../components/layout/Container";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaServer,
  FaPenNib,
} from "react-icons/fa";

const services = [
  {
    title: "Portfolio & Personal Websites",
    icon: <FaLaptopCode />,
    description:
      "Showcase your skills, experience, and personal projects with a clean, modern, and responsive website designed to leave a lasting impression.",
  },
  {
    title: "Landing Pages",
    icon: <FaPenNib />,
    description:
      "Promote your products or services effectively with single-page websites crafted for conversions and user engagement.",
  },
  {
    title: "Business & Corporate Websites",
    icon: <FaServer />,
    description:
      "Professional websites that represent your business, highlight your services, and help build credibility with potential clients.",
  },
  {
    title: "E-Commerce Solutions",
    icon: <FaShoppingCart />,
    description:
      "Custom online stores with seamless checkout, product management, and a focus on user experience to maximize sales.",
  },
  {
    title: "Web Applications & Custom Software",
    icon: <FaLaptopCode />,
    description:
      "Tailor-made applications to solve complex problems or automate processes, built for scalability, security, and high performance.",
  },
];

export default function Services() {
  return (
    <Container>
      {/* Hero Section */}
      <section className='py-24 text-center max-w-3xl mx-auto'>
        <motion.h1
          className='text-4xl md:text-5xl font-bold mb-6'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          Our Services
        </motion.h1>
        <motion.p
          className='text-[var(--color-muted)] leading-relaxed mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          At{" "}
          <span className='font-semibold text-[var(--color-accent)]'>
            GWTeck Solutions
          </span>
          , we design and build modern web solutions tailored to your unique
          needs. Whether you need a sleek personal portfolio or a robust web
          application, we ensure every project is responsive, interactive, and
          user-friendly.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className='py-20'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className='bg-transparent border  dark:bg-gray-800 px-6 py-4 rounded-xl max-w-4xl mx-auto shadow-lg hover:shadow-2xl transition-shadow'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}>
              <div className='text-[var(--color-accent)] text-4xl mb-4'>
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold mb-3'>{service.title}</h3>
              <p className='text-[var(--color-muted)]'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Your Brand Section */}
      <section className='py-24 max-w-4xl mx-auto text-center'>
        <motion.h2
          className='text-3xl font-bold mb-6'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          About GWTeck Solutions
        </motion.h2>
        <motion.p
          className='text-[var(--color-muted)] leading-relaxed mb-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          GWTeck Solutions is a full-service web development brand led by
          Godswill Eguavoen. We specialize in creating responsive, interactive,
          and scalable web solutions for individuals and businesses alike. Our
          goal is to bring your ideas to life online with clean designs and
          seamless functionality.
        </motion.p>
        <motion.p
          className='text-[var(--color-muted)] leading-relaxed'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          From concept to deployment, we handle everything with care and
          professionalism. Whether you’re looking to launch a personal brand, a
          business website, or a complex web application, we provide solutions
          that not only look great but also perform flawlessly.
        </motion.p>
      </section>

      {/* Call to Action */}
      <section className='py-16 text-center'>
        <motion.h3
          className='text-2xl font-semibold mb-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          Ready to Build Something Amazing?
        </motion.h3>
        <motion.p
          className='text-[var(--color-muted)] mb-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Get in touch with us today and let's discuss how we can bring your web
          project to life.
        </motion.p>
        <a
          href='/contact'
          className='bg-[var(--color-accent)] px-8 py-4 rounded-lg text-white font-semibold hover:bg-[var(--color-accent-hover)] transition-colors'>
          Contact Us
        </a>
      </section>
    </Container>
  );
}
