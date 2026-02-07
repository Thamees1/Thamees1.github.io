import { motion } from 'framer-motion';
import { MapPin, Activity } from 'lucide-react';

const metrics = [
  ['99.9%', 'Uptime Guaranteed'],
  ['150+', 'Systems Managed'],
  ['Active', 'CI/CD Pipelines'],
  ['2+ Years', 'Experience'],
];

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-main">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="status-pill"><Activity size={14} /> SYSTEMS_ONLINE</span>
          <h1>
            THAMEESH <span>KUMAR K S</span>
          </h1>
          <p>
            Building scalable, secure, and reliable systems through automation and observability.
          </p>
          <div className="hero-meta">
            <span><MapPin size={14} /> Chennai, India</span>
            <span className="pulse">Open to opportunities</span>
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact</a>
          </div>
        </motion.div>
        <motion.div className="monitor-card" initial={{ opacity: 0, x: 26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="mono">system_monitor.sh</p>
          <div className="bar"><span style={{ width: '92%' }} /></div>
          <div className="row"><span>Cluster Status</span><strong>Healthy</strong></div>
          <div className="bar blue"><span style={{ width: '78%' }} /></div>
          <div className="grid-two">
            <div><small>Pods Active</small><strong>42</strong></div>
            <div><small>Latency</small><strong>120ms</strong></div>
          </div>
        </motion.div>
      </div>
      <div className="metrics-grid">
        {metrics.map(([value, label]) => (
          <article key={label} className="metric-card">
            <small>{label}</small>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
