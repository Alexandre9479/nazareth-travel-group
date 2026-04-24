"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useSpring } from "framer-motion";

export default function PageProgress() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const spring = useSpring(0, { stiffness: 200, damping: 30 });

  // Scroll-based reading progress
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      if (total > 0) setProgress((el.scrollTop / total) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Page navigation progress flash
  useEffect(() => {
    setLoading(true);
    setProgress(0);
    spring.set(0);
    const t1 = setTimeout(() => spring.set(70), 60);
    const t2 = setTimeout(() => { spring.set(100); setLoading(false); }, 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none">
      <motion.div
        className="h-full bg-linear-to-r from-olive-600 via-gold-500 to-gold-300 origin-left"
        style={{ scaleX: loading ? spring : progress / 100, transformOrigin: "0%" }}
      />
    </div>
  );
}
