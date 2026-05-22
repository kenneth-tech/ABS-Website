import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch" style={{ backgroundColor: "#a8532c" }}>
      {/* Image */}
      <div className="relative w-full md:w-[45%] md:shrink-0" style={{ height: "clamp(220px, 50vw, 680px)" }}>
        <Image
          src="/about-hero2.png"
          alt="ABS by Allen Schwartz Collection"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Text */}
      <div className="flex-1 flex items-center justify-center px-8 py-10 sm:px-16 md:px-24 md:py-14">
        <div className="w-full">
          <h2
            className="leading-[1.1] mb-4 sm:mb-6 italic"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", color: "#ffffff", fontFamily: "var(--font-serif)", fontWeight: 300 }}
          >
            About
          </h2>
          <p className="text-white/80 leading-relaxed font-sans font-light mb-3"
            style={{ fontSize: "clamp(13px, 1.6vw, 16px)" }}>
            A.B.S. by Allen Schwartz is built on a legacy of confident femininity, timeless
            glamour, and modern sophistication.
          </p>
          <p className="text-white/80 leading-relaxed font-sans font-light mb-3"
            style={{ fontSize: "clamp(13px, 1.6vw, 16px)" }}>
            For decades, the brand has been recognized for elevated fashion that blends
            statement style with effortless wearability — designed for women who move with
            confidence, elegance, and individuality.
          </p>
          <p className="text-white/80 leading-relaxed font-sans font-light"
            style={{ fontSize: "clamp(13px, 1.6vw, 16px)" }}>
            Today, A.B.S. enters a new era, reimagining its heritage through refined silhouettes,
            expressive prints, and modern dressing made for every season.
          </p>
        </div>
      </div>
    </section>
  );
}
