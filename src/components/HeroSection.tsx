import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(320px, 60vw, 1000px)" }}>
      <Image
        src="/hero.jpg"
        alt="A New Era of Style"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-center md:justify-start p-6 sm:p-10 md:p-12">
        <div className="flex justify-center md:justify-end">
          <div className="text-white text-center md:text-right leading-[0.88] font-semibold md:font-light tracking-wide italic hero-mobile-shadow"
            style={{ fontFamily: "var(--font-serif)" }}>
            <div className="md:hidden" style={{ fontSize: "clamp(24px, 5.5vw, 130px)" }}>A NEW ERA OF STYLE</div>
            <div className="hidden md:block" style={{ fontSize: "clamp(40px, 8vw, 130px)" }}>A NEW ERA</div>
            <div className="hidden md:block" style={{ fontSize: "clamp(40px, 8vw, 130px)" }}>OF STYLE</div>
          </div>
        </div>
      </div>
    </section>
  );
}
