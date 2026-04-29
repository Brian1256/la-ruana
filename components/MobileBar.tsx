import Link from "next/link";

export default function MobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 grid grid-cols-4 lg:hidden z-50 relative"
      style={{ background: "var(--black)", boxShadow: "0 -4px 24px rgba(0,0,0,0.5)" }}
    >
      <div className="color-stripe absolute top-0 left-0 right-0" />
      {[
        {
          href: "tel:5627359542",
          label: "Call",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          ),
          primary: false,
        },
        {
          href: "https://maps.google.com/?q=9260+Alondra+Blvd+Bellflower+CA+90706",
          label: "Map",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          ),
          primary: false,
        },
        {
          href: "#menu",
          label: "Menu",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          ),
          primary: false,
        },
        {
          href: "#order",
          label: "Order",
          svg: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
          ),
          primary: true,
        },
      ].map(({ href, label, svg, primary }) => (
        <Link
          key={label}
          href={href}
          target={href.startsWith("https") ? "_blank" : undefined}
          className="flex flex-col items-center justify-center gap-1 py-3 px-1 no-underline text-[11px] font-bold tracking-wider uppercase transition-all duration-200"
          style={{
            color: primary ? "var(--black)" : "var(--cream)",
            background: primary ? "var(--orange)" : "transparent",
          }}
        >
          {svg}
          {label}
        </Link>
      ))}
    </div>
  );
}
