import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Initiate Handshake</h2>
      <p>Let's build reliable systems together.</p>
      <div className="contact-grid">
        <a className="panel" href="mailto:thameesh31052000@gmail.com"><Mail size={16} /> thameesh31052000@gmail.com</a>
        <a className="panel" href="tel:+919360948981"><Phone size={16} /> +91 9360948981</a>
        <a className="panel" href="https://linkedin.com/in/thameesh-kumar-051a1b239" target="_blank" rel="noreferrer"><Linkedin size={16} /> linkedin.com/in/thameesh-kumar-051a1b239</a>
      </div>
    </section>
  );
}
