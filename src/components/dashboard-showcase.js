"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const proofPoints = [
  ["Customer context", "Customer and vehicle information stays connected in one workspace."],
  ["Service visibility", "Appointments, reminders, and follow-ups are surfaced for the team."],
  ["Operational clarity", "Dashboard and reporting views make work that needs attention easier to review."],
];

export default function DashboardShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="dashboard-showcase" id="product" aria-labelledby="dashboard-title">
      <motion.div
        className="dashboard-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="eyebrow">Inside V-Care</p>
        <h2 id="dashboard-title">A clear view of today’s dealership activity.</h2>
        <p>See the work in motion, then move to the customer or service detail that needs your attention.</p>
      </motion.div>

      <motion.figure
        className="product-preview dashboard-image"
        initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image
          src="/images/vcare-dashboard-demo.png"
          alt="V-Care dashboard showing fictional dealership operational data"
          width={1728}
          height={912}
        />
        <figcaption className="preview-caption">Dashboard shown with fictional demo data</figcaption>
      </motion.figure>

      <div className="proof-grid">
        {proofPoints.map(([title, description], index) => (
          <motion.article
            key={title}
            className="proof-card"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
          >
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
