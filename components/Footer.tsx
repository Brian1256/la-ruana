"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-center relative pt-16 pb-10 px-6"
      style={{ background: "var(--black)", color: "var(--cream)" }}
    >
      <div className="color-stripe absolute top-0 left-0 right-0" />

      <div className="relative w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden"
        style={{ boxShadow: "0 0 0 4px var(--orange), 0 8px 28px rgba(242,106,31,0.3)" }}
      >
        <Image src="/images/logo.jpg" alt="La Ruana logo" fill className="object-cover" />
      </div>

      <h3
        className="mb-2"
        style={{ fontFamily: "var(--font-fraunces)", fontSize: 28, fontWeight: 800, letterSpacing: "-0.025em" }}
      >
        Enchiladas Michoacanas La Ruana
      </h3>
      <p className="mb-9" style={{ fontFamily: "var(--font-fraunces)", fontStyle: "italic", color: "var(--orange)", fontSize: 17 }}>
        Auténtico sabor mexicano
      </p>

      <div className="flex justify-center gap-3 mb-10">
        {[
          {
            href: "https://www.instagram.com/enchiladaslaruana/",
            label: "Instagram",
            svg: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            ),
          },
          {
            href: "#",
            label: "TikTok",
            svg: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            ),
          },
        ].map(({ href, label, svg }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            className="w-12 h-12 rounded-full flex items-center justify-center no-underline transition-all duration-200"
            style={{
              background: "var(--black-card)",
              border: "1.5px solid rgba(250,246,238,0.15)",
              color: "var(--cream)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--orange)";
              el.style.borderColor = "var(--orange)";
              el.style.color = "var(--black)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--black-card)";
              el.style.borderColor = "rgba(250,246,238,0.15)";
              el.style.color = "var(--cream)";
              el.style.transform = "translateY(0)";
            }}
          >
            {svg}
          </Link>
        ))}
      </div>

      <div className="w-14 h-px mx-auto mb-6" style={{ background: "rgba(250,246,238,0.2)" }} />

      <p className="text-[13px]" style={{ color: "rgba(250,246,238,0.4)" }}>
        9260 Alondra Blvd, Bellflower, CA 90706 • © 2026 La Ruana
      </p>
    </footer>
  );
}
