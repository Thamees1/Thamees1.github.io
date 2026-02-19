import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      icon: 'cloud',
      skills: [
        { name: 'AWS', level: 'Advanced', tags: ['EC2', 'IAM', 'S3', 'VPC'], percentage: 90 },
        { name: 'Linux Administration', level: 'Advanced', tags: ['RHEL', 'Ubuntu'], percentage: 85 },
        { name: 'Windows Server', level: 'Intermediate', tags: ['IIS', 'AD'], percentage: 60 },
        { name: 'Infrastructure Provisioning', level: 'Advanced', tags: ['Terraform'], percentage: 80 },
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & CI/CD',
      icon: 'rocket_launch',
      skills: [
        { name: 'Jenkins', level: 'Expert', tags: ['Pipelines', 'Groovy'], percentage: 95 },
        { name: 'GitHub Actions', level: 'Advanced', tags: ['Workflows'], percentage: 85 },
        { name: 'Azure DevOps', level: 'Intermediate', tags: ['Boards', 'Pipelines'], percentage: 70 },
        { name: 'SonarQube', level: 'Advanced', tags: ['Code Quality'], percentage: 80 },
        { name: 'Build Tools', level: 'Advanced', tags: ['Maven', 'NPM'], percentage: 75 },
      ]
    },
    {
      id: 'containers',
      title: 'Containerization',
      icon: 'deployed_code',
      skills: [
        { name: 'Docker', level: 'Advanced', tags: ['Compose', 'Images'], percentage: 90 },
        { name: 'Nginx', level: 'Advanced', tags: ['Reverse Proxy', 'SSL'], percentage: 85 },
        { name: 'Kubernetes', level: 'Learning', tags: ['Pods', 'Services'], percentage: 40 },
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: 'database',
      skills: [
        { name: 'PostgreSQL', level: 'Advanced', tags: ['Backup', 'Restore'], percentage: 80 },
        { name: 'MySQL', level: 'Advanced', tags: ['Administration'], percentage: 75 },
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Observability',
      icon: 'monitoring',
      skills: [
        { name: 'Prometheus', level: 'Intermediate', tags: ['Metrics'], percentage: 70 },
        { name: 'Grafana', level: 'Intermediate', tags: ['Dashboards'], percentage: 70 },
        { name: 'New Relic', level: 'Intermediate', tags: ['APM'], percentage: 65 },
        { name: 'SigNoz', level: 'Intermediate', tags: ['Tracing'], percentage: 60 },
      ]
    }
  ];

  const handleDownloadResume = () => {
    // In a real app, this would be a link to a PDF file.
    // For this demo, we'll trigger the print dialog which allows saving as PDF.
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="p-1.5 bg-primary/10 rounded text-primary">
               <span className="material-symbols-outlined">terminal</span>
            </span>
            Service Inventory & Skills
          </h1>
          <p className="text-gray-400 text-sm mt-1 max-w-2xl font-mono">
            Manage technical resources, view expertise utilization metrics, and monitor skill health status across your infrastructure.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleDownloadResume}
            className="flex items-center justify-center gap-2 h-9 px-4 rounded bg-[#181611] border border-gray-700 text-white hover:bg-gray-800 hover:border-primary/50 transition-all text-sm font-medium group"
          >
            <span className="material-symbols-outlined text-lg group-hover:text-primary transition-colors">download</span>
            Download Resume (PDF)
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-console-dark/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-5 shadow-lg flex flex-col h-full hover:border-primary/30 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all group-hover:bg-primary/10"></div>

            <div className="flex items-center gap-3 mb-4 border-b border-gray-700/50 pb-3 relative z-10">
              <span className="p-2 bg-primary/10 rounded text-primary ring-1 ring-primary/20">
                <span className="material-symbols-outlined">{category.icon}</span>
              </span>
              <h2 className="text-lg font-bold text-white tracking-wide">{category.title}</h2>
            </div>

            <div className="flex-1 space-y-3 relative z-10">
              {category.skills.map((skill) => (
                <div key={skill.name} className="bg-[#27272a]/50 p-3 rounded border border-transparent hover:border-gray-600 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-white font-medium text-sm">{skill.name}</span>
                    <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded tracking-wider
                      ${skill.level === 'Expert' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                        skill.level === 'Advanced' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                        skill.level === 'Learning' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-gray-700 text-gray-300'}`}>
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Progress Bar */}
                  <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden mb-2">
                     <motion.div
                       className={`h-full rounded-full ${
                          skill.level === 'Expert' ? 'bg-purple-500' :
                          skill.level === 'Advanced' ? 'bg-green-500' :
                          skill.level === 'Learning' ? 'bg-blue-500' : 'bg-gray-500'
                       }`}
                       initial={{ width: 0 }}
                       whileInView={{ width: `${skill.percentage}%` }}
                       viewport={{ once: true }}
                       transition={{ duration: 1, delay: 0.2 }}
                     />
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {skill.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-gray-500 bg-[#181611] px-1.5 py-0.5 rounded border border-gray-700/50 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
