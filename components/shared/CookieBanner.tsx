"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const COOKIE_KEY = "ntg-cookies-accepted-v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY);
    if (!accepted) {
      // Small delay so it doesn't fight with page load
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "1");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "0");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "tween", duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-50"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="bg-white border border-stone-200 rounded-2xl shadow-2xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-olive-50 flex items-center justify-center shrink-0">
                <Cookie className="h-4.5 w-4.5 text-olive-600" style={{ width: "18px", height: "18px" }} />
              </div>
              <div>
                <p className="font-body font-semibold text-ink-900 text-sm mb-0.5">
                  We use cookies
                </p>
                <p className="font-body text-xs text-ink-500 leading-relaxed">
                  We use essential cookies to make our site work. With your consent, we also use analytics to improve your experience.{" "}
                  <Link href="/privacy" className="text-olive-600 underline underline-offset-2 hover:text-olive-700">
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <button
                onClick={decline}
                className="shrink-0 p-1 rounded-md hover:bg-stone-100 transition-colors text-ink-500"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-2">
              <button
                onClick={decline}
                className="flex-1 rounded-full border border-stone-200 text-ink-700 font-body font-medium text-xs py-2 hover:bg-stone-50 transition-colors"
              >
                Essential only
              </button>
              <button
                onClick={accept}
                className="flex-1 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-body font-medium text-xs py-2 transition-colors"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
