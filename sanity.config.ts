import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  title: "Nazareth Travel Group CMS",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Global Settings")
              .child(S.document().schemaType("settings").documentId("settings")),
            S.divider(),
            S.documentTypeListItem("package").title("Pilgrimage Packages"),
            S.documentTypeListItem("destination").title("Destinations"),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("faq").title("FAQs"),
            S.documentTypeListItem("post").title("Blog Posts"),
            S.documentTypeListItem("legalPage").title("Legal Pages (Privacy & Terms)"),
            S.divider(),
            S.documentTypeListItem("inquiry").title("Inquiries"),
          ]),
    }),
    visionTool(),
  ],
});
