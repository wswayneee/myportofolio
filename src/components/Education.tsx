import { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    institution: "Universitas Klabat",
    degree: "Bachelor of Computer Science - Major in Informatics",
    year: "2021 – 2024",
    highlight:
      "Cumulative GPA 3.79/4.00 - Magna CumLaude.",
  },
];

export default function Education() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    refs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={(el) => { refs.current[0] = el; }}
          className="section-reveal mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase">Academic Background</span>
          <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Education</h2>
          <div className="w-12 h-1 bg-accent-blue rounded" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-border hidden md:block" />

          <div className="flex flex-col gap-10">
            {educationData.map((edu, i) => (
              <div
                key={i}
                ref={(el) => { refs.current[i + 1] = el; }}
                className="section-reveal md:pl-16 relative"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-accent-blue-light border-2 border-accent-blue items-center justify-center">
                  <GraduationCap size={16} className="text-accent-blue" />
                </div>

                <div className="bg-background border border-border rounded-lg p-6 shadow-[var(--shadow-card)] hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-primary text-lg">{edu.institution}</h3>
                      <p className="text-sm font-medium text-foreground mt-0.5">{edu.degree}</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue-light text-accent-blue whitespace-nowrap self-start sm:self-auto">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{edu.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
