import { defineField, defineType } from "sanity";

export default defineType({
  name: "legalPage",
  title: "Legal Pages",
  type: "document",
  fields: [
    defineField({
      name: "pageType",
      title: "Page",
      type: "string",
      options: {
        list: [
          { title: "Privacy Policy", value: "privacy" },
          { title: "Terms of Service", value: "terms" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated Date",
      type: "date",
      options: { dateFormat: "D MMMM YYYY" },
    }),
    defineField({
      name: "openingScripture",
      title: "Opening Scripture",
      type: "object",
      fields: [
        defineField({ name: "verse", title: "Verse text", type: "text", rows: 2 }),
        defineField({ name: "reference", title: "Reference (e.g. John 8:32)", type: "string" }),
      ],
    }),
    defineField({
      name: "body",
      title: "Page Content",
      type: "array",
      of: [
        { type: "block" },
      ],
      description: "Use headings (H2) for each section, then normal text for the content.",
    }),
    defineField({
      name: "closingScripture",
      title: "Closing Scripture",
      type: "object",
      fields: [
        defineField({ name: "verse", title: "Verse text", type: "text", rows: 2 }),
        defineField({ name: "reference", title: "Reference", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "pageType" },
  },
});
