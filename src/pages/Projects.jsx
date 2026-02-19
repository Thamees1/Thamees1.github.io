import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'CI/CD Automation Pipeline',
      tech: ['Jenkins', 'Docker', 'AWS', 'Groovy'],
      description: 'Designed and maintained Jenkins multibranch pipelines, reducing manual deployment effort by 60%. Automated backend and frontend deployments across AWS and on-premise environments.',
      status: 'Online',
      type: 'Automation',
      icon: 'settings_suggest'
    },
    {
      id: 2,
      name: 'ERPNext Production Deployment',
      tech: ['Docker Compose', 'Nginx', 'Python', 'MariaDB'],
      description: 'Managed ERPNext multi-service production deployment using Docker Compose. Configured Nginx reverse proxy with SSL/TLS termination and backend routing.',
      status: 'Active',
      type: 'Infrastructure',
      icon: 'dns'
    },
    {
      id: 3,
      name: 'Hybrid Cloud Infrastructure',
      tech: ['AWS EC2', 'S3', 'IAM', 'VPC'],
      description: 'Provisioned and managed AWS EC2 instances, IAM roles, and S3 storage with automated backup strategies. Implemented environment segregation for Dev, QA, and Production systems.',
      status: 'Stable',
      type: 'Cloud',
      icon: 'cloud'
    },
    {
      id: 4,
      name: 'Monitoring Stack',
      tech: ['Prometheus', 'Grafana', 'New Relic', 'SigNoz'],
      description: 'Implemented infrastructure monitoring using Prometheus and Grafana dashboards. Integrated New Relic and SigNoz for application performance monitoring.',
      status: 'Running',
      type: 'Observability',
      icon: 'monitoring'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
          <span className="p-2 bg-primary/10 rounded-lg text-primary">
            <span className="material-symbols-outlined">folder_open</span>
          </span>
          Deployed Projects
        </h1>
        <p className="text-gray-400 max-w-2xl font-mono">
          Catalog of deployed services, microservices, and automation scripts. Each project represents a successful deployment in a production or staging environment.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-console-dark/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg hover:border-primary/50 hover:shadow-[0_0_20px_rgba(249,164,6,0.1)] transition-all group flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary/10 pointer-events-none"></div>

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <span className="bg-[#27272a] p-2 rounded text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-black transition-colors">
                  <span className="material-symbols-outlined">{project.icon}</span>
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{project.type}</p>
                </div>
              </div>
              <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs border border-green-500/20 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                {project.status}
              </span>
            </div>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-1 relative z-10">
              {project.description}
            </p>

            <div className="mt-auto relative z-10 border-t border-gray-700/50 pt-4">
              <div className="flex justify-between items-end">
                <div>
                   <p className="text-[10px] text-gray-500 mb-2 uppercase tracking-widest font-bold">Tech Stack</p>
                   <div className="flex flex-wrap gap-2">
                     {project.tech.map((tech) => (
                       <span key={tech} className="px-2 py-1 bg-[#181611]/80 text-gray-400 text-[10px] rounded border border-gray-700/50 font-mono hover:text-white hover:border-gray-500 transition-colors">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>

                <button className="text-primary hover:text-white transition-colors">
                  <span className="material-symbols-outlined">open_in_new</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
