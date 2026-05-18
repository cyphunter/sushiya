import sanitizeHtml from "sanitize-html";

export function sanitize(input: string): string {
  return sanitizeHtml(input, {
    allowedTags: [
      "p", "br", "strong", "em", "u", "s",
      "ul", "ol", "li",
      "h2", "h3", "h4",
      "a", "blockquote", "code", "pre",
    ],
    allowedAttributes: {
      a: ["href", "title", "target", "rel"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          rel: "noopener noreferrer",
          target: attribs.target ?? "_blank",
        },
      }),
    },
  });
}

export function stripHtml(input: string): string {
  return sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} }).trim();
}
