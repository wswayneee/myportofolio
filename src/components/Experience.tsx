import { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "PT. Teknologi Maju Bersama",
    position: "Senior Business Analyst",
    period: "Jan 2023 – Present",
    bullets: [
      "Led end-to-end business process re-engineering for 3 core operational units, reducing cycle time by 34%.",
      "Developed comprehensive requirements documentation and functional specifications for a $2M ERP implementation project.",
      "Facilitated over 80 stakeholder workshops and sprint reviews across cross-functional teams of 20+ members.",
      "Introduced data-driven KPI dashboards using Power BI, increasing decision-making speed by 40%.",
      "Coordinated with external vendors and internal IT teams to ensure on-time, on-budget delivery of digital initiatives.",
    ],
  },
  {
    company: "Startup Inovasi Digital",
    position: "Software Engineer",
    period: "Jul 2022 – Dec 2022",
    bullets: [
      "Built and deployed 4 RESTful microservices using Node.js and PostgreSQL, serving 10,000+ daily active users.",
      "Improved API response time by 28% through query optimization and Redis caching strategy.",
      "Collaborated with product and design teams in an Agile environment with 2-week sprint cycles.",
    ],
  },
  {
    company: "PT. Konsultan Strategi Nusantara",
    position: "Business Analyst Intern",
    period: "Jan 2022 – Jun 2022",
    bullets: [
      "Conducted market research and competitive analysis for 5 FMCG clients across Southeast Asia.",
      "Prepared executive-level presentations and strategic recommendation reports for C-suite stakeholders.",
      "Supported project management activities including risk assessment, timeline tracking, and status reporting.",
    ],
  },
];

export default function Experience() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.08 }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="bg-section-alt py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={(el) => { refs.current[0] = el; }} className="section-reveal mb-12">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase">Career History</span>
          <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Work Experience</h2>
          <div className="w-12 h-1 bg-accent-blue rounded" />
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="section-reveal bg-background border border-border rounded-lg p-7 shadow-[var(--shadow-card)] hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 rounded-md bg-accent-blue-light flex items-center justify-center flex-shrink-0">
                    <Briefcase size={17} className="text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg leading-tight">{exp.position}</h3>
                    <p className="text-sm font-semibold text-muted-foreground mt-0.5">{exp.company}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-secondary text-muted-foreground whitespace-nowrap self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2.5 pl-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
