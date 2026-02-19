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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle navy top strip */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent-blue z-10" />

      {/* Full-bleed photo — right side */}
      <div className="absolute inset-0">
        <img
          src={profileImg}
          alt="Profile"
          className="absolute right-0 top-0 h-full w-[55%] object-cover object-top"
        />
        {/* Gradient overlay: background on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/10" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Text content — left side */}
      <div ref={ref} className="section-reveal relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-xl">
          {/* Name with line accent */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-0.5 bg-accent-blue" />
            <span className="text-sm font-semibold text-accent-blue tracking-widest uppercase">
              [Your Full Name]
            </span>
          </div>

          {/* Big editorial tagline */}
          <h1 className="text-6xl md:text-7xl font-extrabold text-primary leading-[1.05] mb-8 tracking-tight">
            Business<br />
            <span className="text-accent-blue">Analyst.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg font-medium text-muted-foreground mb-3">
            Software Engineer · Project Manager
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
            Delivering data-driven insights and strategic solutions that bridge business objectives
            with technical execution to drive measurable organizational growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:opacity-90 transition-opacity shadow-sm"
            >
              View Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-7 py-3.5 border border-primary text-primary font-semibold text-sm rounded-md hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-8 bg-accent-blue/40 rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/60" />
      </div>
    </section>
  );
}
