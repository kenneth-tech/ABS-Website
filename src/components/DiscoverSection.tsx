import Image from "next/image";

export default function DiscoverSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* All screens: side-by-side panels */}
      <div className="flex" style={{ height: "clamp(260px, 60vw, 82vh)" }}>
        <div className="relative w-1/3 overflow-hidden">
          <Image src="/discover-1.png" alt="Discover the collection" fill className="object-cover object-top" />
        </div>
        <div className="relative w-1/3 overflow-hidden">
          <Image src="/discover-2.jpg" alt="Discover mid" fill className="object-cover object-center" />
        </div>
        <div className="relative w-1/3 overflow-hidden">
          <Image src="/discover-3.jpg" alt="Discover detail" fill className="object-cover object-center" />
        </div>
      </div>

      {/* DISCOVER text — bottom left overlay */}
      <div className="absolute bottom-0 left-0 px-4 pb-0 sm:px-6 pointer-events-none">
        <span
          className="font-light text-white uppercase leading-none tracking-[-0.02em] opacity-95 italic"
          style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px, 8vw, 130px)", textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 4px 40px rgba(0,0,0,0.5)" }}
        >
          DISCOVER
        </span>
      </div>
    </section>
  );
}
