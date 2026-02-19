import { useEffect, useRef } from "react";

export default function Summary() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="summary" className="bg-section-alt py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-reveal">

          <h2 className="text-5xl font-bold text-primary mt-2 mb-8 leading-tight">
            Get to <br /> Know Me
          </h2>
          <div className="w-12 h-1 bg-accent-blue rounded mb-10" />
          <div className="max-w-3xl">
            <p className="text-base text-foreground leading-8 font-light">
              I am an informatics graduate with professional experience and a strong interest in{" "}
              <span className="font-semibold text-primary">Frontend Development, Project Management, Social Media, and Data Analysis</span>.
              I have the ability to develop user-oriented solutions, manage projects efficiently, and analyze data to support accurate and strategic decision-making.
              I thrive in dynamic, fast-paced environments and consistently meet tight deadlines through strong time management skills.
            </p>
            <p className="text-base text-foreground leading-8 font-light mt-5">
              With solid leadership, effective communication, and strong teamwork abilities, I actively contribute to achieving goals and delivering measurable results.
              As an adaptable, proactive, and results-driven professional, I am committed to continuous learning and ready to provide creative, analytical, and agile solutions
              that add value and drive meaningful impact for organizational growth and success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
