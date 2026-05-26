import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden h-[clamp(220px,50vw,680px)] md:h-[clamp(320px,60vw,1000px)]">
      <Image
        src="/hero.jpg"
        alt="A New Era of Style"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />


    </section>
  );
}
