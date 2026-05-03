import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Understand",
    desc: "We map how a business currently operates — identifying where time is lost, where handoffs break down, and which tasks repeat without adding value.",
  },
  {
    num: "02",
    title: "Redesign",
    desc: "We redesign processes for scale — replacing manual steps with automated workflows that run consistently, regardless of team size or volume.",
  },
  {
    num: "03",
    title: "Deploy",
    desc: "We build and deploy systems that integrate with your existing tools — no wholesale replacement, just intelligent automation layered on top.",
  },
];

export function WhatIsAutomation() {
  return (
    <section id="automation" className="px-6 md:px-12 py-24 border-t border-[#1A1A1A]">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="text-[#555] text-xs font-mono tracking-widest uppercase">What is Automation</span>
        <div className="flex-1 h-px bg-[#1E1E1E]" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Big text */}
        <div>
          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            >
              Systems that work while you sleep.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[#666] text-sm leading-relaxed max-w-sm"
          >
            Automation is the practice of replacing repetitive, manual processes with intelligent systems 
            that execute reliably, at scale, without human intervention.
          </motion.p>
        </div>

        {/* Right: Steps */}
        <div className="flex flex-col gap-0 border-t border-[#1A1A1A]">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex items-start gap-6 py-7 border-b border-[#1A1A1A] hover:border-[#B8FF4F]/20 transition-colors duration-300"
            >
              <span className="text-[#333] font-mono text-xs mt-1 flex-shrink-0">{step.num}</span>
              <div>
                <h3
                  className="text-white mb-2 group-hover:text-[#B8FF4F] transition-colors duration-300"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
