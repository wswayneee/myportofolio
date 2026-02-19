import { useEffect, useRef } from "react";
import { Users } from "lucide-react";

const organizations = [
  {
    name: "BEM (Badan Eksekutif Mahasiswa) Universitas Indonesia",
    role: "Head of Research & Development Division",
    year: "2020 – 2021",
    contributions: [
      "Led a 15-member team in producing 8 policy research papers adopted by the university board.",
      "Organized a national student leadership summit attended by 500+ participants from 30 universities.",
      "Coordinated inter-organization collaboration programs with government and private sector partners.",
    ],
  },
  {
    name: "AIESEC Indonesia – Local Committee UI",
    role: "Vice President – Business Development",
    year: "2019 – 2020",
    contributions: [
      "Secured 12 corporate partnerships generating IDR 150M in sponsorship revenue for exchange programs.",
      "Managed outreach and sales strategies for international internship exchange programs.",
      "Mentored 25+ junior members in professional skills and project management competencies.",
    ],
  },
  {
    name: "Computer Science Student Association (ILKOMUNSCI)",
    role: "Secretary General",
    year: "2018 – 2019",
    contributions: [
      "Oversaw administrative and operational functions of a 200+ member organization.",
      "Initiated the first annual Tech Innovation Fair, attracting 800 attendees and 15 industry sponsors.",
    ],
  },
];

export default function Organizations() {
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
    <section id="organizations" className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={(el) => { refs.current[0] = el; }} className="section-reveal mb-12">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase">Leadership</span>
          <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Organizational Experience</h2>
          <div className="w-12 h-1 bg-accent-blue rounded" />
        </div>

        <div className="flex flex-col gap-6">
          {organizations.map((org, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="section-reveal border border-border rounded-lg p-7 hover:shadow-[var(--shadow-card)] transition-shadow"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-10 h-10 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                    <Users size={17} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-base leading-tight">{org.name}</h3>
                    <p className="text-sm font-semibold text-accent-blue mt-1">{org.role}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-semibold bg-accent-blue-light text-accent-blue whitespace-nowrap self-start sm:self-auto">
                  {org.year}
                </span>
              </div>
              <ul className="space-y-2.5 pl-1">
                {org.contributions.map((c, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-foreground leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {c}
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
