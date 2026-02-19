import { useEffect, useRef } from "react";

export default function Summary() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="summary" className="bg-section-alt py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-reveal">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase">About Me</span>
          <h2 className="text-3xl font-bold text-primary mt-2 mb-8">Professional Summary</h2>
          <div className="w-12 h-1 bg-accent-blue rounded mb-10" />
          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-8 font-light">
              A results-driven professional with over{" "}
              <span className="font-semibold text-primary">5 years of experience</span> spanning
              business analysis, software engineering, and project management across fast-paced
              corporate environments. Adept at translating complex business requirements into
              actionable technical solutions, driving cross-functional alignment, and delivering
              projects within scope, schedule, and budget constraints.
            </p>
            <p className="text-base text-foreground leading-8 font-light mt-5">
              Demonstrated expertise in{" "}
              <span className="font-semibold text-primary">data analytics, process optimization</span>,
              and agile methodologies, consistently delivering measurable improvements in operational
              efficiency and stakeholder satisfaction. Possesses a strategic mindset combined with
              strong interpersonal skills, enabling effective collaboration with C-level executives,
              technical teams, and external partners alike.
            </p>
            <p className="text-base text-foreground leading-8 font-light mt-5">
              Committed to continuous professional development and leveraging emerging technologies to
              build scalable, high-impact solutions that advance organizational objectives and create
              sustainable competitive advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
