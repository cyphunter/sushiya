import type { FAQPage, Question, WithContext } from "schema-dts";

export type FaqEntry = { question: string; reponse: string };

export function buildFaqSchema(items: ReadonlyArray<FaqEntry>): WithContext<FAQPage> {
  const questions: Question[] = items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.reponse,
    },
  }));
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions,
  };
}
