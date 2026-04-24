import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "church", title: "Church / Organisation", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 6, validation: (r) => r.required() }),
    defineField({ name: "avatar", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "featured", title: "Featured on homepage", type: "boolean" }),
  ],
  preview: {
    select: { title: "name", subtitle: "church", media: "avatar" },
  },
});
