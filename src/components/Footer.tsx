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

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.601 3.698 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.856-.085 3.698-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.856-.601-3.698-1.942-5.038C20.646.673 18.804.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
            </svg>
          </a>
        </div>

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
