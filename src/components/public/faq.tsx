import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/data/faq";

export function Faq({ items, id }: { items: ReadonlyArray<FaqItem>; id?: string }) {
  return (
    <Accordion type="single" collapsible className="w-full" id={id}>
      {items.map((item, i) => (
        <AccordionItem key={item.question} value={`item-${i}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.reponse}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
