import { defineField, defineType } from "sanity";

export default defineType({
  name: "departure",
  title: "Departures Calendar",
  type: "document",
  fields: [
    defineField({
      name: "tourTitle",
      title: "Tour Name",
      type: "string",
      validation: (r) => r.required(),
      description: "e.g. Classic Holy Land Pilgrimage",
    }),
    defineField({
      name: "departureMonth",
      title: "Departure Month (display text)",
      type: "string",
      validation: (r) => r.required(),
      description: "e.g. February 2026",
    }),
    defineField({
      name: "departureDate",
      title: "Actual Departure Date",
      type: "date",
    }),
    defineField({
      name: "type",
      title: "Departure Type",
      type: "string",
      options: {
        list: [
          { title: "Regular Group", value: "Group" },
          { title: "Easter Special", value: "Easter Special" },
          { title: "Christmas Special", value: "Christmas Special" },
          { title: "Private / Bespoke", value: "Private" },
        ],
      },
      initialValue: "Group",
    }),
    defineField({
      name: "seatsLeft",
      title: "Seats Remaining",
      type: "number",
      validation: (r) => r.min(0),
    }),
    defineField({
      name: "active",
      title: "Show on website",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "linkedPackage",
      title: "Linked Package (optional)",
      type: "reference",
      to: [{ type: "package" }],
    }),
  ],
  preview: {
    select: { title: "departureMonth", subtitle: "tourTitle" },
  },
  orderings: [{ title: "Departure Date", name: "departureDateAsc", by: [{ field: "departureDate", direction: "asc" }] }],
});
