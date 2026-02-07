export default function Monitoring() {
  return (
    <section id="dashboard" className="section">
      <h2>Live Monitoring Dashboard</h2>
      <div className="dashboard">
        <div className="panel"><small>CPU Usage</small><strong>45%</strong></div>
        <div className="panel"><small>Memory</small><strong>12.4GB / 16GB</strong></div>
        <div className="panel"><small>Response Time</small><strong>120ms</strong></div>
        <div className="panel"><small>Active Services</small><strong>8/8</strong></div>
        <div className="panel"><small>Uptime</small><strong>99.9%</strong></div>
      </div>
    </section>
  );
}
