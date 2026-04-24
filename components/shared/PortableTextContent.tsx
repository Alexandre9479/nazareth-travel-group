"use client";
import { PortableText } from "@portabletext/react";
import type { PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-body text-base text-ink-500 leading-[1.8] mb-4">{children}</p>
    ),
    h2: ({ children }) => (
      <div className="mt-10 mb-5">
        <h2 className="font-display text-2xl font-light text-ink-900 mb-3">{children}</h2>
        <div className="gold-divider" />
      </div>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-lg font-light text-ink-900 mt-6 mb-2">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-gold-500 pl-5 my-6">
        <p className="font-display text-base font-light italic text-ink-600 leading-relaxed">
          {children}
        </p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2 font-body text-sm text-ink-500 leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 space-y-2 font-body text-sm text-ink-500 leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink-800">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.href?.startsWith("http") ? "_blank" : undefined}
        rel={value?.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-olive-600 hover:underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableTextContent({
  value,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any[];
}) {
  return (
    <div className="prose-pilgrimage">
      <PortableText value={value} components={components} />
    </div>
  );
}
