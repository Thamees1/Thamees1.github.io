import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience Log</h2>
      <div className="experience-list">
        {experience.map((item) => (
          <article key={item.period} className="panel">
            <small>{item.period}</small>
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            <ul>
              {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
