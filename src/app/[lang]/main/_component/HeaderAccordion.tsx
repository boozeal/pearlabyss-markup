"use client";

import HeaderMenuData from "@/app/mock/HeaderMenuData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HeaderAccordion() {
  return (
    <Accordion type="single" collapsible>
      {HeaderMenuData.map((item) => (
        <AccordionItem value={item.menu} key={item.menu}>
          <AccordionTrigger className="text-[17px] font-bold px-4">
            {item.menu}
          </AccordionTrigger>
          {item.submenu.map((submenu) => (
            <AccordionContent
              key={submenu}
              className="px-4 text-[15px] text-[#7a7a7a] py-3"
            >
              {submenu}
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
