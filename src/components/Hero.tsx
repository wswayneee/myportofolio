import { useEffect, useRef } from "react";
import profileImg from "@/assets/MEE .png";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setTimeout(() => el.classList.add("visible"), 80);
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle navy top strip */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent-blue z-10" />

      {/* Full-bleed photo — right side */}
      <div className="absolute inset-0 z-0">
        <img
          src={profileImg}
          alt="Profile"
          className="absolute right-[-15%] md:right-0 top-0 md:top-[-12%] h-full md:h-[125%] w-[120%] md:w-[55%] object-cover object-top brightness-[1.05] contrast-[1.02] opacity-25 md:opacity-100 transition-opacity duration-700"
          style={{ imageRendering: "auto" }}
        />
        {/* Mobile Gradient (Bottom to Top) */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:hidden" />
        {/* Desktop Gradient (Left to Right) */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-background via-background/80 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Text content — left side */}
      <div ref={ref} className="section-reveal relative z-10 max-w-6xl mx-auto px-6 w-full pt-32 md:pt-24 pb-16">
        <div className="max-w-2xl md:max-w-xl">
          {/* Name with line accent */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 md:w-10 h-0.5 bg-accent-blue" />
            <span className="text-xs md:text-sm font-semibold text-accent-blue tracking-widest uppercase">
              Wayne Stely Lamansiang
            </span>
          </div>

          {/* Big editorial tagline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary leading-[1.1] md:leading-[1.05] mb-8 tracking-tight">
            Software Engineering <span className="text-accent-blue">Enthusiast.</span>
          </h1>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-6 md:h-8 bg-accent-blue/40 rounded-full" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/60" />
      </div>
    </section>
  );
}
