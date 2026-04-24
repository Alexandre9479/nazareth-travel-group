import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Pilgrim Stories", value: "pilgrim-stories" },
          { title: "Biblical Sites", value: "biblical-sites" },
          { title: "Travel Tips", value: "travel-tips" },
          { title: "Announcements", value: "announcements" },
        ],
      },
    }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string", title: "Alt text" }] }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", fields: [{ name: "alt", type: "string", title: "Alt" }] },
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "coverImage" },
  },
  orderings: [{ title: "Published (newest)", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
});
