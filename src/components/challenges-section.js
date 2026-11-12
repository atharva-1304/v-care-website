"use client";

import { motion, useReducedMotion } from "motion/react";

const challenges = [
  {
    number: "01",
    icon: "⌘",
    eyebrow: "Customer context",
    title: "Scattered customer context",
    text: "Keep customer and vehicle information together, so the relevant history is easier to find when it matters.",
    visual: "nodes",
  },
  {
    number: "02",
    icon: "◷",
    eyebrow: "Service moments",
    title: "Missed service moments",
    text: "Bring appointments, reminders, and follow-ups into view for work that needs attention.",
    visual: "timeline",
  },
  {
    number: "03",
    icon: "▦",
    eyebrow: "Daily activity",
    title: "Hard-to-read activity",
    text: "Use dashboard and reporting views to make day-to-day operations easier to review.",
    visual: "bars",
  },
];

function MiniVisual({ type }) {
  if (type === "nodes") {
    return <div className="mini-visual mini-nodes" aria-hidden="true"><i /><i /><i /><b /><b /></div>;
  }
  if (type === "timeline") {
    return <div className="mini-visual mini-timeline" aria-hidden="true"><i /><i /><i /><span /></div>;
  }
  return <div className="mini-visual mini-bars" aria-hidden="true"><i /><i /><i /><i /></div>;
}

export default function ChallengesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="challenges section-block" aria-labelledby="challenges-title">
      <motion.div
        className="section-intro challenge-intro"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="eyebrow">Built for the everyday work</p>
        <h2 id="challenges-title">Less searching. More certainty at every service touchpoint.</h2>
        <p>Dealership teams move between customer details, vehicle records, service dates, and follow-ups all day. V-Care brings those operational details into a focused desktop workflow.</p>
      </motion.div>

      <div className="challenge-grid challenge-grid-animated">
        {challenges.map((challenge, index) => (
          <motion.article
            key={challenge.number}
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={reduceMotion ? undefined : { y: -6, borderColor: "#45b8ff" }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }}
          >
            <div className="challenge-card-top">
              <span className="challenge-icon" aria-hidden="true">{challenge.icon}</span>
              <span className="card-number">{challenge.number}</span>
            </div>
            <MiniVisual type={challenge.visual} />
            <p className="challenge-label">{challenge.eyebrow}</p>
            <h3>{challenge.title}</h3>
            <p>{challenge.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
