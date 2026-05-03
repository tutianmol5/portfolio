import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    id: "01",
    title: "AI Voice Agent",
    category: "Voice Automation",
    tags: ["AI", "Voice", "Communication"],
    year: "2024",
    description: "Intelligent voice systems that handle inbound and outbound communication at scale — qualifying leads, booking appointments, and managing customer interactions without human intervention.",
    image: "https://images.unsplash.com/photo-1724185773486-0b39642e607e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHZvaWNlJTIwdGVjaG5vbG9neSUyMHNvdW5kJTIwd2F2ZXN8ZW58MXx8fHwxNzc1OTQzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "02",
    title: "Lead Engine",
    category: "Revenue Workflow",
    tags: ["Lead Capture", "Routing", "CRM"],
    year: "2024",
    description: "End-to-end lead capture and routing systems that automatically qualify, score, and distribute prospects to the right team members — eliminating manual follow-up and revenue leakage.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkJTIwZ2VuZXJhdGlvbiUyMGRhdGElMjBmdW5uZWwlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc1OTQzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "03",
    title: "Web Design",
    category: "Creative Websites",
    tags: ["Design", "UI/UX", "Development"],
    year: "2024",
    description: "We design and build attractive, high-performance websites that make a strong first impression — combining clean aesthetics with fast load times, responsive layouts, and conversion-focused structure.",
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWduJTIwVUklMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzY4NDgxODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function SelectedWork() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="px-6 md:px-12 py-24 relative"
      onMouseMove={handleMouseMove}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[#555] text-xs font-mono tracking-widest uppercase">Selected Work</span>
        <div className="flex-1 h-px bg-[#1E1E1E]" />
        <span className="text-[#555] text-xs font-mono tracking-widest">03 Projects</span>
      </motion.div>

      {/* Projects */}
      <div className="border-t border-[#1A1A1A]">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="border-b border-[#1A1A1A]"
          >
            {/* Main Row */}
            <div
              className="group flex items-center justify-between py-8 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            >
              {/* Left */}
              <div className="flex items-center gap-6 md:gap-12 flex-1 min-w-0">
                <span className="text-[#333] font-mono text-xs hidden md:block flex-shrink-0">
                  {project.id}
                </span>
                <h2
                  className="text-white text-3xl md:text-5xl lg:text-6xl tracking-tight transition-colors duration-300 group-hover:text-[#B8FF4F] truncate"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                >
                  {project.title}
                </h2>
              </div>

              {/* Right */}
              <div className="flex items-center gap-6 md:gap-12 flex-shrink-0 ml-4">
                <span className="hidden md:block text-[#555] text-xs font-mono tracking-widest uppercase">
                  {project.category}
                </span>
                <span className="text-[#333] text-xs font-mono">{project.year}</span>
                <motion.div
                  animate={{ rotate: expandedId === project.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 flex items-center justify-center text-[#555] group-hover:text-[#B8FF4F] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </div>
            </div>

            {/* Expanded Content */}
            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-10 grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 border border-[#B8FF4F]/30 text-[#B8FF4F] text-xs font-mono tracking-widest uppercase rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-[#888] text-sm leading-relaxed max-w-md">
                        {project.description}
                      </p>
                    </div>
                    <div className="aspect-video rounded-sm overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Cursor-following image preview */}
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            key={hoveredId}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed pointer-events-none z-30 w-64 h-44 md:w-80 md:h-52 rounded-sm overflow-hidden shadow-2xl"
            style={{
              left: mousePos.x + 20,
              top: mousePos.y - 80,
              transform: "translate(0, 0)",
            }}
          >
            <img
              src={projects.find((p) => p.id === hoveredId)?.image}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}