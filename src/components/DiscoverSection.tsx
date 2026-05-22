import Image from "next/image";
import { useEffect, useRef } from "react";

export default function DiscoverSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const panels = section.querySelectorAll<HTMLElement>(".discover-panel");
    const label = section.querySelector<HTMLElement>(".discover-label");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            panels.forEach((panel, i) => {
              panel.style.transitionDelay = `${i * 120}ms`;
              panel.classList.add("discover-panel--visible");
            });
            if (label) {
              label.style.transitionDelay = "400ms";
              label.classList.add("discover-label--visible");
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* All screens: side-by-side panels */}
      <div className="flex" style={{ height: "clamp(260px, 60vw, 82vh)" }}>
        <div
          className="discover-panel relative w-1/3 overflow-hidden"
          style={{ transform: "translateX(-60px)", opacity: 0, transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease" }}
        >
          <Image src="/discover-1.png" alt="Discover the collection" fill sizes="33vw" className="object-cover object-top" />
        </div>
        <div
          className="discover-panel relative w-1/3 overflow-hidden"
          style={{ transform: "translateY(60px)", opacity: 0, transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease" }}
        >
          <Image src="/discover-2.jpg" alt="Discover mid" fill sizes="33vw" className="object-cover object-center" unoptimized />
        </div>
        <div
          className="discover-panel relative w-1/3 overflow-hidden"
          style={{ transform: "translateX(60px)", opacity: 0, transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease" }}
        >
          <Image src="/discover-3.jpg" alt="Discover detail" fill sizes="33vw" className="object-cover object-center" />
        </div>
      </div>

      {/* DISCOVER text — bottom left overlay */}
      <div className="absolute bottom-0 left-0 px-4 pb-0 sm:px-6 pointer-events-none">
        <span
          className="discover-label font-light text-white uppercase leading-none tracking-[-0.02em] opacity-0 italic"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(40px, 8vw, 130px)",
            textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)",
            transform: "translateY(30px)",
            display: "inline-block",
            transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.9s ease",
          }}
        >
          DISCOVER
        </span>
      </div>

      <style>{`
        .discover-panel--visible {
          transform: translate(0, 0) !important;
          opacity: 1 !important;
        }
        .discover-label--visible {
          transform: translateY(0) !important;
          opacity: 0.95 !important;
        }
      `}</style>
    </section>
  );
}
