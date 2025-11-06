import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/90" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight"
        >
          Futuristic Salon Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-xl text-white/80"
        >
          Step into a cyber-chic world of style. Book immersive hair, beauty, and grooming services enhanced by cutting-edge 3D visuals.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex items-center gap-4"
        >
          <a href="#booking" className="rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-lg hover:opacity-90 transition">Book an Appointment</a>
          <a href="#services" className="rounded-md border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">Explore Services</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex items-center gap-6 text-sm text-white/70"
        >
          <span>Premium stylists</span>
          <span>•</span>
          <span>Neo-noir ambiance</span>
          <span>•</span>
          <span>Contactless check-in</span>
        </motion.div>
      </div>
    </section>
  );
}
