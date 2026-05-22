import Image from "next/image";
import Link from "next/link";

export default function PhotoCollage() {
  return (
    <section>
      {/* Bento grid — same layout on all screen sizes */}
      <div
        className="grid collage-grid"
        style={{
          gridTemplateColumns: "2fr 1fr 1fr",
          gridTemplateRows: "38vh 38vh",
          gridTemplateAreas: `"a b c" "d e c"`,
          gap: 0,
        }}
      >
        <div style={{ gridArea: "a" }} className="relative overflow-hidden">
          <Image src="/collage-1.jpg" alt="Collection" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
        </div>
        <div style={{ gridArea: "b" }} className="relative overflow-hidden">
          <Image src="/collage-2.png" alt="Collection" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
        </div>
        <div style={{ gridArea: "c" }} className="relative overflow-hidden">
          <Image src="/collage-4.png" alt="Collection" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
        </div>
        <div style={{ gridArea: "d" }} className="relative overflow-hidden">
          <Image src="/collage-3.png" alt="Collection" fill className="object-cover hover:scale-105 transition-transform duration-700" style={{ objectPosition: "50% 25%" }} />
        </div>
        <div style={{ gridArea: "e" }} className="relative overflow-hidden">
          <Image src="/collage-5.png" alt="Collection" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      <div className="text-center py-6">
        <Link
          href="/products"
          className="text-[10px] tracking-[0.28em] uppercase text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
        >
          Show All
        </Link>
      </div>
    </section>
  );
}
