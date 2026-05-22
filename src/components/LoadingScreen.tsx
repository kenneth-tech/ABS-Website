import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600);
    const hideTimer = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#faf2f0]"
      style={{
        transition: "opacity 0.6s ease",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Logo */}
      <div
        style={{
          animation: "abs-fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both",
        }}
      >
        <Image
          src="/logo.png"
          alt="ABS by Allen Schwartz"
          width={160}
          height={80}
          className="object-contain"
          priority
        />
      </div>

      {/* Animated line */}
      <div className="mt-8 w-32 h-px bg-gray-200 overflow-hidden">
        <div
          style={{
            height: "100%",
            background: "#111",
            animation: "abs-line 1.4s cubic-bezier(0.4,0,0.2,1) 0.3s both",
          }}
        />
      </div>

      <style>{`
        @keyframes abs-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes abs-line {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}
