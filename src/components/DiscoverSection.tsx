import Image from "next/image";

export default function DiscoverSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* All screens: side-by-side panels */}
      <div className="flex" style={{ height: "clamp(260px, 60vw, 82vh)" }}>
        <div className="relative w-1/3 overflow-hidden">
          <Image src="/discover-1.png" alt="Discover the collection" fill sizes="33vw" className="object-cover object-top" />
        </div>
        <div className="relative w-1/3 overflow-hidden">
          <Image src="/discover-2.jpg" alt="Discover mid" fill sizes="33vw" className="object-cover object-center" unoptimized />
        </div>
        <div className="relative w-1/3 overflow-hidden">
          <Image src="/discover-3.jpg" alt="Discover detail" fill sizes="33vw" className="object-cover object-center" />
        </div>
      </div>

      {/* Bottom gradient scrim for text legibility */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: "45%", background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)" }} />

      {/* Text overlay */}
      <div className="absolute inset-0 sm:inset-auto sm:bottom-0 sm:left-0 flex items-center justify-center sm:block px-4 pb-0 sm:px-6 pointer-events-none text-center sm:text-left">
        <div
          className="font-semibold md:font-light text-white uppercase leading-[0.88] tracking-wide italic hero-mobile-shadow"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <div className="md:hidden" style={{ fontSize: "clamp(24px, 5.5vw, 130px)" }}>SHOP THE NEW SEASON</div>
          <div className="hidden md:block" style={{ fontSize: "clamp(40px, 8vw, 130px)" }}>SHOP THE NEW SEASON</div>
        </div>
      </div>
    </section>
  );
}
