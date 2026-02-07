import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>System Specifications</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel">
            <h3>{group.title}</h3>
            <div className="chips">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
