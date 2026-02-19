import React from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import { motion } from 'framer-motion';

const Home = () => {
  const { displayText: typedTitle } = useTypewriter('DevOps Engineer | Cloud Infrastructure | CI/CD Automation | Containerization', 30);
  const { displayText: typedName } = useTypewriter('Thameesh Kumar K S', 100);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-console-dark/80 backdrop-blur-md border border-gray-700/50 rounded-lg p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none animate-pulse-slow"></div>

        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative shrink-0"
          >
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-cover bg-center border-4 border-[#27272a] shadow-2xl ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
              style={{ backgroundImage: "url('/assets/profile.jpg')" }}
            ></div>
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#18181b] rounded-full flex items-center justify-center border border-gray-700">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            </div>
          </motion.div>

          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center gap-4 mb-2 flex-wrap">
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight min-h-[3.5rem]">
                  {typedName}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="text-primary inline-block ml-1"
                  >_</motion.span>
                </h1>
                <span className="bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full border border-green-500/20 font-mono tracking-wider shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                  SYSTEM ONLINE
                </span>
              </div>
              <p className="text-primary/80 text-sm md:text-lg font-mono tracking-wide min-h-[1.75rem]">
                {typedTitle}
              </p>
            </div>

            <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed border-l-2 border-primary/30 pl-4 py-1">
              DevOps Engineer with 2+ years of experience in cloud infrastructure, CI/CD automation, containerized deployments, and hybrid (AWS + On-Prem) production environments. Skilled in Jenkins, Docker, Nginx, and AWS. Currently strengthening expertise in Kubernetes.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {[
                { label: 'Location', value: 'Chennai, India', icon: 'location_on' },
                { label: 'Experience', value: '2+ Years', icon: 'history' },
                { label: 'Role', value: 'DevOps Engineer', icon: 'badge' },
                { label: 'Contact', value: '9360948981', icon: 'call', href: 'tel:9360948981' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                >
                  <p className="text-[10px] text-gray-500 mb-1 uppercase tracking-widest font-bold">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-white font-mono hover:text-primary transition-colors flex items-center gap-1 group/link">
                      <span className="material-symbols-outlined text-[16px] text-primary group-hover/link:scale-110 transition-transform">{item.icon}</span>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white font-mono flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">{item.icon}</span>
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dashboard Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Health Check Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-console-dark/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg flex flex-col justify-between hover:border-green-500/30 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] group"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white group-hover:text-green-400 transition-colors">System Health</h3>
            <span className="material-symbols-outlined text-green-500 animate-pulse">check_circle</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Status</span>
              <span className="text-xs text-green-400 font-bold bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">HEALTHY</span>
            </div>
            <div className="w-full bg-[#27272a] rounded-full h-1.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                className="bg-green-500 h-full shadow-[0_0_10px_#22c55e]"
              ></motion.div>
            </div>
            <div className="pt-2 grid grid-cols-2 gap-3 text-center">
              <div className="bg-[#27272a]/50 p-2 rounded border border-gray-700/30">
                <p className="text-[10px] text-gray-500 uppercase">Uptime</p>
                <p className="text-lg font-mono text-white font-bold">99.9%</p>
              </div>
              <div className="bg-[#27272a]/50 p-2 rounded border border-gray-700/30">
                <p className="text-[10px] text-gray-500 uppercase">Projects</p>
                <p className="text-lg font-mono text-white font-bold">10+</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Active Pipelines */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="bg-console-dark/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg hover:border-primary/30 transition-all hover:shadow-[0_0_20px_rgba(249,164,6,0.1)] group"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-white group-hover:text-primary transition-colors">Active Pipelines</h3>
            <Link to="/projects" className="text-[10px] uppercase font-bold text-primary hover:text-white transition-colors border border-primary/30 px-2 py-1 rounded hover:bg-primary/20">View Logs</Link>
          </div>
          <div className="space-y-5">
            {[
              { name: 'learning-k8s', status: 'Running', progress: 65, color: 'bg-primary' },
              { name: 'aws-cert', status: 'Queued', progress: 10, color: 'bg-gray-500' },
              { name: 'jenkins-ci', status: 'Success', progress: 100, color: 'bg-green-500' },
            ].map((pipeline) => (
              <div key={pipeline.name}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-gray-300 font-mono">{pipeline.name}</span>
                  <span className={`text-[10px] uppercase font-bold ${
                    pipeline.status === 'Running' ? 'text-primary animate-pulse' :
                    pipeline.status === 'Success' ? 'text-green-400' : 'text-gray-500'
                  }`}>{pipeline.status}</span>
                </div>
                <div className="w-full bg-[#27272a] rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pipeline.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`${pipeline.color} h-full relative`}
                  >
                    {pipeline.status === 'Running' && (
                       <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_1s_infinite]"></div>
                    )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Environment Status */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-console-dark/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg flex flex-col hover:border-blue-500/30 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] group"
        >
          <h3 className="font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">Environment Status</h3>
          <div className="flex-1 flex flex-col justify-center gap-3">
            {[
              { env: 'Production (AWS)', status: 'Online', color: 'green' },
              { env: 'Staging (On-Prem)', status: 'Online', color: 'green' },
              { env: 'Dev (Local)', status: 'Active', color: 'primary' },
            ].map((item) => (
              <div key={item.env} className={`flex items-center justify-between p-3 bg-[#27272a]/50 rounded border-l-2 ${
                item.color === 'green' ? 'border-green-500' : 'border-primary'
              } hover:bg-[#27272a] transition-colors`}>
                <span className="text-xs text-gray-300 font-medium font-mono">{item.env}</span>
                <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                   item.color === 'green' ? 'bg-green-500/10 text-green-400' : 'bg-primary/10 text-primary'
                }`}>{item.status}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links / Stats */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="bg-console-dark/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg hover:border-gray-500/50 transition-all flex flex-col justify-between group"
        >
           <h3 className="font-bold text-white mb-4 group-hover:text-gray-300 transition-colors">Deployment Metrics</h3>
           <div className="flex items-center gap-6 justify-center py-4">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" fill="transparent" r="56" stroke="#27272a" strokeWidth="8"></circle>
                  <motion.circle
                    initial={{ strokeDashoffset: 351 }}
                    whileInView={{ strokeDashoffset: 10 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    cx="64" cy="64" fill="transparent" r="56" stroke="#f9a406" strokeDasharray="351.8" strokeWidth="8" strokeLinecap="round"
                  ></motion.circle>
                </svg>
                <div className="absolute text-center">
                  <span className="text-3xl font-bold text-white block tracking-tighter">99%</span>
                  <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Success</span>
                </div>
              </div>
           </div>
           <div className="mt-auto text-center border-t border-gray-700/50 pt-3">
              <p className="text-xs text-gray-400 font-mono">Total Deployments: <span className="text-white font-bold">500+</span></p>
           </div>
        </motion.div>

      </div>

      {/* Installed Skills Preview */}
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.4 }}
         className="bg-console-dark/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-lg"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-white">Installed Configurations (Core Skills)</h3>
          <Link to="/skills" className="text-xs text-primary hover:underline flex items-center gap-1 group">
            View All Skills <span className="material-symbols-outlined text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { name: 'AWS', icon: 'cloud', color: 'text-orange-500', sub: 'Infrastructure' },
            { name: 'Docker', icon: 'deployed_code', color: 'text-blue-500', sub: 'Containerization' },
            { name: 'Jenkins', icon: 'settings_suggest', color: 'text-red-500', sub: 'CI/CD' },
            { name: 'Linux', icon: 'terminal', color: 'text-yellow-500', sub: 'Administration' },
            { name: 'Nginx', icon: 'dns', color: 'text-green-500', sub: 'Proxy & Web' },
            { name: 'PostgreSQL', icon: 'database', color: 'text-blue-400', sub: 'Database' },
          ].map((skill, idx) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -5, borderColor: 'rgba(249,164,6,0.5)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (idx * 0.05) }}
              className="bg-[#27272a]/50 p-4 rounded border border-transparent transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`material-symbols-outlined ${skill.color} text-2xl group-hover:scale-110 transition-transform`}>{skill.icon}</span>
                <span className="text-sm font-bold text-white">{skill.name}</span>
              </div>
              <p className="text-[10px] text-gray-500 font-mono">{skill.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Console Text */}
      <div className="pt-6 border-t border-gray-700/50 flex flex-col sm:flex-row justify-between text-[10px] text-gray-500 font-mono uppercase tracking-widest">
        <p>© 2026 Thameesh Kumar Portfolio. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <span>version 2.0.1-stable</span>
          <span className="text-green-500">● Systems Normal</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
