import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Global Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp Number (no +)", type: "string" }),
    defineField({ name: "phone", title: "Phone Number", type: "string" }),
    defineField({ name: "email", title: "Email Address", type: "string" }),
    defineField({ name: "address", title: "Office Address", type: "text", rows: 3 }),
    defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
    defineField({ name: "youtubeUrl", title: "YouTube URL", type: "url" }),
    defineField({
      name: "announcement",
      title: "Announcement Bar",
      type: "object",
      fields: [
        { name: "enabled", type: "boolean", title: "Enabled" },
        { name: "text", type: "string", title: "Text" },
        { name: "linkText", type: "string", title: "Link Text" },
        { name: "linkUrl", type: "string", title: "Link URL" },
      ],
    }),
    defineField({ name: "defaultSeoTitle", title: "Default SEO Title", type: "string" }),
    defineField({ name: "defaultSeoDescription", title: "Default SEO Description", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "siteName" },
  },
});
