"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { type SiteServices, type SiteCourses } from "@/siteConfig";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Accordion({
  values,
}: {
  values: SiteServices | SiteCourses;
}) {
  return (
    <AccordionPrimitive.Root
      className="w-full flex flex-col gap-8"
      type="single"
      collapsible
    >
      {values.map(({ name, content, tabname, listItems }, index) => (
        <AccordionItem
          value={tabname}
          key={index}
          className="p-3 bg-cyan-950/40 border-[1.3px] border-cyan-500/40 rounded-lg overflow-hidden data-[state=open]:border-cyan-500/80 transition-all duration-150"
        >
          <AccordionTrigger className="w-full rounded-t-lg text-cyan-100/70 data-[state=open]:text-cyan-200 data-[state=closed]:rounded-lg transition-all duration-150">
            <div className="flex justify-between items-center">
              <span className="uppercase font-sans text-[14px] sm:text-[18px] font-bold data-[state=open]:font-extrabold">
                {name}
              </span>
              <span className="p-[2px] bg-cyan-800/30 rounded-full">
                <ChevronDown />
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-3 px-4 text-cyan-200/80 rounded-b-lg data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp transition-all duration-200">
            <ul
              className={`${poppins.className} list-disc text-[15px] sm:text-[18px]`}
            >
              {listItems?.map((item, index) => (
                <li key={index} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive.Root>
  );
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("width-full", className)}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref} className={cn(className)} {...props}>
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className={cn(className)} {...props}>
    {children}
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
