import { useEffect, useRef } from "react";

const TechnicalSkill = [
  "React Native", "JavaScript", "REST API", "SQL", "Node.js", "Figma",
  "HTML", "CSS", "Social Media Specialist", "Data Analysis", "Project Management"
];

const softSkills = [
  "Leadership", "Effective Communication", "Team Collaboration", "Time Management",
  "Problem Solving", "Adaptability", "Proactive", "Strategic Decision-Making",
];

const tools = [
  { name: "Power BI", category: "Analytics" },
  { name: "Microsoft Excel", category: "Analytics" },
  { name: "Figma", category: "Design" },
  { name: "Canva", category: "Design" },
  { name: "CapCut / Premiere", category: "Video" },
  { name: "VS Code", category: "Dev" },
  { name: "Git / GitHub", category: "Dev" },
  { name: "MS Office Suite", category: "Productivity" },
  { name: "Trello / Jira", category: "PM" },
  { name: "Notion", category: "Productivity" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "Antigravity", category: "AI" },
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
    <section id="skills" className="bg-section-alt py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={(el) => { refs.current[0] = el; }} className="section-reveal mb-10 md:mb-12">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-accent-blue uppercase">Competencies</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-3">Skills & Additional</h2>
          <div className="w-10 md:w-12 h-1 bg-accent-blue rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Technical Skills */}
          <div ref={(el) => { refs.current[1] = el; }} className="section-reveal bg-background border border-border rounded-lg p-5 md:p-7 shadow-[var(--shadow-card)]">
            <h3 className="font-bold text-primary text-sm md:text-base mb-5">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {TechnicalSkill.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1.5 text-[10px] md:text-xs font-semibold rounded-md bg-primary text-primary-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div ref={(el) => { refs.current[2] = el; }} className="section-reveal section-reveal-delay-1 bg-background border border-border rounded-lg p-5 md:p-7 shadow-[var(--shadow-card)]">
            <h3 className="font-bold text-primary text-sm md:text-base mb-5">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1.5 text-[10px] md:text-xs font-semibold rounded-md border border-accent-blue text-accent-blue"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div ref={(el) => { refs.current[3] = el; }} className="section-reveal section-reveal-delay-2 bg-background border border-border rounded-lg p-5 md:p-7 shadow-[var(--shadow-card)] md:col-span-2">
            <h3 className="font-bold text-primary text-sm md:text-base mb-5">Tools & Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {tools.map((t) => (
                <div key={t.name} className="flex items-center justify-between px-4 py-2 rounded-md bg-secondary border border-border">
                  <span className="text-xs md:text-sm font-medium text-foreground">{t.name}</span>
                  <span className="text-[10px] text-muted-foreground ml-2">{t.category}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
