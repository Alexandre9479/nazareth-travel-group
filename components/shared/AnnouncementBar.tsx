"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

const ANNOUNCEMENT_KEY = "ntg-announcement-dismissed-v1";
const ANNOUNCEMENT_TEXT = "🕊️ Easter 2026 Holy Land departures now open — limited seats. ";
const ANNOUNCEMENT_LINK = "/programs";
const ANNOUNCEMENT_LINK_TEXT = "Reserve your place →";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(ANNOUNCEMENT_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(ANNOUNCEMENT_KEY, "1");
  };

  if (!visible) return null;

  return (
    <div
      role="banner"
      className="bg-olive-600 text-white text-xs font-body font-medium py-2.5 px-4 flex items-center justify-center gap-x-3 relative"
    >
      <span>
        {ANNOUNCEMENT_TEXT}
        <Link
          href={ANNOUNCEMENT_LINK}
          className="underline underline-offset-2 hover:text-gold-300 transition-colors"
        >
          {ANNOUNCEMENT_LINK_TEXT}
        </Link>
      </span>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
