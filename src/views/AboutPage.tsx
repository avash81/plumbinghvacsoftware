import React, { useState } from 'react';
import { Wrench, ShieldCheck, Mail, MapPin, CheckCircle2, MessageSquare, Send } from 'lucide-react';

export const AboutPage: React.FC<{ onNavigate: (route: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <Wrench className="w-4 h-4" />
          <span>About PHS</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#16201f] tracking-tight leading-tight">
          Built for trade contractors, by trade specialists.
        </h1>

        <p className="text-base md:text-lg text-[#16201f]/80 font-body leading-relaxed">
          PHS provides honest, vendor-neutral research for field service software. We help trade businesses find the right tools without the marketing fluff.
        </p>
      </div>

      <div className="bg-white border border-[#dde3e1] rounded-2xl p-6 md:p-8 space-y-4 shadow-xs text-sm text-[#16201f]/85 font-body leading-relaxed">
        <h2 className="text-2xl font-bold font-display text-[#16201f]">
          Our Mission
        </h2>
        <p>
          We provide technical and pricing breakdowns specifically for US plumbing and HVAC companies. Our goal is to help you make the right software investment the first time.
        </p>
        <p>
          We know that what works for a 150-truck national commercial franchise is overkill (and financially crippling) for a 3-truck residential plumbing operator. Our job is to deliver transparent, reproducible analysis so you can make the right software investment the first time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl text-center space-y-1">
          <span className="text-3xl font-black font-display text-[#0e6e6a]">25+</span>
          <span className="text-xs font-bold block text-[#16201f] font-display">Evaluation Benchmarks</span>
          <span className="text-[11px] text-[#16201f]/60 block">Tested hands-on per tool</span>
        </div>
        <div className="p-5 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl text-center space-y-1">
          <span className="text-3xl font-black font-display text-[#0e6e6a]">100%</span>
          <span className="text-xs font-bold block text-[#16201f] font-display">FTC Compliant</span>
          <span className="text-[11px] text-[#16201f]/60 block">Transparent link disclosures</span>
        </div>
        <div className="p-5 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl text-center space-y-1">
          <span className="text-3xl font-black font-display text-[#0e6e6a]">Quarterly</span>
          <span className="text-xs font-bold block text-[#16201f] font-display">Rate Card Audits</span>
          <span className="text-[11px] text-[#16201f]/60 block">Continuous re-testing</span>
        </div>
      </div>
    </div>
  );
};

export const ContactPage: React.FC<{ onNavigate: (route: string) => void }> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', trade: 'Plumbing', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0e6e6a]/10 text-[#0e6e6a] text-xs font-bold uppercase tracking-wider font-display">
          <Mail className="w-4 h-4" />
          <span>Contact Our Research Team</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-[#16201f] tracking-tight leading-tight">
          A real person is on the other side.
        </h1>

        <p className="text-base md:text-lg text-[#16201f]/80 font-body leading-relaxed max-w-2xl">
          Not sure which software option fits your specific situation? Email us — we'll give you a straight answer. No chatbots, no automated runaround.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 pt-4">
          <div className="flex-1 p-5 bg-white border border-[#dde3e1] rounded-xl space-y-2">
            <h3 className="text-sm font-bold text-[#16201f] font-display">Direct Email</h3>
            <p className="text-lg font-black text-[#0e6e6a] font-display">hello@plumbinghvacsoftware.com</p>
            <p className="text-xs text-[#16201f]/60">We personally read and reply to every message within 2 business days.</p>
          </div>
          <div className="flex-1 p-5 bg-white border border-[#dde3e1] rounded-xl space-y-2">
            <h3 className="text-sm font-bold text-[#16201f] font-display">Office Location</h3>
            <p className="text-lg font-black text-[#16201f] font-display">Austin, Texas</p>
            <p className="text-xs text-[#16201f]/60">Researching US trade software since 2024.</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-[#16201f] rounded-2xl p-6 md:p-8 shadow-xs">
        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-display text-[#16201f]">Message Received.</h3>
            <p className="text-sm text-[#16201f]/75 max-w-md mx-auto">
              We've got your message. A real member of our editorial team will get back to you personally within 48 hours.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="mt-4 px-6 py-2.5 bg-[#16201f] text-white text-xs font-bold rounded-lg uppercase tracking-widest"
            >
              Return to Site
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#dde3e1]">
              <h2 className="text-xl font-bold font-display text-[#16201f]">Send us a Specific Question</h2>
              <p className="text-xs text-[#16201f]/60 mt-1">Whether you're a contractor with a tip or a business owner needing advice.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#16201f]/70 mb-1.5 font-display">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl text-sm focus:ring-2 focus:ring-[#0e6e6a] focus:outline-none"
                    placeholder="Mike Smith"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#16201f]/70 mb-1.5 font-display">
                    Your Business Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl text-sm focus:ring-2 focus:ring-[#0e6e6a] focus:outline-none"
                    placeholder="mike@mikesplumbing.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#16201f]/70 mb-1.5 font-display">
                  Your Primary Trade / Role
                </label>
                <select
                  value={formData.trade}
                  onChange={(e) => setFormData({ ...formData, trade: e.target.value })}
                  className="w-full p-3 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl text-sm focus:ring-2 focus:ring-[#0e6e6a] focus:outline-none appearance-none"
                >
                  <option value="Plumbing">Plumbing Contractor</option>
                  <option value="HVAC">HVAC Contractor</option>
                  <option value="Both">Plumbing & HVAC</option>
                  <option value="SoftwareVendor">Software Vendor</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-[#16201f]/70 mb-1.5 font-display">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-[#fbfaf8] border border-[#dde3e1] rounded-xl text-sm focus:ring-2 focus:ring-[#0e6e6a] focus:outline-none"
                  placeholder="Tell us about your team size and current biggest software headache..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0e6e6a] hover:bg-[#0a4f4c] text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Marcus & Elena</span>
              </button>
              <p className="text-[10px] text-center text-[#16201f]/40">
                We respect your privacy. No spam, just human answers.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
