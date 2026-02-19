import { useEffect, useRef } from "react";
import profileImg from "@/assets/profile.jpg";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setTimeout(() => el.classList.add("visible"), 80);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-background pt-16">
      {/* Subtle navy top strip */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent-blue" />

      <div className="max-w-6xl mx-auto px-6 w-full py-24">
        <div ref={ref} className="section-reveal flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Photo — di atas nama */}
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-accent-blue opacity-15 scale-110" />
            <img
              src={profileImg}
              alt="Professional headshot"
              className="relative w-36 h-36 md:w-44 md:h-44 object-cover rounded-full shadow-[var(--shadow-card)] border-4 border-background"
            />
          </div>

          {/* Text content */}
          <p className="text-sm font-semibold tracking-widest text-accent-blue uppercase mb-4">
            Professional Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-4">
            [Your Full Name]
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            Business Analyst <span className="text-border mx-2">|</span> Software Engineer{" "}
            <span className="text-border mx-2">|</span> Project Manager
          </p>
          <p className="text-base text-muted-foreground max-w-lg leading-relaxed mb-10">
            Delivering data-driven insights and strategic solutions that bridge business objectives
            with technical execution to drive measurable organizational growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:opacity-90 transition-opacity shadow-sm"
            >
              View Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-6 py-3 border border-primary text-primary font-semibold text-sm rounded-md hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
