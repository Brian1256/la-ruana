"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        textRef.current?.children ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: textRef.current, start: "top 80%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-screen py-24 px-6 overflow-hidden"
      style={{ background: "var(--black-soft)" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <div ref={imageRef} className="relative" style={{ paddingBottom: 24, paddingRight: 24 }}>
          <div
            className="relative overflow-hidden rounded-sm"
            style={{ aspectRatio: "4/5", boxShadow: "0 30px 80px rgba(0,0,0,0.5)" }}
          >
            <Image
              src="/images/inside2.jpg"
              alt="Inside La Ruana restaurant"
              fill
              className="object-cover"
            />
          </div>
          {/* Badge */}
          <div
            className="absolute flex flex-col items-center justify-center text-center rounded-full"
            style={{
              bottom: 0, right: 0,
              width: 140, height: 140,
              background: "var(--orange)",
              color: "var(--black)",
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: 13,
              lineHeight: 1.2,
              transform: "rotate(-8deg)",
              boxShadow: "0 12px 32px rgba(242,106,31,0.5)",
              border: "4px solid var(--black-soft)",
            }}
          >
            <span>Auténtico</span>
            <strong style={{ display: "block", fontSize: 28, fontStyle: "normal", fontWeight: 900, lineHeight: 1, margin: "4px 0", letterSpacing: "-0.02em" }}>
              Sabor
            </strong>
            <span>Mexicano</span>
          </div>
        </div>

        {/* Text */}
        <div ref={textRef}>
          <div className="flex h-1 w-20 rounded overflow-hidden mb-5">
            {["var(--teal)", "var(--yellow)", "var(--red)", "var(--green)", "var(--blue)"].map((c) => (
              <span key={c} className="flex-1" style={{ background: c }} />
            ))}
          </div>

          <span
            className="text-[11px] font-bold tracking-[0.25em] uppercase"
            style={{ color: "var(--orange)" }}
          >
            Nuestra historia
          </span>

          <h2
            className="mt-3 mb-6"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 800,
              fontSize: "clamp(34px, 5vw, 56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            From <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--orange)" }}>Michoacán</em> to your table.
          </h2>

          <p className="mb-4 text-[17px] leading-[1.75]" style={{ color: "rgba(250,246,238,0.8)" }}>
            La Ruana brings the rich, soulful flavors of Michoacán — the land of carnitas, corundas,
            and our beloved enchiladas — to the heart of Bellflower. Every plate is made with the
            same care our families have passed down for generations.
          </p>
          <p className="text-[17px] leading-[1.75]" style={{ color: "rgba(250,246,238,0.8)" }}>
            Walk in for a hot meal, call in for pickup, or order delivery. Whatever you choose,
            you&apos;ll taste the difference real Mexican cooking makes.
          </p>

          <div
            className="mt-7 pt-7"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontSize: 22,
              color: "var(--orange)",
              borderTop: "1px solid rgba(242,106,31,0.3)",
            }}
          >
            Bienvenidos a casa
          </div>
        </div>
      </div>
    </section>
  );
}
