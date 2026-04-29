"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    text: "The enchiladas Michoacanas are the real deal. Tastes exactly like my abuela used to make. Portions are huge and the staff is super friendly.",
    name: "María G.",
    meta: "Local guide",
    avatar: "M",
    accentColor: "var(--teal)",
  },
  {
    text: "Found this hidden gem on Alondra and I'm hooked. The chilaquiles are perfect and the horchata is so fresh. Already came back twice this week.",
    name: "Jose R.",
    meta: "Bellflower, CA",
    avatar: "J",
    accentColor: "var(--red)",
  },
  {
    text: "Authentic Mexican breakfast at its best. Came with my family on a Saturday and we all left full and happy. The quesadillas? Order them. Trust me.",
    name: "Andrea L.",
    meta: "Long Beach, CA",
    avatar: "A",
    accentColor: "var(--green)",
  },
];

export default function Reviews() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        cardsRef.current?.children ?? [],
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full py-24 px-6" style={{ background: "var(--black)" }}>
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="text-center mb-14">
          <span
            className="inline-block text-[12px] font-bold tracking-[0.25em] uppercase mb-4 relative px-8"
            style={{ color: "var(--orange)" }}
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-px" style={{ background: "var(--orange)" }} />
            Lo que dicen
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-px" style={{ background: "var(--orange)" }} />
          </span>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 800,
              fontSize: "clamp(34px, 6vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              marginBottom: 24,
            }}
          >
            Real food.{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--orange)" }}>Real love.</em>
          </h2>

          {/* Rating */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1 text-3xl" style={{ color: "var(--yellow)" }}>
              {"★★★★★"}
            </div>
            <div style={{ fontFamily: "var(--font-fraunces)", fontSize: 19, fontWeight: 600, color: "var(--cream)" }}>
              <strong style={{ fontSize: 32, color: "var(--orange)" }}>4.6</strong> from happy customers
            </div>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="p-8 rounded-lg relative transition-all duration-300"
              style={{
                background: "var(--black-card)",
                border: "1px solid rgba(250,246,238,0.05)",
                borderTop: `3px solid ${r.accentColor}`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `var(--orange)`;
                (e.currentTarget as HTMLElement).style.borderTopColor = r.accentColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(250,246,238,0.05)";
                (e.currentTarget as HTMLElement).style.borderTopColor = r.accentColor;
              }}
            >
              {/* Big quote mark */}
              <span
                className="absolute top-2 right-6 leading-none pointer-events-none select-none"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontSize: 90,
                  color: "var(--orange)",
                  opacity: 0.2,
                }}
              >
                "
              </span>

              <div className="flex gap-1 mb-4" style={{ color: "var(--yellow)", fontSize: 15 }}>
                {"★★★★★"}
              </div>

              <p
                className="mb-6 leading-[1.65] relative"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontSize: 16,
                  color: "var(--cream)",
                }}
              >
                {r.text}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[17px] shrink-0"
                  style={{
                    background: r.accentColor,
                    color: "var(--black)",
                    fontFamily: "var(--font-fraunces)",
                  }}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[15px]" style={{ color: "var(--cream)" }}>{r.name}</div>
                  <div className="text-[12px]" style={{ color: "rgba(250,246,238,0.5)" }}>{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
