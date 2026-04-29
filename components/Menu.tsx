"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURED = [
  {
    name: "Enchiladas Michoacanas",
    desc: "Traditional Michoacán-style enchiladas with your choice of chicken or beef, topped with fresh cheese, lettuce, and tomato.",
    img: "/images/enchiladas-michoacanas.jpeg",
    badge: "Signature",
  },
  {
    name: "Enchiladas Con Cecina",
    desc: "Our pride. Hand-dipped tortillas in red chile sauce, topped with lettuce, tomato, queso, cecina, and served with rice and beans.",
    img: "/images/enchiladas-cecina.jpg",
    badge: "Bestseller",
  },
  {
    name: "Chilaquiles con Huevo",
    desc: "Crispy tortilla chips simmered in salsa, topped with avocado, crema, queso fresco, and scrambled eggs. Served with beans.",
    img: "/images/chilaquiles.jpeg",
    badge: null,
  },
  {
    name: "Aporreadillo",
    desc: "Shredded beef with scrambled eggs, onions, and tomatoes. A traditional Mexican breakfast served with rice, beans, and tortillas.",
    img: "/images/aporreadillo.jpeg",
    badge: null,
  },
  {
    name: "Quesadilla Dorada",
    desc: "Crispy grilled quesadilla filled with melted cheese and your choice of meat. Served with pico de gallo, guacamole, and grilled onions.",
    img: "/images/quesadilla-dorada.jpeg",
    badge: null,
  },
  {
    name: "Chavindeca",
    desc: "Golden fried masa pastry topped with lettuce, tomato, fresh cheese, avocado slices, and pickled onions. A Michoacán specialty.",
    img: "/images/chavindeca.jpeg",
    badge: null,
  },
];

const MORE_ITEMS = [
  { name: "Quesadilla La Ruana", desc: "Hand-pressed corn tortilla loaded with melted cheese, served with pico de gallo, roasted onion, and creamy avocado salsa." },
  { name: "Plato Carne Asada", desc: "Grilled steak served with rice, beans, fresh tortillas, and roasted vegetables. A hearty plate that always satisfies." },
  { name: "Enchiladas Verdes", desc: "Green sauce enchiladas with chicken or cheese, topped with sour cream, onions, and fresh cheese. Served with rice and beans." },
  { name: "Tacos Dorados", desc: "Crispy rolled tacos filled with chicken or potato. Topped with lettuce, tomato, cheese, and crema. 4 pieces per order." },
  { name: "Sopes", desc: "Thick handmade corn tortillas topped with beans, meat of your choice, lettuce, cheese, and crema. 3 pieces per order." },
  { name: "Torta Ahogada", desc: "Traditional drowned sandwich with carnitas, smothered in spicy tomato sauce. A Michoacán classic." },
  { name: "Pozole Rojo", desc: "Traditional hominy soup with pork in red chile broth. Served with cabbage, radish, lime, oregano, and tostadas." },
  { name: "Huevos Rancheros", desc: "Fried eggs on corn tortillas topped with ranchera sauce. Served with rice, beans, and fresh tortillas." },
  { name: "Tamales", desc: "Traditional steamed corn masa filled with chicken, pork, or rajas con queso. Choose red or green sauce." },
  { name: "Horchata / Agua Fresca", desc: "Refreshing rice cinnamon drink or choose from daily fresh fruit waters: jamaica, tamarindo, or seasonal flavors." },
  { name: "Flan Casero", desc: "Homemade vanilla custard with caramel sauce. The perfect sweet finish to your meal." },
];

const BADGE_COLORS = ["var(--teal)", "var(--red)", "var(--yellow)", "var(--green)", "var(--blue)", "var(--teal)"];
const BORDER_COLORS = ["var(--teal)", "var(--red)", "var(--yellow)", "var(--green)", "var(--blue)", "var(--teal)"];

export default function Menu() {
  const [showMore, setShowMore] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

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
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleLoadMore = () => {
    setShowMore(true);
    if (moreRef.current) {
      gsap.fromTo(
        moreRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" }
      );
    }
  };

  return (
    <section id="menu" className="w-screen py-24 px-6" style={{ background: "var(--black)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <span
            className="inline-block text-[12px] font-bold tracking-[0.25em] uppercase mb-4 relative px-8"
            style={{ color: "var(--orange)" }}
          >
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-px" style={{ background: "var(--orange)" }} />
            Nuestro menú
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-px" style={{ background: "var(--orange)" }} />
          </span>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontWeight: 800,
              fontSize: "clamp(34px, 6vw, 64px)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              marginBottom: 16,
            }}
          >
            Made fresh, <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--orange)" }}>served warm.</em>
          </h2>
          <p className="max-w-lg mx-auto text-[17px]" style={{ color: "rgba(250,246,238,0.7)" }}>
            A taste of our most-loved dishes. The full menu is available in-store and online.
          </p>
        </div>

        {/* Featured grid with images */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {FEATURED.map((item, i) => (
            <div
              key={item.name}
              className="rounded-lg overflow-hidden transition-all duration-300 cursor-pointer relative"
              style={{
                background: "var(--black-card)",
                border: "1px solid rgba(250,246,238,0.05)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.borderColor = BORDER_COLORS[i];
                el.style.boxShadow = "0 20px 50px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(250,246,238,0.05)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{ transform: "scale(1)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                />
                {item.badge && (
                  <span
                    className="absolute top-3 left-3 text-[10px] font-extrabold tracking-[0.12em] uppercase rounded-full"
                    style={{
                      padding: "5px 12px",
                      background: BADGE_COLORS[i],
                      color: "var(--black)",
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              {/* Content */}
              <div style={{ padding: 24 }}>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: "-0.01em",
                    color: "var(--cream)",
                  }}
                >
                  {item.name}
                </h3>
                <p className="text-[14px] leading-[1.55]" style={{ color: "rgba(250,246,238,0.65)" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load more items (text-only) */}
        {showMore && (
          <div
            ref={moreRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7"
          >
            {MORE_ITEMS.map((item, i) => (
              <div
                key={item.name}
                className="rounded-lg transition-all duration-200 cursor-pointer"
                style={{
                  padding: 24,
                  background: "var(--black-card)",
                  border: "1px solid rgba(250,246,238,0.05)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = BORDER_COLORS[i % BORDER_COLORS.length];
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(250,246,238,0.05)";
                  el.style.transform = "translateY(0)";
                }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: "-0.01em",
                    color: "var(--cream)",
                  }}
                >
                  {item.name}
                </h3>
                <p className="text-[14px] leading-[1.55]" style={{ color: "rgba(250,246,238,0.65)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Load more button */}
        {!showMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={handleLoadMore}
              className="rounded-full font-bold text-[14px] tracking-widest uppercase transition-all duration-200 cursor-pointer"
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "var(--orange)",
                border: "2px solid var(--orange)",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--orange)";
                el.style.color = "var(--black)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.color = "var(--orange)";
                el.style.transform = "translateY(0)";
              }}
            >
              Load More Menu Items
            </button>
          </div>
        )}

        <p className="text-center mt-14 text-[13px] italic" style={{ color: "rgba(250,246,238,0.5)" }}>
          * Prices and availability may vary. See full menu when you order.
        </p>
      </div>
    </section>
  );
}
