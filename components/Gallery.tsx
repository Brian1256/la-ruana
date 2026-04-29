"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHOTOS = [
  { src: "/images/enchiladas-michoacanas.jpeg", alt: "Enchiladas Michoacanas" },
  { src: "/images/chilaquiles.jpeg", alt: "Chilaquiles con Huevo" },
  { src: "/images/inside3.jpg", alt: "Restaurant interior" },
  { src: "/images/frontofstore.jpg", alt: "Restaurant storefront" },
  { src: "/images/aporreadillo.jpeg", alt: "Aporreadillo" },
  { src: "/images/enchiladas-cecina.jpg", alt: "Enchiladas Con Cecina" },
  { src: "/images/insidestore1.jpg", alt: "Dining area" },
];

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        gridRef.current?.children ?? [],
        { opacity: 0, scale: 0.93 },
        {
          opacity: 1, scale: 1, duration: 0.6, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-24 px-6" style={{ background: "var(--black-soft)" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="text-center mb-14">
          <span
            className="inline-block text-[12px] font-bold tracking-[0.25em] uppercase mb-4 relative px-8"
            style={{ color: "var(--orange)" }}
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-px" style={{ background: "var(--orange)" }} />
            Galería
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-px" style={{ background: "var(--orange)" }} />
          </span>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 800,
              fontSize: "clamp(34px, 6vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            A little taste,{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--orange)" }}>visually.</em>
          </h2>
        </div>

        {/* Mosaic grid matching design */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          style={{ gridTemplateRows: "auto" }}
        >
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-md relative cursor-pointer"
              style={{
                background: "var(--black)",
                aspectRatio: "1",
                ...(i === 0 ? { gridColumn: "span 2", gridRow: "span 2", aspectRatio: "auto", minHeight: 280 } : {}),
              }}
              onMouseEnter={(e) => {
                const img = (e.currentTarget as HTMLElement).querySelector("img");
                if (img) { img.style.transform = "scale(1.08)"; img.style.filter = "saturate(1.3)"; }
              }}
              onMouseLeave={(e) => {
                const img = (e.currentTarget as HTMLElement).querySelector("img");
                if (img) { img.style.transform = "scale(1)"; img.style.filter = "saturate(1.1)"; }
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                style={{ transition: "transform 0.6s, filter 0.4s", filter: "saturate(1.1)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
