"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(
        headlineRef.current?.querySelectorAll("span, em") ?? [],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.06 },
        "-=0.4"
      )
      .fromTo(taglineRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
      .fromTo(
        ctaRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
        "-=0.4"
      )
      .fromTo(scrollCueRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");
  }, []);

  const letters = [
    { char: "L", color: "var(--teal)" },
    { char: "A", color: "var(--red)" },
    { char: " ", color: "transparent" },
    { char: "R", color: "var(--yellow)" },
    { char: "U", color: "var(--cream)" },
    { char: "A", color: "var(--green)" },
    { char: "N", color: "var(--blue)" },
    { char: "A", color: "var(--cream)" },
  ];

  return (
    <section
      className="relative w-screen min-h-[92vh] flex items-center px-6 py-20 overflow-hidden"
      style={{ background: "var(--black)" }}
    >
      {/* Color stripe top */}
      <div className="color-stripe-6 absolute top-0 left-0 right-0 z-10" />

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(14,14,14,0.85) 0%, rgba(14,14,14,0.65) 50%, rgba(242,106,31,0.45) 100%), url('/images/enchiladas-cecina.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative orange glow */}
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(242,106,31,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div
          ref={eyebrowRef}
          className="inline-flex items-center gap-3 mb-7 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase"
          style={{
            padding: "8px 18px",
            background: "rgba(242,106,31,0.15)",
            border: "1.5px solid var(--orange)",
            color: "var(--orange)",
            opacity: 0,
          }}
        >
          ★ Bellflower&apos;s Favorite Mexican ★
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="mb-4 leading-none"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontWeight: 900,
            fontSize: "clamp(54px, 11vw, 130px)",
            letterSpacing: "-0.045em",
          }}
        >
          {letters.map(({ char, color }, i) =>
            char === " " ? (
              <span key={i}>&nbsp;</span>
            ) : (
              <span key={i} style={{ color, display: "inline-block", opacity: 0 }}>
                {char}
              </span>
            )
          )}
          <em
            className="block mt-2"
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--orange)",
              fontSize: "0.52em",
              opacity: 0,
            }}
          >
            Auténtico sabor mexicano.
          </em>
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="mt-8 mb-10 max-w-xl font-normal"
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "rgba(250,246,238,0.88)",
            opacity: 0,
          }}
        >
          Traditional Michoacán-style enchiladas, chilaquiles, quesadillas, and more.
          Straight from our kitchen to your table since day one.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <Link
            href="#order"
            className="inline-flex items-center gap-2 no-underline font-bold rounded-full transition-all duration-200"
            style={{
              padding: "16px 28px",
              background: "var(--orange)",
              color: "var(--black)",
              fontSize: 15,
              boxShadow: "0 4px 24px rgba(242,106,31,0.5)",
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--orange-light)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--orange)";
              el.style.transform = "translateY(0)";
            }}
          >
            Order Online
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#menu"
            className="inline-flex items-center gap-2 no-underline font-bold rounded-full transition-all duration-200"
            style={{
              padding: "16px 28px",
              background: "transparent",
              color: "var(--cream)",
              fontSize: 15,
              border: "2px solid var(--yellow)",
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--yellow)";
              el.style.color = "var(--black)";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--cream)";
              el.style.transform = "translateY(0)";
            }}
          >
            View Menu
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] font-semibold tracking-[0.3em] uppercase z-10"
        style={{ color: "var(--orange)", opacity: 0, animation: "bounce 2s infinite" }}
      >
        Scroll ↓
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-6px); }
        }
      `}</style>
    </section>
  );
}
