import { defineField, defineType } from "sanity";

export default defineType({
  name: "scripture",
  title: "Scripture Verses",
  type: "document",
  fields: [
    defineField({
      name: "verse",
      title: "Verse Text",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "reference",
      title: "Reference (e.g. John 3:16)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "usage",
      title: "Where is this used?",
      type: "string",
      options: {
        list: [
          { title: "Verse of the Day pool (homepage)", value: "daily" },
          { title: "Hero section", value: "hero" },
          { title: "About page", value: "about" },
          { title: "General / reusable", value: "general" },
        ],
      },
      initialValue: "daily",
    }),
    defineField({
      name: "active",
      title: "Active (include in rotation)",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "reference", subtitle: "verse" },
  },
  orderings: [{ title: "Reference A–Z", name: "refAsc", by: [{ field: "reference", direction: "asc" }] }],
});
