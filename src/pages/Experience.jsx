import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Digital Transformation Engineer (DevOps)',
      company: 'Ideassion Technology Solutions',
      period: 'July 2025 – Present',
      location: 'Chennai, India',
      status: 'RUNNING',
      statusColor: 'text-green-400 bg-green-400/10 border-green-400/20',
      description: [
        'Designed and maintained Jenkins multibranch pipelines, reducing manual deployment effort by 60%.',
        'Automated backend and frontend deployments across AWS and on-premise environments.',
        'Integrated SonarQube for static code analysis and enforced quality gates.',
        'Provisioned and managed AWS EC2, IAM, S3 with automated backups.',
        'Managed ERPNext multi-service production deployment with Docker Compose.'
      ],
      tags: ['Jenkins', 'AWS', 'Docker', 'SonarQube', 'Nginx']
    },
    {
      id: 2,
      role: 'Technical Support Engineer',
      company: 'Ideassion Technology Solutions',
      period: 'March 2024 – June 2025',
      location: 'Chennai, India',
      status: 'COMPLETED',
      statusColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      description: [
        'Managed 150+ laptops and servers, maintaining 99% operational uptime.',
        'Administered Microsoft 365 and Microsoft Entra environments.',
        'Configured IIS, Apache, and Nginx web servers.',
        'Supported CI/CD tool troubleshooting (GitHub, Jenkins, SonarQube).'
      ],
      tags: ['Technical Support', 'Microsoft 365', 'IIS', 'Nginx']
    },
    {
      id: 3,
      role: 'Trainee – Technical Support Engineer',
      company: 'Alsync Global Solutions Private Limited',
      period: 'July 2023 – August 2023',
      location: 'Chennai, India',
      status: 'ARCHIVED',
      statusColor: 'text-gray-400 bg-gray-400/10 border-gray-400/20',
      description: [
        'Completed Dell Field Technical Support training.',
        'Performed hardware diagnostics and component-level troubleshooting.',
        'Diagnosed and replaced faulty components including RAM, HDD/SSD.'
      ],
      tags: ['Hardware', 'Troubleshooting', 'Dell']
    }
  ];

  const education = [
    {
      id: 4,
      degree: 'Master of Computer Applications (MCA)',
      school: 'Noorul Islam University',
      period: '2021 – 2023',
      grade: '78%',
      status: 'GRADUATED',
      statusColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20'
    },
    {
      id: 5,
      degree: 'Bachelor of Computer Applications (BCA)',
      school: 'Manonmaniam Sundaranar University',
      period: '2018 – 2021',
      grade: '73%',
      status: 'GRADUATED',
      statusColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-12">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3"
        >
          <span className="p-2 bg-primary/10 rounded-lg text-primary ring-1 ring-primary/20">
            <span className="material-symbols-outlined">rocket_launch</span>
          </span>
          Deployment History
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl font-mono text-sm leading-relaxed"
        >
          System Log of professional experience, infrastructure upgrades, and career milestones. View the timeline of executed roles and project deployments.
        </motion.p>
      </div>

      <div className="relative pl-0 md:pl-8 border-l border-gray-800 ml-4 md:ml-0 space-y-16">

        {/* Experience Section */}
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[45px] top-0 hidden md:flex items-center justify-center size-10 rounded-full border-4 border-background-dark bg-[#18181b] group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(249,164,6,0.3)] transition-all z-10">
              <span className="material-symbols-outlined text-primary text-sm">deployed_code</span>
            </div>

            <div className="bg-console-dark/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 md:p-8 shadow-lg hover:border-primary/30 transition-all relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-tr-lg"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-gray-700/50 pb-4 relative z-10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                  <p className="text-primary font-mono text-sm mt-1 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px]">business</span>
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border tracking-wider ${exp.statusColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${exp.status === 'RUNNING' ? 'bg-green-400 animate-pulse' : 'bg-current'}`}></span>
                    {exp.status}
                  </span>
                  <span className="text-gray-500 text-xs font-mono bg-black/20 px-2 py-1 rounded">{exp.period}</span>
                </div>
              </div>

              <ul className="list-none ml-0 space-y-3 text-gray-300 text-sm mb-6 relative z-10">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <span className="text-primary mt-1.5 text-[10px] group-hover/item:text-white transition-colors">➜</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 relative z-10 pt-4 border-t border-gray-700/30">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-[#27272a]/50 text-gray-400 text-[10px] uppercase font-bold tracking-wider rounded border border-transparent hover:border-primary/30 hover:text-white hover:bg-primary/10 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Education Section Header */}
        <div className="relative pt-12">
            <div className="absolute -left-[43px] md:-left-[47px] top-13 hidden md:flex items-center justify-center size-10 rounded-full bg-background-dark z-10 border-4 border-background-dark">
              <div className="w-full h-full bg-[#18181b] rounded-full flex items-center justify-center border border-gray-700">
                 <span className="material-symbols-outlined text-gray-400 text-sm">school</span>
              </div>
            </div>
             <h2 className="text-2xl font-bold text-white mb-8 ml-2 md:ml-0 flex items-center gap-2">
               Education Logs
               <div className="h-px bg-gray-800 flex-1 ml-4"></div>
             </h2>
        </div>

        {/* Education Items */}
        {education.map((edu, idx) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative group"
          >
            <div className="bg-console-dark/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg hover:border-purple-500/30 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm mt-1">{edu.school}</p>
                </div>
                <div className="flex flex-col items-end gap-1 text-right">
                   <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border tracking-wider uppercase ${edu.statusColor}`}>
                    {edu.status}
                  </span>
                  <span className="text-gray-500 text-xs font-mono">{edu.period}</span>
                  <span className="text-purple-400 text-xs font-bold bg-purple-500/10 px-2 py-0.5 rounded">Score: {edu.grade}</span>
                </div>
               </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Experience;
