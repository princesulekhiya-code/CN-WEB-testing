"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function TeamPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#006ea3]/10 border border-[#006ea3]/20"
        >
          <Users className="w-7 h-7 text-[#006ea3]" strokeWidth={1.5} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground"
        >
          Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Coming soon.
        </motion.p>
      </div>
    </section>
  );
}
