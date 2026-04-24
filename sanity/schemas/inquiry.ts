import { defineField, defineType } from "sanity";

export default defineType({
  name: "inquiry",
  title: "Inquiry",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "church", title: "Church", type: "string" }),
    defineField({ name: "groupSize", title: "Group Size", type: "string" }),
    defineField({ name: "destination", title: "Destination Interest", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text", rows: 5 }),
    defineField({ name: "receivedAt", title: "Received At", type: "datetime" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Booked", value: "booked" },
          { title: "Closed", value: "closed" },
        ],
      },
      initialValue: "new",
    }),
    defineField({ name: "notes", title: "Internal Notes", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "name", subtitle: "email" },
  },
});
