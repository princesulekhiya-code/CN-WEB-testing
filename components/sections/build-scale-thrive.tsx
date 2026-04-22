"use client";

import { motion } from "framer-motion";

export function BuildScaleThrive() {
  return (
    <section className="w-full py-14 md:py-20 bg-white dark:bg-black">
      <div className="w-full px-6 md:px-10 lg:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#999] dark:text-[#8b8b8b]"
        >
          Build, Scale, and Thrive with <span className="text-black dark:text-white">CloudNexus</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-base md:text-lg text-black/50 dark:text-white/50 leading-relaxed max-w-2xl mx-auto"
        >
          From top talent to breakthrough solutions—CloudNexus drives growth with strategies that deliver real results.
        </motion.p>
      </div>
    </section>
  );
}
