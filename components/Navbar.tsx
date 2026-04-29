"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!navRef.current) return;
      navRef.current.style.padding = window.scrollY > 60 ? "10px 24px" : "14px 24px";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 flex items-center justify-between transition-all duration-300"
      style={{
        background: "rgba(14,14,14,0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(242,106,31,0.2)",
        padding: "14px 24px",
        width: "100%",
      }}
    >
      <Link href="#" className="flex items-center gap-3 no-underline" style={{ color: "var(--cream)" }}>
        <div
          className="w-11 h-11 rounded-full relative overflow-hidden shrink-0"
          style={{ boxShadow: "0 0 0 2px var(--orange)" }}
        >
          <Image src="/images/logo.jpg" alt="La Ruana" fill className="object-cover" />
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-fraunces)", fontWeight: 800, fontSize: 17, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            La Ruana
          </div>
          <div style={{ fontSize: 10, fontWeight: 600, color: "var(--orange)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 3 }}>
            Auténtico Sabor
          </div>
        </div>
      </Link>

      <ul className="hidden lg:flex gap-8 list-none">
        {[["#about", "About"], ["#menu", "Menu"], ["#order", "Order"], ["#location", "Visit"]].map(
          ([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium transition-colors duration-200 no-underline"
                style={{ color: "var(--cream)", letterSpacing: "0.02em" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--orange)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream)")}
              >
                {label}
              </Link>
            </li>
          )
        )}
      </ul>

      <Link
        href="#order"
        className="no-underline font-bold text-[13px] tracking-widest uppercase transition-all duration-200 rounded-full"
        style={{
          background: "var(--orange)",
          color: "var(--black)",
          padding: "10px 18px",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--orange-light)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "var(--orange)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        Order Now
      </Link>
    </nav>
  );
}
