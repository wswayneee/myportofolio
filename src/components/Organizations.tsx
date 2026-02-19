import { useEffect, useRef } from "react";
import { Users } from "lucide-react";

const organizations = [
  {
    name: "Student Association of Computer Science",
    role: "President",
    year: "August 2024 – December 2024",
    contributions: [
      "Established a mentorship program for first-year students, matching them with upper-year mentors to provide academic and personal support, resulting in improved student retention rates.",
      "Increased student participation in events and activities by 90% by working with the executive team to develop engaging initiatives that resonated with the student body.",
    ],
  },
  {
    name: "Bank Indonesia",
    role: "Genbi Parliamentary",
    year: "January 2023 – December 2023",
    contributions: [
      "Managed GenBI community service events, collaborating with government and Paragon Corporation to empower remote communities through education (math, English, civics) and donations of essential supplies, directly addressing local needs.",
      "Executed financial literacy campaigns for 'Cinta Bangga Paham Rupiah' and QRIS payment systems, raising awareness about currency preservation, counterfeit detection, and digital payment adoption among UMKM in North Sulawesi.",
      "Organized outreach programs in remote areas, including road repairs, medical check-ups, and environmental cleanups with Lembeh Island Resort, creating measurable improvements in community infrastructure and sustainability.",
    ],
  },
  {
    name: "Google Developer Student Club (GDSC)",
    role: "Core Team AI and Public Relations ",
    year: "August 2022 – August 2023",
    contributions: [
      "Led weekly AI training sessions for GDSC members, teaching AI fundamentals, basic coding, and project development. Reviewed lecture content after each session, ensuring members' understanding and contributing to the successful completion of their projects.",
      "Promoted GDSC events and initiatives as a Public Relations representative, raising awareness within the faculty through targeted announcements and campaigns, resulting in increased participation and community growth within the faculty.",
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
    <section id="organizations" className="bg-background py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={(el) => { refs.current[0] = el; }} className="section-reveal mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-3">Organizational Experience</h2>
          <div className="w-10 md:w-12 h-1 bg-accent-blue rounded" />
        </div>

        <div className="flex flex-col gap-6">
          {organizations.map((org, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="section-reveal border border-border rounded-lg p-5 md:p-7 hover:shadow-[var(--shadow-card)] transition-shadow"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="mt-0.5 w-9 h-9 md:w-10 md:h-10 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                    <Users size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-base md:text-lg leading-tight">{org.name}</h3>
                    <p className="text-xs md:text-sm font-semibold text-accent-blue mt-1">{org.role}</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] md:text-xs font-semibold bg-accent-blue-light text-accent-blue whitespace-nowrap self-start">
                  {org.year}
                </span>
              </div>
              <ul className="space-y-3 pl-1">
                {org.contributions.map((c, j) => (
                  <li key={j} className="flex items-start gap-3 text-xs md:text-sm text-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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
