import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 py-24 border-t border-[#1A1A1A]">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="text-[#555] text-xs font-mono tracking-widest uppercase">Contact</span>
        <div className="flex-1 h-px bg-[#1E1E1E]" />
      </motion.div>

      <div className="flex flex-col items-start">
        {/* Huge CTA */}
        <div className="overflow-hidden mb-6 w-full">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-[8vw] md:text-[6vw] leading-none tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
          >
            Let's build something.
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#555] text-sm leading-relaxed max-w-sm mb-14"
        >
          Tell us what you're working on. We'll help you identify where automation 
          can have the biggest impact on your business.
        </motion.p>

        {/* Email link */}
        <motion.a
          href="mailto:tutialok5@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="group inline-flex items-center gap-3 text-[#B8FF4F] border border-[#B8FF4F]/30 hover:border-[#B8FF4F] px-6 py-4 transition-all duration-300 hover:bg-[#B8FF4F]/5 rounded-sm font-mono text-sm tracking-widest"
        >
          tutialok5@gmail.com
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
          />
        </motion.a>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-24 pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <span className="text-white text-xs font-mono tracking-widest uppercase">AutoTak</span>
        <span className="text-[#333] text-xs font-mono">© 2024 AutoTak. Automation Studio.</span>
        <span className="text-[#333] text-xs font-mono">Making businesses run better.</span>
      </motion.div>
    </section>
  );
}
