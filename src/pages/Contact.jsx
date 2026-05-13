import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Sparkles,
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      className='max-w-7xl mx-auto px-6 py-24 relative overflow-hidden'>
      {/* Background Decor */}
      <div className='absolute top-0 right-0 -z-10 w-96 h-96 bg-[var(--color-accent)]/10 blur-[100px] rounded-full animate-pulse' />
      <div className='absolute bottom-0 left-0 -z-10 w-72 h-72 bg-purple-500/10 blur-[100px] rounded-full' />

      {/* --- HEADER --- */}
      <motion.div variants={itemVariants} className='text-center mb-20'>
        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest mb-6'>
          <Sparkles size={14} /> Get in Touch
        </div>
        <h2 className='text-5xl md:text-7xl font-black mb-6 tracking-tighter'>
          LET’S START A <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-purple-400'>
            CONVERSATION.
          </span>
        </h2>
        <p className='text-gray-400 max-w-xl mx-auto text-lg leading-relaxed'>
          Whether you're looking for a full-stack architect or a mentorship
          session, my inbox is always open.
        </p>
      </motion.div>

      <div className='grid lg:grid-cols-5 gap-16 items-start'>
        {/* --- CONTACT INFO (2 Columns) --- */}
        <motion.div variants={itemVariants} className='lg:col-span-2 space-y-8'>
          <h3 className='text-2xl font-bold mb-8'>Contact Information</h3>

          <ContactCard
            icon={<MapPin />}
            title='Location'
            value='Bauchi, Nigeria'
            sub='Open for global remote work'
          />
          <ContactCard
            icon={<Phone />}
            title='Phone'
            value='+234 801 234 5678'
            sub='Mon - Fri, 9am - 6pm'
          />
          <ContactCard
            icon={<Mail />}
            title='Email'
            value='hello@gwtecksolutions.com'
            sub='Usually responds within 24 hours'
          />

          <div className='p-8 rounded-3xl bg-white/[0.02] border border-white/5 mt-12'>
            <p className='text-sm text-gray-400 italic'>
              "Great things in business are never done by one person. They're
              done by a team of people."
              <span className='block mt-2 font-bold text-white not-italic'>
                — GWTeck Solutions
              </span>
            </p>
          </div>
        </motion.div>

        {/* --- CONTACT FORM (3 Columns) --- */}
        <motion.div
          variants={itemVariants}
          className='lg:col-span-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl'>
          <form className='space-y-8'>
            <div className='grid md:grid-cols-2 gap-8'>
              <div className='relative group'>
                <User
                  className='absolute left-4 top-4 text-gray-500 group-focus-within:text-[var(--color-accent)] transition-colors'
                  size={20}
                />
                <input
                  type='text'
                  placeholder='Your Full Name'
                  className='w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl focus:ring-2 focus:ring-[var(--color-accent)] outline-none transition-all placeholder:text-gray-600'
                />
              </div>

              <div className='relative group'>
                <Mail
                  className='absolute left-4 top-4 text-gray-500 group-focus-within:text-[var(--color-accent)] transition-colors'
                  size={20}
                />
                <input
                  type='email'
                  placeholder='Email Address'
                  className='w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl focus:ring-2 focus:ring-[var(--color-accent)] outline-none transition-all placeholder:text-gray-600'
                />
              </div>
            </div>

            <div className='relative group'>
              <MessageSquare
                className='absolute left-4 top-4 text-gray-500 group-focus-within:text-[var(--color-accent)] transition-colors'
                size={20}
              />
              <textarea
                rows='6'
                placeholder='Tell me about your project or vision...'
                className='w-full bg-white/5 border border-white/10 px-12 py-4 rounded-2xl focus:ring-2 focus:ring-[var(--color-accent)] outline-none transition-all resize-none placeholder:text-gray-600'></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='group bg-[var(--color-accent)] hover:bg-indigo-500 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 w-full transition-all shadow-[0_20px_40px_rgba(99,102,241,0.2)]'>
              SEND MESSAGE{" "}
              <Send
                size={20}
                className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform'
              />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* --- HELPER COMPONENT --- */
function ContactCard({ icon, title, value, sub }) {
  return (
    <div className='flex gap-6 group'>
      <div className='w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-500'>
        {icon}
      </div>
      <div>
        <p className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-1'>
          {title}
        </p>
        <p className='text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors'>
          {value}
        </p>
        <p className='text-sm text-gray-500'>{sub}</p>
      </div>
    </div>
  );
}

export default Contact;
