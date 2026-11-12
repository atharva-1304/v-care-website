"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero hero-centered" id="top" aria-labelledby="hero-title">
      <motion.div
        className="hero-centered-content"
        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="hero-logo-wrap">
        <Image
          className="hero-logo"
          src="/images/vcare-logo.png"
          alt="V-Care"
          width={243}
          height={232}
          priority
        />
        </div>
        <p className="eyebrow">Vehicle customer care &amp; CRM</p>
        <h1 id="hero-title">V-CARE</h1>
        <p className="hero-product-name">Stronger relationships. Smoother journeys.</p>
        <p className="hero-copy">
          V-Care brings customer, vehicle, and service information into one
          focused desktop workspace—so your team can spend less time chasing
          details and more time serving drivers.
        </p>
        <div className="hero-actions">
          <motion.a
            className="button button-primary button-demo"
            href="#demo"
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Book a demo <span aria-hidden="true">→</span>
          </motion.a>
        </div>
      </motion.div>
      <a className="hero-scroll-cue" href="#product">Scroll to explore <span aria-hidden="true">↓</span></a>
    </section>
  );
}
