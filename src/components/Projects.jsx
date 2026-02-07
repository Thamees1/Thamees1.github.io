import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Infrastructure Blueprint: Case Studies</h2>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p><b>Problem:</b> {project.problem}</p>
            <p><b>Solution:</b> {project.solution}</p>
            <p><b>Impact:</b> {project.impact}</p>
            <div className="chips">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
