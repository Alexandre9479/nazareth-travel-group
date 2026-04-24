import { defineField, defineType } from "sanity";

export default defineType({
  name: "destination",
  title: "Destination",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "country", title: "Country", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 6 }),
    defineField({ name: "scripture", title: "Scripture Quote", type: "text", rows: 2 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt text" }] }),
    defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "bestTime", title: "Best Time to Visit", type: "string" }),
    defineField({ name: "featured", title: "Featured", type: "boolean" }),
  ],
  preview: {
    select: { title: "name", subtitle: "country", media: "heroImage" },
  },
});
