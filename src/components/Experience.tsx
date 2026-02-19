import { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Sales Management",
    position: "Telkomsel Indonesia",
    location: "Balikpapan, Indonesia",
    period: "Nov 2025 – Present",
    bullets: [
      "Developed and implemented a division website to transform manual processes into a more efficient, accessible, and streamlined digital system, while also creating data visualizations and interactive dashboards using Power BI to present insights clearly and effectively.",
      "Prepared digital program performance reports and managed program budget administration, while assisting in the planning and execution of event programs, including coordination and documentation.",
      "Designed logos and developed creative materials to support programs and events, compiled comprehensive internal program reports, and processed as well as analyzed data using Microsoft Excel to support program evaluation and informed decision-making.",
    ],
  },
  {
    company: "Social Media, Information Technology",
    position: "DPR RI - Felly Estelita Runtuwene",
    location: "Manado, Indonesia",
    period: "Feb 2024 – Sep 2025",
    bullets: [
      "I previously worked at the House of Representatives of the Republic of Indonesia (DPR RI), where I was responsible for managing social media platforms, including content planning, video editing, poster design, and on-site documentation. I independently handled the entire creative process to ensure consistent and engaging public communication.",
      "In addition, I delegated tasks within the team, managed project timelines, monitored expenses, and provided daily progress reports directly to the Member of Parliament (Anggota DPR RI). I ensured that all programs and activities were executed efficiently and aligned with planned objectives.",
      "I also served as a personal assistant, overseeing financial management, expense tracking, and property administration. Furthermore, I assisted in drafting scripts for public outreach initiatives, community engagement programs, and formal meetings with fellow council members, ensuring clear and effective communication in every engagement.",
      "Managed social media campaigns (Instagram, TikTok, Facebook) for an Anggota DPR RI, achieving 500K+ views in 8 days, gaining 20K active followers, and contributing to the Anggota DPR RI’s successful re-election for a second term.",
    ],
  },
  {
    company: "Teaching Assistant for National Research",
    position: "Universitas Klabat",
    location: "Manado, Indonesia",
    period: "Aug 2024 - Nov 2024",
    bullets: [
      "Supported lecturers in assessing students’ research preferences by designing and implementing a structured feedback system to collect data from students across Economics, Education, and Computer Science majors.",
      "Streamlined the data collection process by gathering feedback through surveys and analyzing student responses regarding their interest in conducting research and journal reading habits.",
      "Reduced lecturers' workload by compiling and organizing the collected data into actionable insights, enabling lecturers to focus on mentoring and research guidance rather than administrative tasks.",
      "Facilitated efficient decision-making for lecturers by providing comprehensive reports summarizing student preferences and research interests, leading to a significant reduction in time spent on manual data collection.",
    ],
  },
  {
    company: "Teaching Assistant",
    position: "Computer Science Faculty",
    location: "Manado, Indonesia",
    period: "Aug 2024 – Dec 2024",
    bullets: [
      "Assisted lecturers by monitoring classes during examinations, ensuring compliance with academic integrity policies.",
      "Graded assignments and exams with accuracy and consistency, providing constructive feedback to students.",
      "Provided mentorship and delivered class sessions during the lecturer’s absence, ensuring continuity in the learning process.",
      "Reduced lecturers' administrative workload, enabling them to focus on delivering high-quality lectures and research.",
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
    <section id="experience" className="bg-section-alt py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={(el) => { refs.current[0] = el; }} className="section-reveal mb-10 md:mb-12">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-accent-blue uppercase">Career History</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-3">Work Experience</h2>
          <div className="w-10 md:w-12 h-1 bg-accent-blue rounded" />
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el; }}
              className="section-reveal bg-background border border-border rounded-lg p-5 md:p-7 shadow-[var(--shadow-card)] hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="mt-0.5 w-9 h-9 md:w-10 md:h-10 rounded-md bg-accent-blue-light flex items-center justify-center flex-shrink-0">
                    <Briefcase size={16} className="text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-base md:text-lg leading-tight">{exp.position}</h3>
                    <p className="text-xs md:text-sm font-semibold text-muted-foreground mt-0.5">{exp.company}</p>
                    {exp.location && <p className="text-[10px] md:text-xs text-muted-foreground/80 mt-1 italic">{exp.location}</p>}
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] md:text-xs font-semibold bg-secondary text-muted-foreground whitespace-nowrap self-start">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3 pl-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-xs md:text-sm text-foreground leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-blue flex-shrink-0" />
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
