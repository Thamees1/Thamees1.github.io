export const projects = [
  {
    name: 'CI/CD Pipeline Automation',
    problem: 'Manual deployment process caused delays and release risks.',
    solution: 'Built automated Jenkins pipelines with SonarQube quality and security gates.',
    impact: 'Faster releases with improved code quality and fewer deployment errors.',
    stack: ['Jenkins', 'SonarQube', 'GitHub', 'Docker'],
  },
  {
    name: 'Multi-Environment Infrastructure',
    problem: 'Deployments across AWS and on-prem environments were inconsistent.',
    solution: 'Standardized deployment flow with Nginx reverse proxy, SSL/TLS, and DNS routing.',
    impact: 'Reliable, seamless deployments across Linux/Windows and cloud/on-prem servers.',
    stack: ['AWS EC2', 'Nginx', 'SSL/TLS', 'Linux'],
  },
  {
    name: 'Monitoring & Alerting Platform',
    problem: 'Low visibility into uptime, latency, and service health.',
    solution: 'Implemented observability stack with Prometheus, Grafana, New Relic, and SigNoz.',
    impact: 'Proactive issue detection and improved service reliability.',
    stack: ['Prometheus', 'Grafana', 'New Relic', 'SigNoz'],
  },
  {
    name: 'Asset Management Optimization',
    problem: 'Tracking 150+ assets lacked operational consistency.',
    solution: 'Streamlined asset lifecycle management and weekly audit process.',
    impact: '99.9% uptime support readiness and 30% faster ticket resolution.',
    stack: ['Microsoft 365', 'Entra', 'Operations Process'],
  },
];
