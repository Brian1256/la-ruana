"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const APPS = [
  {
    name: "Seamless",
    time: "Ready in 15 min",
    href: "https://www.seamless.com/menu/enchiladas-michoacanas-la-ruana-9260-alondra-blvd-bellflower/12280120?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true",
    accentColor: "var(--teal)",
  },
  {
    name: "Grubhub",
    time: "Ready in 15 min",
    href: "https://www.grubhub.com/restaurant/enchiladas-michoacanas-la-ruana-9260-alondra-blvd-bellflower/12280120?utm_source=google&utm_medium=organic&utm_campaign=place-action-link&pickup=true",
    accentColor: "var(--yellow)",
  },
  {
    name: "Uber Eats",
    time: "Ready in 8–23 min",
    href: "https://www.ubereats.com/store/enchiladas-michoacanas-la-ruana/FG-ZNyWuSrOhh_4bUuzTMA?diningMode=PICKUP",
    accentColor: "var(--green)",
  },
  {
    name: "Postmates",
    time: "Ready in 8–23 min",
    href: "https://www.postmates.com/store/enchiladas-michoacanas-la-ruana/FG-ZNyWuSrOhh_4bUuzTMA?diningMode=PICKUP",
    accentColor: "var(--blue)",
  },
];

export default function Order() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const appsRef = useRef<HTMLDivElement>(null);
  const directRef = useRef<HTMLDivElement>(null);

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
        appsRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: appsRef.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        directRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: directRef.current, start: "top 85%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="order"
      className="w-screen py-24 px-6 relative overflow-hidden"
      style={{ background: "var(--yellow)", color: "var(--black)" }}
    >
      <div className="color-stripe absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <span
            className="inline-block text-[12px] font-bold tracking-[0.25em] uppercase mb-4 relative px-8"
            style={{ color: "var(--black)" }}
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-px bg-black" />
            Pide en línea
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-px bg-black" />
          </span>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 800,
              fontSize: "clamp(34px, 6vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              marginBottom: 16,
              color: "var(--black)",
            }}
          >
            Order in.{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--cream)" }}>
              We deliver.
            </em>
          </h2>
          <p className="max-w-lg mx-auto text-[17px]" style={{ color: "rgba(14,14,14,0.75)" }}>
            Pick up in 15–25 minutes, or get it brought to your door through your favorite delivery app.
          </p>
        </div>

        {/* Delivery apps */}
        <div
          ref={appsRef}
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
          {APPS.map((app) => (
            <Link
              key={app.name}
              href={app.href}
              target="_blank"
              className="rounded-xl flex flex-col gap-2 no-underline relative overflow-hidden transition-all duration-200"
              style={{
                padding: 28,
                background: "var(--black)",
                color: "var(--cream)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.4)";
                const bar = el.querySelector(".accent-bar") as HTMLElement | null;
                if (bar) bar.style.transform = "scaleX(1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                const bar = el.querySelector(".accent-bar") as HTMLElement | null;
                if (bar) bar.style.transform = "scaleX(0)";
              }}
            >
              <div
                className="accent-bar absolute top-0 left-0 right-0 h-[3px] origin-left"
                style={{ background: app.accentColor, transform: "scaleX(0)", transition: "transform 0.3s" }}
              />
              <span
                className="text-[11px] font-bold tracking-widest uppercase"
                style={{ color: "var(--orange)" }}
              >
                {app.time}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontSize: 24,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                {app.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Direct call */}
        <div
          ref={directRef}
          className="mt-12 rounded-xl text-center"
          style={{
            padding: 36,
            background: "var(--black)",
            color: "var(--cream)",
            maxWidth: 500,
            margin: "48px auto 0",
          }}
        >
          <h3
            className="mb-2"
            style={{ fontFamily: "var(--font-fraunces)", fontSize: 26, fontWeight: 700 }}
          >
            Or call us directly
          </h3>
          <p className="mb-5 opacity-70">Talk to us. We&apos;ll have it ready when you arrive.</p>
          <Link
            href="tel:5627359542"
            className="no-underline"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: 34,
              fontWeight: 800,
              color: "var(--orange)",
              letterSpacing: "-0.02em",
            }}
          >
            (562) 735-9542
          </Link>
        </div>
      </div>
    </section>
  );
}
