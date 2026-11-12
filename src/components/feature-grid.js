"use client";

import { motion, useReducedMotion } from "motion/react";

const features = [
  ["01", "▦", "#45b8ff", "Your daily overview", "Dashboard", "Get a quick overview of dealership activity, service statistics, upcoming services, and important follow-ups."],
  ["02", "⌕", "#f59e0b", "Service history", "Service management", "Maintain service records, track previous visits, and organize the next service due for every vehicle."],
  ["03", "♧", "#10b981", "Customer records", "Customer management", "Keep customer names, contact details, and associated vehicle information organized in one place."],
  ["04", "◎", "#a78bfa", "One complete view", "Customer 360°", "See a unified customer profile with vehicle details, service history, and follow-up information."],
  ["05", "◷", "#fb7185", "Never miss a due service", "Service reminders", "Identify upcoming and overdue services so your team can contact customers at the right time."],
  ["06", "↗", "#22d3ee", "Stronger relationships", "Telecalling & follow-ups", "Organize customer calls and follow-up activities to keep service communication consistent."],
  ["07", "⌕", "#60a5fa", "Find information faster", "Smart search", "Find customer and vehicle information quickly when a driver needs support."],
  ["08", "◌", "#f59e0b", "Configurable reminders", "Appointments & feedback", "Track scheduled appointments and retain customer feedback in the same workflow."],
  ["09", "◈", "#818cf8", "Operational visibility", "Reports & backups", "Review operational reports and use local-first data with available backup capabilities."],
];

export default function FeatureGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="feature-grid feature-grid-animated">
      {features.map(([number, icon, color, label, title, description], index) => (
        <motion.article
          className="feature-card"
          key={title}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -5, borderColor: "#45b8ff" }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.4, delay: reduceMotion ? 0 : (index % 3) * 0.07, ease: "easeOut" }}
        >
          <div className="feature-card-top">
            <span className="feature-icon" style={{ "--feature-color": color }} aria-hidden="true">{icon}</span>
            <span className="feature-number">{number}</span>
          </div>
          <p className="feature-label" style={{ color }}>{label}</p>
          <h3>{title}</h3>
          <p>{description}</p>
          <footer><span>V-Care feature</span><span aria-hidden="true">↗</span></footer>
        </motion.article>
      ))}
    </div>
  );
}
