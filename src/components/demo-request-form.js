"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const recipient = "vcarecrm.support@gmail.com";

export default function DemoRequestForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reduceMotion = useReducedMotion();

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          contact: data.get("contact"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error);

      form.reset();
      setStatus("Thanks—your demo request has been sent. We’ll reply soon.");
    } catch (error) {
      setStatus(error.message || "We could not send your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
        <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex="-1" autoComplete="off" /></label>
        <label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label>
        <label>Contact number<input name="contact" autoComplete="tel" inputMode="tel" required placeholder="Your phone number" /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@dealership.com" /></label>
        <label>How can we help?<textarea name="message" required rows="4" placeholder="Tell us about your dealership or what you would like to see." /></label>
        <button className="button button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending request…" : "Send demo request"} <span aria-hidden="true">→</span></button>
        <p className="form-note">Your request is sent directly to the V-Care team. We&apos;ll reply to the email address you provide.</p>
        {status && <p className="form-status" role="status">{status}</p>}
      </motion.form>
    </section>
  );
}
