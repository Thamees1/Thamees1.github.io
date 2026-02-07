import { motion } from 'framer-motion';

const journey = [
  { year: '2023', title: 'Trainee Technical Support Engineer', detail: 'Dell field support training and hardware troubleshooting foundation.' },
  { year: '2024', title: 'Technical Support Engineer', detail: 'Managed 150+ assets, improved resolution speed by 30%, and handled M365/Entra administration.' },
  { year: '2025', title: 'Digital Transformation Engineer (DevOps)', detail: 'Built CI/CD automation, AWS infrastructure, and full observability workflows.' },
];

export default function About() {
  return (
    <section id="journey" className="section">
      <h2>From Support to DevOps</h2>
      <p className="section-intro">From troubleshooting hardware to orchestrating cloud infrastructure with automation and reliability mindset.</p>
      <div className="timeline">
        {journey.map((item, i) => (
          <motion.div key={item.year} className="timeline-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
