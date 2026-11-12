"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const recipient = "vcare.otpnoreply@gmail.com";

export default function DemoRequestForm() {
  const [status, setStatus] = useState("");
  const reduceMotion = useReducedMotion();

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const contact = data.get("contact");
    const email = data.get("email");
    const message = data.get("message");
    const subject = `V-Care demo request from ${name}`;
    const body = `Name: ${name}\nContact number: ${contact}\nEmail: ${email}\n\nMessage:\n${message}`;

    setStatus("Opening your email app with this request pre-filled.");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="demo-section" id="demo" aria-labelledby="demo-title">
      <motion.div
        className="demo-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="eyebrow">Book a demo</p>
        <h2 id="demo-title">See V-Care in your dealership workflow.</h2>
        <p>Tell us a little about your dealership and we&apos;ll help arrange a product conversation.</p>
        <a href={`mailto:${recipient}`}>{recipient}</a>
      </motion.div>

      <motion.form
        className="demo-form"
        onSubmit={handleSubmit}
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
      >
        <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label>Contact number<input name="contact" autoComplete="tel" inputMode="tel" required placeholder="Your phone number" /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@dealership.com" /></label>
        <label>How can we help?<textarea name="message" required rows="4" placeholder="Tell us about your dealership or what you would like to see." /></label>
        <button className="button button-primary" type="submit">Continue to email <span aria-hidden="true">→</span></button>
        <p className="form-note">This opens your email app with the request pre-filled. Direct form delivery will be enabled after email service setup.</p>
        {status && <p className="form-status" role="status">{status}</p>}
      </motion.form>
    </section>
  );
}
