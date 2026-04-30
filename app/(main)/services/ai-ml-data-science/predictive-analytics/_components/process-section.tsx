"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { processSteps } from "../data";
import type { ProcessStep } from "../data";

export function ProcessSection() {
  const { ref, visible } = useInView(0.1);

  return (
    <div ref={ref} className="relative overflow-hidden border-y border-black/[0.06] dark:border-white/[0.06]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4EB3E8]/[0.02] via-transparent to-[#4EB3E8]/[0.02] dark:from-[#4EB3E8]/[0.01] dark:to-[#4EB3E8]/[0.01] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#4EB3E8]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#4EB3E8]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#4EB3E8]">
            Our <span className="text-black dark:text-white">Process</span>
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium text-black/50 dark:text-white/50 max-w-2xl mx-auto">
            Six phases on an alternating vertical timeline.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-px">
            <div className="w-px h-full bg-gradient-to-b from-[#4EB3E8]/30 via-[#4EB3E8]/15 to-[#4EB3E8]/5" />
          </div>

          {processSteps.map((step, i) => (
            <ProcessStepItem
              key={step.step}
              step={step}
              index={i}
              total={processSteps.length}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessStepItem({
  step,
  index,
  total,
  visible,
}: {
  step: ProcessStep;
  index: number;
  total: number;
  visible: boolean;
}) {
  const StepIcon = step.icon;
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
      className="relative mb-16 last:mb-0"
    >
      <div className="hidden md:grid md:grid-cols-[1fr_72px_1fr] w-full items-start">
        <div className={isLeft ? "pr-12" : ""}>
          {isLeft && (
            <StepContent step={step} index={index} total={total} visible={visible} align="right" />
          )}
        </div>

        <StepIcon3D step={step} index={index} visible={visible} StepIcon={StepIcon} />

        <div className={!isLeft ? "pl-12" : ""}>
          {!isLeft && (
            <StepContent step={step} index={index} total={total} visible={visible} align="left" />
          )}
        </div>
      </div>

      <div className="md:hidden flex items-start gap-5 w-full">
        <div className="flex-shrink-0 relative z-10">
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4EB3E8] flex items-center justify-center">
            <span className="text-[8px] font-bold text-white">{step.step}</span>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/25 shadow-md shadow-[#4EB3E8]/10">
            <StepIcon className="w-5 h-5 text-[#4EB3E8]" strokeWidth={1.5} />
          </div>
        </div>
        <div className="flex-1 pt-0.5">
          <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase">
            Step {step.step}
          </span>
          <h3 className="text-base font-bold mt-1 tracking-tight">{step.title}</h3>
          <p className="mt-2 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function StepContent({
  step,
  index,
  total,
  visible,
  align,
}: {
  step: ProcessStep;
  index: number;
  total: number;
  visible: boolean;
  align: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <div
      className={`group flex flex-col ${isRight ? "items-end text-right" : "items-start text-left"} rounded-2xl p-6 border border-transparent hover:border-[#4EB3E8]/15 hover:bg-[#4EB3E8]/[0.02] dark:hover:bg-[#4EB3E8]/[0.04] transition-all duration-500`}
    >
      <span className="text-[11px] font-bold text-[#4EB3E8] tracking-widest uppercase mb-2">
        Step {step.step}
      </span>
      <h3 className="text-xl font-bold tracking-tight group-hover:text-[#4EB3E8] transition-colors duration-300">
        {step.title}
      </h3>
      <p
        className={`mt-3 text-sm font-medium text-black/45 dark:text-white/40 leading-relaxed max-w-sm ${isRight ? "ml-auto" : ""}`}
      >
        {step.description}
      </p>

      <div
        className={`mt-4 flex items-center gap-2 w-full max-w-[200px] ${isRight ? "ml-auto" : ""}`}
      >
        <div className="flex-1 h-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-[#4EB3E8]/30"
            initial={{ width: 0 }}
            animate={visible ? { width: `${((index + 1) / total) * 100}%` } : {}}
            transition={{ duration: 1, delay: 0.6 + index * 0.15, ease: "easeOut" }}
          />
        </div>
        <span className="text-[10px] font-semibold text-black/20 dark:text-white/15 tabular-nums">
          {index + 1}/{total}
        </span>
      </div>
    </div>
  );
}

function StepIcon3D({
  step,
  index,
  visible,
  StepIcon,
}: {
  step: ProcessStep;
  index: number;
  visible: boolean;
  StepIcon: ProcessStep["icon"];
}) {
  return (
    <div className="flex justify-center relative z-10">
      <div className="group relative">
        <motion.div
          className="absolute inset-0 rounded-2xl border border-[#4EB3E8]/20"
          initial={{ scale: 1, opacity: 0 }}
          animate={visible ? { scale: [1, 1.5, 1.5], opacity: [0, 0.3, 0] } : {}}
          transition={{
            duration: 2,
            delay: 0.5 + index * 0.2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#4EB3E8] flex items-center justify-center z-10">
          <span className="text-[9px] font-bold text-white">{step.step}</span>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-[#4EB3E8]/25 shadow-lg shadow-[#4EB3E8]/10 group-hover:border-[#4EB3E8]/50 group-hover:shadow-[#4EB3E8]/20 group-hover:scale-110 transition-all duration-500">
          <StepIcon className="w-6 h-6 text-[#4EB3E8]" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
