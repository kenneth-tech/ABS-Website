import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Quote block */}
      <div className="w-full bg-[#e8e8e8] flex flex-col items-center justify-center px-8 py-16 text-center" style={{ minHeight: "220px" }}>
        <blockquote
          className="font-display font-light italic text-[#555] max-w-2xl"
          style={{ fontSize: "clamp(18px, 2.2vw, 30px)", lineHeight: "1.6" }}
        >
          "I always want to manipulate trend so we constantly produce fresh and new styles."
        </blockquote>
        <p className="mt-4 font-sans text-[11px] tracking-[0.28em] uppercase text-[#888]">— Allen Schwartz</p>
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3">
        {/* Legal links */}
        <div className="flex items-center gap-4 sm:gap-6">
          {["Cookie Policy", "Privacy Policy", "Terms & Conditions"].map((label) => (
            <Link
              key={label}
              href={`/${label.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              className="text-[10px] tracking-wide text-gray-500 hover:text-black transition-colors whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[10px] tracking-wide text-gray-400 whitespace-nowrap">
          © 2026 ABS by Allen Schwartz
        </p>

        {/* Language switcher */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-wide text-gray-500">EN/US</span>
          <span className="text-gray-300 text-xs">|</span>
          <button className="text-[10px] tracking-wide text-gray-500 hover:text-black transition-colors">
            EN/US
          </button>
        </div>
      </div>
    </footer>
  );
}
