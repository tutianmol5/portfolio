import { motion } from "motion/react";

const benefits = [
  {
    label: "Speed",
    title: "10× Faster Operations",
    desc: "Automated workflows eliminate bottlenecks and approval queues — tasks that took days now complete in minutes.",
  },
  {
    label: "Lean",
    title: "Reduce Operational Waste",
    desc: "Stop paying for time spent on repetitive tasks. Redirect your team's energy toward work that actually moves the needle.",
  },
  {
    label: "Clarity",
    title: "Clearer Team Workflows",
    desc: "Automation creates defined, consistent processes — so every team member knows exactly what happens next, every time.",
  },
  {
    label: "Revenue",
    title: "Capture More Revenue",
    desc: "Automated lead routing and follow-up means no prospect falls through the cracks — ever.",
  },
];

export function HowItHelps() {
  return (
    <section id="how-it-helps" className="px-6 md:px-12 py-24 border-t border-[#1A1A1A]">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-20"
      >
        <span className="text-[#555] text-xs font-mono tracking-widest uppercase">How It Helps</span>
        <div className="flex-1 h-px bg-[#1E1E1E]" />
      </motion.div>

      {/* Headline */}
      <div className="overflow-hidden mb-16">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-white text-5xl md:text-6xl lg:text-[5.5vw] leading-tight tracking-tight max-w-3xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
        >
          Practical systems. Measurable outcomes.
        </motion.h2>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 gap-px bg-[#1A1A1A] border border-[#1A1A1A]">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-[#080808] p-8 md:p-10 hover:bg-[#0D0D0D] transition-colors duration-300 cursor-default"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[#B8FF4F] text-xs font-mono tracking-widest uppercase">
                {benefit.label}
              </span>
              <span className="text-[#222] font-mono text-xs">0{i + 1}</span>
            </div>
            <h3
              className="text-white text-xl md:text-2xl mb-4 group-hover:text-[#B8FF4F] transition-colors duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              {benefit.title}
            </h3>
            <p className="text-[#555] text-sm leading-relaxed">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Image strip */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="mt-12 h-48 md:h-64 overflow-hidden rounded-sm origin-left"
      >
        <img
          src="https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBidXNpbmVzcyUyMHByb2Nlc3N8ZW58MXx8fHwxNzc1OTQzMTEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Automation workflow"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </motion.div>
    </section>
  );
}
