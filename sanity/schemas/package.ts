import { defineField, defineType } from "sanity";

export default defineType({
  name: "package",
  title: "Pilgrimage Package",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "badge", title: "Badge (e.g. Most Popular)", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "region", title: "Region", type: "string" }),
    defineField({ name: "groupSize", title: "Group Size", type: "string" }),
    defineField({ name: "difficulty", title: "Difficulty", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text", rows: 5 }),
    defineField({ name: "featured", title: "Featured on homepage", type: "boolean" }),
    defineField({ name: "image", title: "Hero Image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt text", type: "string" })] }),
    defineField({ name: "gallery", title: "Gallery", type: "array", of: [{ type: "image", fields: [{ name: "alt", type: "string", title: "Alt text" }] }] }),
    defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "inclusions", title: "Inclusions", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "exclusions", title: "Exclusions", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "itinerary",
      title: "Day-by-Day Itinerary",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "day", type: "number", title: "Day" },
          { name: "title", type: "string", title: "Title" },
          { name: "description", type: "text", title: "Description" },
        ],
      }],
    }),
    defineField({ name: "displayOrder", title: "Display Order", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "duration", media: "image" },
  },
  orderings: [{ title: "Display Order", name: "displayOrderAsc", by: [{ field: "displayOrder", direction: "asc" }] }],
});
