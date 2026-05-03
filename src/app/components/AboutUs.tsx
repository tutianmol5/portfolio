import { motion } from "motion/react";

const strengths = [
  "Business process automation and workflow design",
  "AI voice systems and communication automation",
  "Lead capture, routing, and revenue workflow optimization",
  "Attractive, high-performance website design and development",
];

export function AboutUs() {
  return (
    <section id="about" className="px-6 md:px-12 py-24 border-t border-[#1A1A1A]">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="text-[#555] text-xs font-mono tracking-widest uppercase">About Us</span>
        <div className="flex-1 h-px bg-[#1E1E1E]" />
      </motion.div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Left tagline */}
        <div className="md:col-span-6">
          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            >
              We make businesses faster, leaner, easier to run.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-[#666] text-sm leading-relaxed max-w-sm"
          >
            We begin by understanding how a business currently operates, where time is being lost, 
            and which processes can be redesigned for scale through automation.
          </motion.p>
        </div>

        {/* Right content */}
        <div className="md:col-span-6 flex flex-col gap-10">
          {/* How We Work */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-[#B8FF4F] text-xs font-mono tracking-widest uppercase block mb-4">How We Work</span>
            <p className="text-[#888] text-sm leading-relaxed">
              We begin by understanding how a business currently operates, where time is being lost, 
              and which processes can be redesigned for scale through automation. Every engagement 
              starts with deep operational understanding before a single system is built.
            </p>
          </motion.div>

          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-[#B8FF4F] text-xs font-mono tracking-widest uppercase block mb-4">Core Strengths</span>
            <ul className="flex flex-col gap-0 border-t border-[#1A1A1A]">
              {strengths.map((strength, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 py-4 border-b border-[#1A1A1A]"
                >
                  <span className="text-[#B8FF4F] mt-1 flex-shrink-0">→</span>
                  <span className="text-[#888] text-sm leading-relaxed">{strength}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* What Matters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="text-[#B8FF4F] text-xs font-mono tracking-widest uppercase block mb-4">What Matters To Us</span>
            <p className="text-[#888] text-sm leading-relaxed">
              We focus on practical systems that solve operational problems, create clearer team workflows, 
              and support measurable business outcomes. No complexity for its own sake.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}