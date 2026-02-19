import { useEffect, useRef } from "react";

const technicalSkills = [
  "Python", "JavaScript", "TypeScript", "React", "Node.js", "SQL",
  "PostgreSQL", "MongoDB", "REST APIs", "Git", "Docker", "Kubernetes",
];

const softSkills = [
  "Strategic Thinking", "Stakeholder Management", "Problem Solving",
  "Leadership", "Communication", "Analytical Thinking", "Team Collaboration", "Adaptability",
];

const tools = [
  { name: "Power BI", category: "Analytics" },
  { name: "Tableau", category: "Analytics" },
  { name: "Jira", category: "PM" },
  { name: "Confluence", category: "PM" },
  { name: "Figma", category: "Design" },
  { name: "VS Code", category: "Dev" },
  { name: "Postman", category: "Dev" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "MS Office Suite", category: "Productivity" },
  { name: "Notion", category: "Productivity" },
  { name: "Slack", category: "Comm" },
];

const certifications = [
  { name: "AWS Certified Solutions Architect – Associate", year: "2023" },
  { name: "Google Project Management Certificate", year: "2022" },
  { name: "Certified Business Analysis Professional (CBAP)", year: "2022" },
  { name: "Scrum Master Certification (PSM I)", year: "2021" },
];

export default function Additional() {
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
    <section id="skills" className="bg-section-alt py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={(el) => { refs.current[0] = el; }} className="section-reveal mb-12">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase">Competencies</span>
          <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Skills & Additional</h2>
          <div className="w-12 h-1 bg-accent-blue rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div ref={(el) => { refs.current[1] = el; }} className="section-reveal bg-background border border-border rounded-lg p-7 shadow-[var(--shadow-card)]">
            <h3 className="font-bold text-primary text-base mb-5">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-semibold rounded-md bg-primary text-primary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div ref={(el) => { refs.current[2] = el; }} className="section-reveal section-reveal-delay-1 bg-background border border-border rounded-lg p-7 shadow-[var(--shadow-card)]">
            <h3 className="font-bold text-primary text-base mb-5">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-semibold rounded-md border border-accent-blue text-accent-blue"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div ref={(el) => { refs.current[3] = el; }} className="section-reveal section-reveal-delay-2 bg-background border border-border rounded-lg p-7 shadow-[var(--shadow-card)] md:col-span-2">
            <h3 className="font-bold text-primary text-base mb-5">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {tools.map((t) => (
                <div key={t.name} className="flex items-center justify-between px-4 py-2.5 rounded-md bg-secondary border border-border">
                  <span className="text-sm font-medium text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">{t.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div ref={(el) => { refs.current[4] = el; }} className="section-reveal section-reveal-delay-3 bg-background border border-border rounded-lg p-7 shadow-[var(--shadow-card)] md:col-span-2">
            <h3 className="font-bold text-primary text-base mb-5">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div key={c.name} className="flex items-center justify-between gap-4 px-4 py-3 rounded-md bg-accent-blue-light border border-accent-blue/20">
                  <span className="text-sm font-medium text-primary">{c.name}</span>
                  <span className="text-xs font-bold text-accent-blue whitespace-nowrap">{c.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
