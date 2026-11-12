"use client";

import { motion, useReducedMotion } from "motion/react";

const steps = [
  ["01", "Capture", "Add customer and vehicle details", "Start with the customer, their vehicle, and the information your team needs to serve them."],
  ["02", "Manage", "Keep service work moving", "Use service history, reminders, appointments, feedback, and follow-ups in one daily workflow."],
  ["03", "Review", "See what needs attention", "Use the dashboard and reports to review activity, identify priorities, and follow up with confidence."],
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="how-it-works section-block" id="how-it-works" aria-labelledby="how-title">
      <div className="section-intro">
        <p className="eyebrow">Simple by design</p>
        <h2 id="how-title">How V-Care works.</h2>
        <p>A practical workflow designed around the moments that matter in a dealership day.</p>
      </div>
      <div className="workflow-list">
        {steps.map(([number, label, title, description], index) => (
          <motion.article
            key={number}
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }}
          >
            <span className="workflow-number">{number}</span>
            <div><p>{label}</p><h3>{title}</h3></div>
            <p className="workflow-description">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
