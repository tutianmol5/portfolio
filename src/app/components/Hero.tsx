import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-28 pb-12 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#B8FF4F]/3 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#B8FF4F]/5 blur-[100px]" />
      </div>

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex items-center justify-between"
      >
        <span className="text-[#555] text-xs font-mono tracking-widest uppercase">Est. 2024</span>
        <span className="text-[#555] text-xs font-mono tracking-widest uppercase">Automation Studio</span>
      </motion.div>

      {/* Main headline */}
      <div ref={containerRef} className="transition-transform duration-75 ease-out">
        <div className="flex flex-col gap-2 my-auto py-16">
          {["We build", "automation", "systems."].map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[13vw] md:text-[10vw] leading-[0.9] tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
      >
        <p className="text-[#666] max-w-xs text-sm leading-relaxed font-mono">
          Making businesses faster, leaner,<br />and easier to run.
        </p>
        <div className="flex items-center gap-8">
          <button
            onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-3 text-[#B8FF4F] text-xs font-mono tracking-widest uppercase"
          >
            <span className="w-12 h-px bg-[#B8FF4F] group-hover:w-20 transition-all duration-300" />
            Selected Work
          </button>
        </div>
      </motion.div>
    </section>
  );
}
