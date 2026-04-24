"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { generalInquiryLink } from "@/lib/whatsapp";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Programs", href: "/programs" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Planning Tips", href: "/planning-tips" },
      { label: "FAQs", href: "/faqs" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "Pastors Portal", href: "/pastors" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden lg:block bg-olive-900 text-stone-300 text-xs font-body">
        <div className="mx-auto max-w-7xl px-12 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a
              href="tel:+254700000000"
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Phone className="h-3 w-3" />
              +254 700 000 000
            </a>
            <a
              href="mailto:info@nazarethtravelgroup.com"
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Mail className="h-3 w-3" />
              info@nazarethtravelgroup.com
            </a>
          </div>
          <p className="italic text-stone-400 font-display font-light">
            &ldquo;Walk where Jesus walked&rdquo;
          </p>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300 font-body",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Nazareth Travel Group — Home"
          >
            <Image
              src="/brand/logo.svg"
              alt="Nazareth Travel Group"
              width={160}
              height={55}
              priority
              className="h-12 w-auto transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      "text-ink-700 hover:text-olive-600 hover:bg-olive-50"
                    )}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label
                      )
                    }
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform",
                        openDropdown === link.label && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-1 w-48 rounded-xl bg-white shadow-lg border border-stone-200 py-2 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-ink-700 hover:text-olive-600 hover:bg-olive-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-olive-600 bg-olive-50"
                      : "text-ink-700 hover:text-olive-600 hover:bg-olive-50"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={generalInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-4 py-2 transition-all hover:-translate-y-0.5 shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-white text-sm font-semibold px-4 py-2 transition-all"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-ink-700 hover:bg-stone-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 z-50 bg-olive-900 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-olive-700">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <Image
                  src="/brand/logo.svg"
                  alt="Nazareth Travel Group"
                  width={140}
                  height={48}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md text-stone-300 hover:text-white hover:bg-olive-700 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    {link.children ? (
                      <div className="mb-2">
                        <p className="text-xs uppercase tracking-widest text-stone-400 mb-2 mt-4 font-body">
                          {link.label}
                        </p>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2.5 text-lg font-display font-light text-stone-300 hover:text-white transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "block py-3 text-2xl font-display font-light transition-colors border-b border-olive-700/50",
                          pathname === link.href
                            ? "text-gold-300"
                            : "text-white hover:text-gold-300"
                        )}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </nav>

            <div className="px-6 pb-10 flex flex-col gap-3">
              <a
                href={generalInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white text-base font-semibold py-3.5 transition-colors hover:bg-[#1ebe5d]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center rounded-full border border-white/30 text-white text-base font-semibold py-3.5 hover:bg-white/10 transition-colors"
              >
                Send Inquiry
              </Link>
              <div className="mt-4 flex gap-4 text-stone-400 text-sm font-body">
                <a href="tel:+254700000000" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" /> +254 700 000 000
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
