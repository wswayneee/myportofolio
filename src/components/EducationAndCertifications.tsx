import { useEffect, useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
    {
        institution: "Universitas Klabat",
        degree: "Bachelor of Computer Science - Major in Informatics",
        year: "2021 – 2024",
        highlight: "Cumulative GPA 3.79/4.00 - Magna CumLaude.",
    },
];

const certifications = [
    {
        name: "Data Management Staff Certification",
        year: "Nov 2024",
        desc: "Certified in professional data handling using Microsoft Office Suite, aligned with workplace standards."
    },
    {
        name: "Digital Marketing Certification",
        year: "Okt 2024",
        desc: "Comprehensive training in digital marketing strategies including social media promotion and digital branding."
    },
    {
        name: "Office Application Certification - Kominfo",
        year: "Okt 2024",
        desc: "Learn to operate computer systems, manage peripheral devices, utilize software applications, perform data entry tasks, and identify key aspects of user information security and data protection."
    }
];

export default function EducationAndCertifications() {
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
        <section id="education" className="bg-background py-20 md:py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div
                    ref={(el) => { refs.current[0] = el; }}
                    className="section-reveal mb-10 md:mb-12"
                >
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-accent-blue uppercase">Academic & Credentials</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-3">Education & Certifications</h2>
                    <div className="w-10 md:w-12 h-1 bg-accent-blue rounded" />
                </div>

                <div className="flex flex-col gap-12 md:gap-16">
                    {/* Education Column */}
                    <div ref={(el) => { refs.current[1] = el; }} className="section-reveal">
                        <div className="flex items-center gap-2 mb-6">
                            <GraduationCap size={18} className="text-accent-blue" />
                            <h3 className="font-bold text-primary text-lg md:text-xl">Education</h3>
                        </div>
                        <div className="space-y-6">
                            {educationData.map((edu, i) => (
                                <div key={i} className="relative pl-6 md:pl-8 border-l-2 border-border pb-2">
                                    <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-accent-blue border-4 border-background" />
                                    <h4 className="font-bold text-primary text-base md:text-lg leading-tight">{edu.institution}</h4>
                                    <p className="text-xs md:text-sm font-medium text-foreground mt-1">{edu.degree}</p>
                                    <p className="text-[10px] md:text-xs font-bold text-accent-blue mt-1 uppercase tracking-wider">{edu.year}</p>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-3 italic">{edu.highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div ref={(el) => { refs.current[2] = el; }} className="section-reveal section-reveal-delay-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Award size={18} className="text-accent-blue" />
                            <h3 className="font-bold text-primary text-lg md:text-xl">Certifications</h3>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                            {certifications.map((c, i) => (
                                <div key={i} className="flex flex-col gap-2 p-4 md:p-5 rounded-lg bg-accent-blue-light/40 border border-accent-blue/10 hover:border-accent-blue/30 transition-all hover:translate-x-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:gap-4">
                                        <span className="text-xs md:text-sm font-semibold text-primary/90">{c.name}</span>
                                        <span className="text-[10px] md:text-xs font-black text-accent-blue bg-white/60 px-2 py-1 rounded shadow-sm whitespace-nowrap self-start sm:self-auto">{c.year}</span>
                                    </div>
                                    {c.desc && <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed italic">{c.desc}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
