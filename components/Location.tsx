"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HOURS = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "9:00 AM – 6:30 PM", closed: false },
  { day: "Wednesday", time: "9:00 AM – 6:30 PM", closed: false },
  { day: "Thursday", time: "9:00 AM – 6:30 PM", closed: false },
  { day: "Friday", time: "9:00 AM – 6:30 PM", closed: false },
  { day: "Saturday", time: "9:00 AM – 6:30 PM", closed: false },
  { day: "Sunday", time: "9:00 AM – 6:30 PM", closed: false },
];

// JS day: 0=Sun,1=Mon,2=Tue,3=Wed,4=Thu,5=Fri,6=Sat
// hours array index: 0=Mon,1=Tue,...,6=Sun
const DAY_MAP = [6, 0, 1, 2, 3, 4, 5];

export default function Location() {
  const [todayIndex, setTodayIndex] = useState<number>(-1);
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTodayIndex(DAY_MAP[new Date().getDay()]);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current?.children ?? [],
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: infoRef.current, start: "top 80%", once: true },
        }
      );
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: mapRef.current, start: "top 80%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="w-screen py-24 px-6"
      style={{ background: "var(--black-soft)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-[12px] font-bold tracking-[0.25em] uppercase mb-4 relative px-8"
            style={{ color: "var(--orange)" }}
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-px" style={{ background: "var(--orange)" }} />
            Visítanos
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
            Come{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--orange)" }}>say hola.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Info */}
          <div ref={infoRef}>
            {/* Address */}
            <div
              className="flex items-start gap-4 py-5"
              style={{ borderBottom: "1px solid rgba(250,246,238,0.08)" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
                style={{ background: "var(--orange)", color: "var(--black)" }}
              >
                📍
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "var(--orange)" }}>
                  Address
                </div>
                <Link
                  href="https://maps.google.com/?q=9260+Alondra+Blvd+Bellflower+CA+90706"
                  target="_blank"
                  className="no-underline transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--cream)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--orange)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                >
                  9260 Alondra Blvd<br />Bellflower, CA 90706
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div
              className="flex items-start gap-4 py-5"
              style={{ borderBottom: "1px solid rgba(250,246,238,0.08)" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
                style={{ background: "var(--orange)", color: "var(--black)" }}
              >
                📞
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "var(--orange)" }}>
                  Phone
                </div>
                <Link
                  href="tel:5627359542"
                  className="no-underline transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--cream)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--orange)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                >
                  (562) 735-9542
                </Link>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 py-5">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-lg font-bold shrink-0"
                style={{ background: "var(--orange)", color: "var(--black)" }}
              >
                🕐
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "var(--orange)" }}>
                  Hours
                </div>
                <div className="grid gap-y-2" style={{ gridTemplateColumns: "1fr auto" }}>
                  {HOURS.map((h, i) => {
                    const isToday = i === todayIndex;
                    return (
                      <div key={i} style={{ display: "contents" }}>
                        <span
                          className="font-semibold text-[14px]"
                          style={{ color: isToday ? "var(--orange)" : "var(--cream)" }}
                        >
                          {h.day}
                          {isToday && (
                            <span
                              className="ml-2 text-[9px] font-bold tracking-wider rounded px-1 py-px"
                              style={{ background: "var(--orange)", color: "var(--black)" }}
                            >
                              TODAY
                            </span>
                          )}
                        </span>
                        <span
                          className="text-[14px] text-right"
                          style={{
                            fontFamily: "var(--font-fraunces)",
                            color: h.closed
                              ? "var(--red)"
                              : isToday
                              ? "var(--orange)"
                              : "rgba(250,246,238,0.7)",
                            fontWeight: h.closed || isToday ? 700 : 400,
                          }}
                        >
                          {h.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            ref={mapRef}
            className="rounded-lg overflow-hidden min-h-[420px] relative"
            style={{
              border: "2px solid var(--orange)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
            }}
          >
            <iframe
              src="https://www.google.com/maps?q=9260+Alondra+Blvd+Bellflower+CA+90706&output=embed"
              loading="lazy"
              className="w-full h-full border-0 absolute inset-0"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.7)", minHeight: 420 }}
              title="La Ruana location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
