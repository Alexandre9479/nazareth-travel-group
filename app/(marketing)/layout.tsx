import AnnouncementBar from "@/components/shared/AnnouncementBar";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFAB from "@/components/shared/WhatsAppFAB";
import CookieBanner from "@/components/shared/CookieBanner";
import BackToTop from "@/components/shared/BackToTop";
import PageProgress from "@/components/shared/PageProgress";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <PageProgress />
      <AnnouncementBar />
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFAB />
      <BackToTop />
      <CookieBanner />
    </>
  );
}
