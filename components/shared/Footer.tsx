import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "./Container";
import { generalInquiryLink } from "@/lib/whatsapp";

const PROGRAMS = [
  { label: "Classic Holy Land", href: "/programs/classic-holy-land" },
  { label: "Holy Land & Jordan", href: "/programs/holy-land-jordan" },
  { label: "Rome & Italy", href: "/programs/rome-italy" },
  { label: "Egypt Biblical Journey", href: "/programs/egypt-biblical" },
  { label: "Footsteps of Paul", href: "/programs/footsteps-of-paul" },
  { label: "Bespoke Pilgrimage", href: "/programs/bespoke-holy-land" },
];

const COMPANY = [
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-us" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Pastors Portal", href: "/pastors" },
];

const RESOURCES = [
  { label: "Planning Tips", href: "/planning-tips" },
  { label: "FAQs", href: "/faqs" },
  { label: "Destinations", href: "/destinations" },
  { label: "Book Inquiry", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-stone-300 font-body">
      <Container className="pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-5 group">
              <Image
                src="/brand/logo.svg"
                alt="Nazareth Travel Group"
                width={180}
                height={62}
                className="h-14 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm leading-relaxed text-stone-400 max-w-xs mb-6">
              Africa's leading Christian pilgrimage company — crafting sacred
              journeys to the Holy Land, Rome, Egypt and beyond for Kenyan
              churches since 2013.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+254700000000"
                className="flex items-center gap-2.5 text-stone-400 hover:text-gold-300 transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                +254 700 000 000
              </a>
              <a
                href="mailto:info@nazarethtravelgroup.com"
                className="flex items-center gap-2.5 text-stone-400 hover:text-gold-300 transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@nazarethtravelgroup.com
              </a>
              <div className="flex items-start gap-2.5 text-stone-400">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-stone-400 hover:bg-olive-600 hover:text-white transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-stone-400 hover:bg-olive-600 hover:text-white transition-all">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-stone-400 hover:bg-olive-600 hover:text-white transition-all">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>
              </a>
              <a
                href={generalInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-stone-400 hover:bg-[#25D366] hover:text-white transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Programs
            </h3>
            <ul className="flex flex-col gap-2.5">
              {PROGRAMS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
              Resources
            </h3>
            <ul className="flex flex-col gap-2.5">
              {RESOURCES.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-xs text-stone-500 mb-3 uppercase tracking-widest">
                Quick Contact
              </p>
              <a
                href={generalInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full px-4 py-2 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {year} Nazareth Travel Group. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-stone-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
