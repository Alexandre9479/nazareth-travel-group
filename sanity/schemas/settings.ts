import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Global Settings",
  type: "document",
  groups: [
    { name: "contact", title: "Contact & Social" },
    { name: "hero", title: "Hero Section" },
    { name: "features", title: "Why Choose Us (Features)" },
    { name: "story", title: "Our Story Section" },
    { name: "cta", title: "CTA Strip" },
    { name: "ticker", title: "Social Proof Ticker" },
    { name: "badges", title: "Trust Badges" },
    { name: "announcement", title: "Announcement Bar" },
    { name: "seo", title: "SEO Defaults" },
  ],
  fields: [
    /* ── Contact & Social ── */
    defineField({ name: "siteName", title: "Site Name", type: "string", group: "contact" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp Number (digits only, no +)", type: "string", group: "contact" }),
    defineField({ name: "phone", title: "Phone (display format)", type: "string", group: "contact" }),
    defineField({ name: "email", title: "Email Address", type: "string", group: "contact" }),
    defineField({ name: "address", title: "Office Address", type: "text", rows: 2, group: "contact" }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url", group: "contact" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url", group: "contact" }),
    defineField({ name: "youtubeUrl", title: "YouTube URL", type: "url", group: "contact" }),

    /* ── Hero Section ── */
    defineField({ name: "heroEyebrow", title: "Hero Eyebrow Text", type: "string", group: "hero", description: "Small text above the main heading e.g. 'Holy Land Pilgrimages from Africa'" }),
    defineField({ name: "heroHeadline", title: "Hero Headline (line 1)", type: "string", group: "hero" }),
    defineField({ name: "heroHeadlineAccent", title: "Hero Headline (accent/gold line)", type: "string", group: "hero" }),
    defineField({ name: "heroSubheadline", title: "Hero Subheadline", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroCTAPrimary", title: "Hero Primary CTA Label", type: "string", group: "hero" }),
    defineField({ name: "heroCTASecondary", title: "Hero Secondary CTA Label", type: "string", group: "hero" }),
    defineField({
      name: "heroStats",
      title: "Hero Stats (3 items)",
      type: "array",
      group: "hero",
      of: [{
        type: "object",
        fields: [
          { name: "value", type: "string", title: "Value (e.g. 12+)" },
          { name: "label", type: "string", title: "Label (e.g. Years of service)" },
        ],
      }],
    }),

    /* ── Features Section ── */
    defineField({ name: "featuresEyebrow", title: "Features Eyebrow", type: "string", group: "features" }),
    defineField({ name: "featuresHeadline", title: "Features Headline", type: "string", group: "features" }),
    defineField({ name: "featuresSubheadline", title: "Features Subheadline", type: "text", rows: 2, group: "features" }),
    defineField({
      name: "featureItems",
      title: "Feature Cards",
      type: "array",
      group: "features",
      of: [{
        type: "object",
        fields: [
          { name: "number", type: "string", title: "Number (e.g. 01)" },
          { name: "title", type: "string", title: "Title" },
          { name: "description", type: "text", title: "Description", rows: 3 },
        ],
      }],
    }),

    /* ── Our Story ── */
    defineField({ name: "storyEyebrow", title: "Story Section Eyebrow", type: "string", group: "story" }),
    defineField({ name: "storyHeadline", title: "Story Headline", type: "string", group: "story" }),
    defineField({ name: "storyParagraph1", title: "Story Paragraph 1", type: "text", rows: 4, group: "story" }),
    defineField({ name: "storyParagraph2", title: "Story Paragraph 2", type: "text", rows: 4, group: "story" }),
    defineField({ name: "storyQuote", title: "Story Blockquote", type: "text", rows: 3, group: "story" }),
    defineField({ name: "storyQuoteAuthor", title: "Quote Author", type: "string", group: "story" }),
    defineField({ name: "storyStatValue", title: "Floating Stat Value (e.g. 12+)", type: "string", group: "story" }),
    defineField({ name: "storyStatLabel", title: "Floating Stat Label", type: "string", group: "story" }),

    /* ── CTA Strip ── */
    defineField({ name: "ctaEyebrow", title: "CTA Eyebrow Text", type: "string", group: "cta" }),
    defineField({ name: "ctaHeadline", title: "CTA Headline", type: "string", group: "cta" }),
    defineField({ name: "ctaHeadlineAccent", title: "CTA Headline Accent (italic/gold part)", type: "string", group: "cta" }),
    defineField({ name: "ctaSubheadline", title: "CTA Subheadline", type: "text", rows: 2, group: "cta" }),
    defineField({ name: "ctaWhatsAppLabel", title: "WhatsApp Button Label", type: "string", group: "cta" }),
    defineField({ name: "ctaEmailLabel", title: "Email Button Label", type: "string", group: "cta" }),

    /* ── Social Proof Ticker ── */
    defineField({
      name: "tickerItems",
      title: "Social Proof Ticker Items",
      type: "array",
      group: "ticker",
      of: [{ type: "string" }],
      description: "Each item scrolls across the top of the site. e.g. 'Rev. Peter just inquired about the Classic Holy Land tour'",
    }),

    /* ── Trust Badges ── */
    defineField({
      name: "trustBadges",
      title: "Trust Badges",
      type: "array",
      group: "badges",
      of: [{
        type: "object",
        fields: [
          { name: "abbr", type: "string", title: "Abbreviation (e.g. IATA)" },
          { name: "name", type: "string", title: "Full name (e.g. IATA Member)" },
          { name: "logo", type: "image", title: "Logo (optional — upload when authorized)" },
        ],
      }],
    }),

    /* ── Announcement Bar ── */
    defineField({
      name: "announcement",
      title: "Announcement Bar",
      type: "object",
      group: "announcement",
      fields: [
        { name: "enabled", type: "boolean", title: "Show announcement bar" },
        { name: "text", type: "string", title: "Announcement text" },
        { name: "linkText", type: "string", title: "Link label (e.g. Reserve your place →)" },
        { name: "linkUrl", type: "string", title: "Link URL (e.g. /programs)" },
      ],
    }),

    /* ── SEO Defaults ── */
    defineField({ name: "defaultSeoTitle", title: "Default SEO Title", type: "string", group: "seo" }),
    defineField({ name: "defaultSeoDescription", title: "Default SEO Description", type: "text", rows: 3, group: "seo" }),
  ],
  preview: {
    select: { title: "siteName" },
    prepare: () => ({ title: "Global Settings" }),
  },
});
