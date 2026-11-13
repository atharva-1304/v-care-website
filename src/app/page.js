import HeroSection from "../components/hero-section";
import "./sections.css";
import DashboardShowcase from "../components/dashboard-showcase";
import ScrollNav from "../components/scroll-nav";
import FeatureGrid from "../components/feature-grid";
import HowItWorks from "../components/how-it-works";
import DemoRequestForm from "../components/demo-request-form";
import ChallengesSection from "../components/challenges-section";

export default function Home() {
  return (
    <main className="site-shell">
      <div className="hero-glow" aria-hidden="true" />
      <HeroSection />
      <ScrollNav />
      <DashboardShowcase />

      <ChallengesSection />

      <section className="features section-block" id="features" aria-labelledby="features-title">
        <div className="section-intro">
          <p className="eyebrow">Explore the platform</p>
          <h2 id="features-title">Everything in one place.</h2>
          <p>Discover how each module supports your dealership&apos;s daily customer-care and service workflow.</p>
        </div>
        <FeatureGrid />
      </section>

      <HowItWorks />
      <DemoRequestForm />
      <footer className="site-footer" id="contact">
        <div className="footer-wordmark" aria-hidden="true">V-CARE</div>
        <div className="footer-content">
          <div><p className="eyebrow">Vehicle customer care &amp; CRM</p><p>Clearer dealership operations, one connected desktop workspace at a time.</p></div>
          <div><h2>Contact</h2><a href="mailto:vcarecrm.support@gmail.com">vcarecrm.support@gmail.com</a></div>
          <div><h2>Explore</h2><a href="#product">Product</a><a href="#features">Features</a><a href="#how-it-works">How it works</a></div>
        </div>
        <p className="footer-bottom">© 2026 V-Care. Product website.</p>
      </footer>
    </main>
  );
}
