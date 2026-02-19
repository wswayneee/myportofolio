import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-reveal">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-accent-blue uppercase">Get In Touch</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-3">Contact Me</h2>
          <div className="w-10 md:w-12 h-1 bg-accent-blue rounded mb-10 md:mb-12" />

          <div className="grid md:grid-cols-2 gap-10 md:gap-14">
            {/* Contact Info */}
            <div>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-8">
                I welcome professional inquiries, collaboration opportunities, and meaningful
                conversations. Please feel free to reach out through any of the channels below
                or send a direct message using the contact form.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:waynestelylamansiang@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-accent-blue-light flex items-center justify-center group-hover:bg-accent-blue transition-colors">
                    <Mail size={16} className="text-accent-blue group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">Email</p>
                    <p className="text-xs md:text-sm font-semibold text-primary">waynestelylamansiang@gmail.com</p>
                  </div>
                </a>

                <a
                  href="http://www.linkedin.com/in/wayne-stely"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-accent-blue-light flex items-center justify-center group-hover:bg-accent-blue transition-colors">
                    <Linkedin size={16} className="text-accent-blue group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">LinkedIn</p>
                    <p className="text-xs md:text-sm font-semibold text-primary">linkedin.com/in/wayne-stely</p>
                  </div>
                </a>

                <a
                  href="https://github.com/wswayneee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-md bg-accent-blue-light flex items-center justify-center group-hover:bg-accent-blue transition-colors">
                    <Github size={16} className="text-accent-blue group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-medium">GitHub</p>
                    <p className="text-xs md:text-sm font-semibold text-primary">github.com/wswayneee</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-4 md:mt-0">
              {sent ? (
                <div className="flex items-center justify-center h-full min-h-[280px] bg-accent-blue-light rounded-lg border border-accent-blue/20">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center mx-auto mb-4">
                      <Send size={20} className="text-primary-foreground" />
                    </div>
                    <p className="font-semibold text-primary text-sm md:text-base">Message sent successfully!</p>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">I will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                  <div>
                    <label className="block text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 md:py-3 text-xs md:text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-2.5 md:py-3 text-xs md:text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Your message here..."
                      className="w-full px-4 py-2.5 md:py-3 text-xs md:text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/40 focus:border-accent-blue transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground font-semibold text-xs md:text-sm rounded-md hover:opacity-90 transition-opacity mt-2"
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
