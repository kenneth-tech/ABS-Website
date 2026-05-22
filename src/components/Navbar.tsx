import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const galleryDropdown = [
  "Desk to Dinner",
  "Vacation Edit",
  "Summer Sets",
  "Occasion Ready",
  "Warm Weather Essentials",
  "Customer Favorites",
];

const featuredDropdown = [
  "New Arrivals",
  "Best Sellers",
  "Editor's Picks",
  "Trending Now",
  "Limited Edition",
  "Sale",
];

const aboutDropdown = [
  "Our Story",
  "Press",
  "Sustainability",
  "Careers",
  "Contact Us",
];

const featuredPhotos = [
  { src: "/fall-designs.jpg", label: "Fall Designs", href: "/gallery/fall-designs" },
  { src: "/discover-2.jpg", label: "Spring Designs", href: "/gallery/spring-designs" },
  { src: "/summer.png", label: "Summer", href: "/gallery/summer" },
];

const navItems = [
  { label: "Gallery", href: "/gallery", dropdown: galleryDropdown, photos: featuredPhotos },
  { label: "Featured", href: "/featured", dropdown: featuredDropdown, photos: featuredPhotos },
  { label: "About", href: "/about", dropdown: aboutDropdown, photos: null },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const active = navItems.find((n) => n.label === activeMenu) ?? null;

  const openMobileMenu = () => setMenuOpen(true);

  const closeMobileMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
      setActiveMobileSubmenu(null);
    }, 320);
  };

  return (
    <nav
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Main bar */}
      <div className="relative max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center py-4 px-1 ml-2">
          <Image
            src="/logo.png"
            alt="ABS by Allen Schwartz"
            width={175}
            height={88}
            className="object-contain"
            style={{ width: "175px", height: "88px" }}
            priority
          />
        </Link>

        {/* Nav links — desktop only, centred */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navItems.map(({ label, href }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => setActiveMenu(label)}
            >
              <Link
                href={href}
                className={`font-sans text-[12px] font-light tracking-[0.22em] uppercase transition-opacity ${
                  activeMenu && activeMenu !== label
                    ? "opacity-30"
                    : "text-black hover:opacity-50"
                }`}
              >
                {label}
              </Link>
              <span
                className={`absolute -bottom-[1px] left-0 right-0 h-px bg-black transition-opacity duration-200 ${
                  activeMenu === label ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Icons — desktop */}
        <div className="hidden md:flex items-center gap-3.5">
          <button aria-label="Search" className="text-black hover:opacity-50 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button aria-label="Account" className="text-black hover:opacity-50 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button aria-label="Cart" className="text-black hover:opacity-50 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>

        {/* Mobile right: cart + hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <button aria-label="Cart" className="text-black hover:opacity-50 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
          <button
            aria-label="Open menu"
            onClick={openMobileMenu}
            className="text-black hover:opacity-50 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile full-screen overlay ── */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-[60] bg-white flex flex-col"
          style={{
            animation: menuClosing
              ? "mobileMenuOut 0.32s cubic-bezier(0.4,0,1,1) forwards"
              : "mobileMenuIn 0.35s cubic-bezier(0,0,0.2,1) forwards",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100 flex-shrink-0">
            <Link href="/" onClick={closeMobileMenu}>
              <Image
                src="/logo.png"
                alt="ABS by Allen Schwartz"
                width={130}
                height={65}
                className="object-contain"
                style={{ width: "130px", height: "65px" }}
              />
            </Link>
            <button
              aria-label="Close menu"
              onClick={closeMobileMenu}
              className="text-black hover:opacity-50 transition-opacity"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Sliding panels */}
          <div className="relative flex-1 overflow-hidden">
            {/* First level */}
            <div
              className="absolute inset-0 overflow-y-auto transition-transform duration-300 ease-in-out"
              style={{ transform: activeMobileSubmenu ? "translateX(-100%)" : "translateX(0)" }}
            >
              {navItems.map(({ label, href, dropdown }) => (
                <div key={label} className="border-b border-gray-100">
                  {dropdown.length > 0 ? (
                    <button
                      className="flex items-center justify-between w-full px-6 py-5 text-left"
                      onClick={() => setActiveMobileSubmenu(label)}
                    >
                      <span className="font-sans text-[12px] font-light tracking-[0.25em] uppercase text-black">
                        {label}
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={href}
                      className="flex items-center justify-between w-full px-6 py-5"
                      onClick={closeMobileMenu}
                    >
                      <span className="font-sans text-[12px] font-light tracking-[0.25em] uppercase text-black">
                        {label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Second level */}
            <div
              className="absolute inset-0 bg-white overflow-y-auto transition-transform duration-300 ease-in-out"
              style={{ transform: activeMobileSubmenu ? "translateX(0)" : "translateX(100%)" }}
            >
              {/* Back button */}
              <button
                className="flex items-center gap-3 w-full px-6 py-5 border-b border-gray-100"
                onClick={() => setActiveMobileSubmenu(null)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
                </svg>
                <span className="font-sans text-[12px] font-light tracking-[0.25em] uppercase text-black">
                  {activeMobileSubmenu}
                </span>
              </button>

              {/* Submenu items */}
              {navItems
                .find((n) => n.label === activeMobileSubmenu)
                ?.dropdown.map((item) => (
                  <div key={item} className="border-b border-gray-100">
                    <Link
                      href={`/${activeMobileSubmenu?.toLowerCase()}/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="flex items-center justify-between px-6 py-4"
                      onClick={closeMobileMenu}
                    >
                      <span className="font-sans text-[12px] font-light tracking-[0.2em] uppercase text-gray-600">
                        {item}
                      </span>
                    </Link>
                  </div>
                ))}

              {/* Photos strip — only for Gallery and Featured */}
              {(activeMobileSubmenu === "Gallery" || activeMobileSubmenu === "Featured") && (
                <div className="px-6 pt-8 pb-6">
                  <div className="grid grid-cols-3 gap-3">
                    {featuredPhotos.map(({ src, label, href }) => (
                      <div key={label}>
                        <Link href={href} onClick={closeMobileMenu} className="block relative overflow-hidden group" style={{ aspectRatio: "3/4" }}>
                          <Image
                            src={src}
                            alt={label}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="33vw"
                          />
                        </Link>
                        <Link
                          href={href}
                          onClick={closeMobileMenu}
                          className="mt-2 flex items-center gap-1 font-sans text-[9px] font-light tracking-[0.15em] uppercase text-black"
                        >
                          {label}
                          <span className="text-[12px] leading-none">&rsaquo;</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Desktop Mega menu ── */}
      {active && (
        <div className="hidden md:block absolute left-0 w-full bg-white border-t border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
          <div className="max-w-screen-2xl mx-auto px-20 py-10 flex items-start gap-16">
            {/* Category label */}
            <div className="pt-1 flex-shrink-0">
              <p className="font-sans text-[9px] tracking-[0.55em] uppercase text-gray-300">
                {active.label}
              </p>
              <div className="mt-3 w-5 h-px bg-gray-300" />
            </div>

            {/* Items */}
            <div
              className={`grid gap-x-20 gap-y-0 ${
                active.dropdown.length > 4 ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {active.dropdown.map((item) => (
                <Link
                  key={item}
                  href={`${active.href}/${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="group flex items-center gap-0 py-2.5"
                >
                  <span className="w-0 group-hover:w-5 h-px bg-black transition-[width] duration-300 ease-out mr-0 group-hover:mr-3" />
                  <span className="font-sans text-[12px] font-light tracking-[0.22em] uppercase text-black group-hover:opacity-40 transition-opacity duration-200">
                    {item}
                  </span>
                </Link>
              ))}
            </div>

            {/* Featured photos */}
            {active.photos && (
              <div className="ml-auto flex gap-5">
                {active.photos.map(({ src, label, href }) => (
                  <div key={label} className="flex flex-col gap-2.5">
                    <Link href={href} className="relative block w-44 h-60 overflow-hidden group">
                      <Image
                        src={src}
                        alt={label}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="176px"
                      />
                    </Link>
                    <Link
                      href={href}
                      className="font-sans text-[11px] font-light tracking-[0.18em] uppercase text-black hover:opacity-50 transition-opacity flex items-center gap-1.5"
                    >
                      {label}
                      <span className="text-[13px] leading-none">&rsaquo;</span>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

