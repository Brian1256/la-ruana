"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [status, setStatus] = useState<{ text: string; open: boolean }>({
    text: "Open Now • Closes 6:30 PM",
    open: true,
  });

  useEffect(() => {
    function check() {
      const now = new Date();
      const day = now.getDay(); // 0=Sun, 1=Mon
      const total = now.getHours() * 60 + now.getMinutes();
      const open = 9 * 60;
      const close = 18 * 60 + 30;

      if (day === 1) {
        setStatus({ text: "Closed Today • Open Tuesday 9:00 AM", open: false });
      } else if (total >= open && total < close) {
        setStatus({ text: "Open Now • Closes 6:30 PM", open: true });
      } else {
        setStatus({ text: "Closed Now • Open at 9:00 AM", open: false });
      }
    }
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="text-center py-2 px-5 text-[13px] font-bold tracking-wide"
      style={{
        background: status.open ? "var(--orange)" : "var(--red)",
        color: status.open ? "var(--black)" : "var(--cream)",
      }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full mr-2 align-middle animate-pulse"
        style={{ background: status.open ? "var(--black)" : "var(--cream)" }}
      />
      {status.text}
    </div>
  );
}
